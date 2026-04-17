"use client";

import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

const leadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

interface LeadFormProps {
  source?: string;
  className?: string;
}

const inputClassName =
  "bg-black border-white/10 text-white placeholder:text-white/30 focus:border-white/30 focus:ring-0 rounded-xl";

const LeadForm = ({ source = "website", className = "" }: LeadFormProps) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const result = leadSchema.safeParse(form);
    if (!result.success) {
      toast({ title: "Validation error", description: result.error.errors[0].message, variant: "destructive" });
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("leads").insert({
      name: result.data.name,
      phone: result.data.phone || null,
      email: result.data.email,
      message: result.data.message || null,
      source,
    });
    setLoading(false);

    if (error) {
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
    } else {
      // Silently call the edge function to email the lead details
      fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/send-lead-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          name: result.data.name,
          phone: result.data.phone || "",
          email: result.data.email,
          message: result.data.message || "",
          source,
        }),
      }).catch(console.error);

      setSubmitted(true);
      setForm({ name: "", phone: "", email: "", message: "" });
    }
  };

  const updateField = (field: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: event.target.value }));

  return (
    <div
      className={`rounded-2xl p-6 sm:p-8 ${className}`}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-5">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">We'll be in touch!</h3>
            <p className="text-sm max-w-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              Thanks for reaching out. We'll get back within 24 hours with a
              free consultation plan.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-sm transition-colors"
              style={{ color: "rgba(255,255,255,0.3)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
            >
              Submit another inquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <Input
              placeholder="Your name *"
              value={form.name}
              onChange={updateField("name")}
              required
              className={inputClassName}
            />
            <Input
              placeholder="Phone number"
              value={form.phone}
              onChange={updateField("phone")}
              className={inputClassName}
            />
            <Input
              placeholder="Email address *"
              type="email"
              value={form.email}
              onChange={updateField("email")}
              required
              className={inputClassName}
            />
            <Textarea
              placeholder="Tell us about your needs..."
              value={form.message}
              onChange={updateField("message")}
              rows={4}
              className={`${inputClassName} resize-none`}
            />
            {/* Submit — white bg, black text, no purple */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-white text-black rounded-full py-3.5 text-sm font-semibold hover:bg-white/90 transition-all disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Book a free call
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LeadForm;
