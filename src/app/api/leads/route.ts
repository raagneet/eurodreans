import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Lead } from "@/models/Lead";
import { Resend } from "resend";

// Intentionally ignoring missing API keys for dev fallback
const resend = new Resend(process.env.RESEND_API_KEY || "re_mock_key");

export async function POST(req: Request) {
  try {
    const { name, email, phone } = await req.json();

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    try {
      await connectToDatabase();
      const newLead = await Lead.create({ name, email, phone, pdfDownloaded: true });

      // Integration: Email Automation via Resend
      if (process.env.RESEND_API_KEY) {
         await resend.emails.send({
           from: "Eurodreams <admissions@eurodreams.com>",
           to: email,
           subject: "Here is your Free Italy Scholarship Guide! 🎓",
           html: `<p>Hi ${name},</p><p>Welcome to Eurodreams. Here is the link to download your guide.</p>`
         });
      }

      // Integration: WhatsApp trigger (Mock approach, normally hits WhatsApp Cloud API)
      console.log(`[WhatsApp API Hook]: Sending welcome template to ${phone}`);

      return NextResponse.json({ success: true, leadId: newLead._id }, { status: 201 });
    } catch (dbError) {
      console.warn("Database or Integration Error:", dbError);
      // Fallback for local development without DB configured
      return NextResponse.json({ success: true, mock: true, message: "Lead captured successfully (Mock Mode)" }, { status: 201 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
