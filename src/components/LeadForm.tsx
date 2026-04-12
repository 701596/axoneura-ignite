import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

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

const LeadForm = ({ source = "website", className = "" }: LeadFormProps) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      toast({ title: "We'll be in touch!", description: "Thanks for reaching out." });
      setForm({ name: "", phone: "", email: "", message: "" });
    }
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <form onSubmit={handleSubmit} className={`glass-card p-6 sm:p-8 space-y-4 ${className}`}>
      <Input placeholder="Your name *" value={form.name} onChange={update("name")} required className="bg-background/50 border-border/30" />
      <Input placeholder="Phone number" value={form.phone} onChange={update("phone")} className="bg-background/50 border-border/30" />
      <Input placeholder="Email address *" type="email" value={form.email} onChange={update("email")} required className="bg-background/50 border-border/30" />
      <Textarea placeholder="Tell us about your needs..." value={form.message} onChange={update("message")} rows={4} className="bg-background/50 border-border/30" />
      <Button type="submit" disabled={loading} className="w-full glow-border">
        {loading ? "Sending..." : "Book a free call"}
      </Button>
    </form>
  );
};

export default LeadForm;
