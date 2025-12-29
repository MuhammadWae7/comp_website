import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json()

    // Validate inputs
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "جميع الحقول مطلوبة" }, { status: 400 })
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Email to company
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "elsewedyforlandtransport@gmail.com",
      subject: `رسالة جديدة من ${name}`,
      html: `
        <div style="direction: rtl; font-family: Arial, sans-serif;">
          <h2>رسالة جديدة من موقع شركة السويدي</h2>
          <p><strong>الاسم:</strong> ${name}</p>
          <p><strong>البريد الإلكتروني:</strong> ${email}</p>
          <p><strong>رقم الهاتف:</strong> ${phone}</p>
          <p><strong>الرسالة:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    })

    // Confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "شكراً لتواصلك معنا",
      html: `
        <div style="direction: rtl; font-family: Arial, sans-serif;">
          <h2>شكراً لك يا ${name}</h2>
          <p>شكراً لتواصلك معنا. لقد تلقينا رسالتك وسنرد عليك في أقرب وقت.</p>
          <p>إذا كان لديك أي استفسارات أخرى، لا تتردد في الاتصال بنا على الرقم: 01000054371</p>
          <p>مع أطيب التحيات،<br>فريق شركة السويدي</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true, message: "تم إرسال الرسالة بنجاح" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "حدث خطأ أثناء إرسال الرسالة" },
      { status: 500 }
    )
  }
}
