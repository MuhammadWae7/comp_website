"use client";

import { useState } from "react";
import { X, Send } from "lucide-react";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSend = async () => {
    if (!message.trim()) return;

    setIsLoading(true);
    try {
      // Send email via Gmail
      const mailtoLink = `mailto:elsewedyforlandtransport@gmail.com?subject=رسالة من موقع شركة السويدي&body=${encodeURIComponent(
        message
      )}`;
      window.location.href = mailtoLink;

      setStatus("success");
      setMessage("");
      setTimeout(() => {
        setIsOpen(false);
        setStatus("idle");
      }, 1000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 animate-in fade-in zoom-in duration-300">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">أرسل رسالة</h2>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setMessage("");
                  setStatus("idle");
                }}
                className="text-gray-500 hover:text-gray-700 transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Message Input */}
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="اكتب رسالتك هنا..."
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition resize-none mb-4"
            />

            {/* Status Messages */}
            {status === "success" && (
              <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg mb-4 text-sm">
                شكراً! سيتم فتح بريدك الإلكتروني لإرسال الرسالة.
              </div>
            )}

            {status === "error" && (
              <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg mb-4 text-sm">
                حدث خطأ. يرجى المحاولة مرة أخرى.
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setMessage("");
                  setStatus("idle");
                }}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition"
              >
                إلغاء
              </button>
              <button
                onClick={handleSend}
                disabled={isLoading || !message.trim()}
                className="flex-1 bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-400 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {isLoading ? "جاري..." : "إرسال"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Trigger Button - Export for use in footer */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2"
      >
        {/* This will be replaced by the footer email link */}
      </button>

      {/* Export the trigger function */}
      <script
        dangerouslySetInnerHTML={{
          __html: `window.openContactModal = () => { window.contactModalOpen = true; }`,
        }}
      />
    </>
  );
}

// Export function to open modal from anywhere
export function useContactModal() {
  return {
    open: () => {
      const event = new CustomEvent("openContactModal");
      window.dispatchEvent(event);
    },
  };
}
