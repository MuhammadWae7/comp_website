"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus("idle");

    try {
      // Create email body
      const emailBody = `
الاسم: ${formData.name}
البريد الإلكتروني: ${formData.email}
رقم الهاتف: ${formData.phone}

الرسالة:
${formData.message}
      `.trim();

      // Use mailto as fallback, but also send via API if available
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        // Fallback to mailto if API fails
        const mailtoLink = `mailto:elsewedyforlandtransport@gmail.com?subject=رسالة جديدة من ${
          formData.name
        }&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoLink;
      }
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-40 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            تواصل معنا
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            لديك أي استفسارات؟ نحن هنا لمساعدتك. أرسل لنا رسالة وسنرد عليك في
            أقرب وقت.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  رقم الهاتف
                </h3>
                <a
                  href="tel:+201000054371"
                  className="text-gray-600 hover:text-yellow-500 transition-colors text-lg font-light"
                >
                  01000054371
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  البريد الإلكتروني
                </h3>
                <a
                  href="mailto:elsewedyforlandtransport@gmail.com"
                  className="text-gray-600 hover:text-yellow-500 transition-colors text-lg font-light break-all"
                >
                  elsewedyforlandtransport@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">الموقع</h3>
                <p className="text-gray-600 text-lg font-light">مصر</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-bold text-gray-900 mb-3"
                >
                  الاسم
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                  placeholder="أدخل اسمك"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-bold text-gray-900 mb-3"
                >
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-lg font-bold text-gray-900 mb-3"
              >
                رقم الهاتف
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                placeholder="أدخل رقم هاتفك"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg font-bold text-gray-900 mb-3"
              >
                الرسالة
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition resize-none"
                placeholder="اكتب رسالتك هنا..."
              />
            </div>

            {submitStatus === "success" && (
              <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                شكراً لك! تم إرسال رسالتك بنجاح. سنرد عليك قريباً.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 text-lg"
            >
              <Send className="w-5 h-5" />
              {isLoading ? "جاري الإرسال..." : "إرسال الرسالة"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
