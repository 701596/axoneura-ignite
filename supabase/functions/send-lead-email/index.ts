import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import nodemailer from "npm:nodemailer@6.9.3";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { name, phone, email, message, source } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ananyayadav65ay@gmail.com',
        pass: 'hqshcpysedoaliyj',
      },
    });

    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });

    const mailOptions = {
      from: '"Axoneura-edu opus" <ananyayadav65ay@gmail.com>',
      to: 'axoneura@gmail.com',
      subject: `New Lead: ${name} — ${source}`,
      text: `New lead received from axoneura.in\n\nName: ${name}\nPhone: ${phone || 'N/A'}\nEmail: ${email}\nSource: ${source}\nMessage: ${message || 'N/A'}\n\nReceived at: ${timestamp}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: %s", info.messageId);

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});
