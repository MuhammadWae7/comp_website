"use client";

import { useState } from "react";
import { X, Send } from "lucide-react";

export default function EmailButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    // Open email client with the message
    const mailtoLink = `mailto:ahmedmohamed44556@gmail.com?subject=رسالة من موقع شركة السويدي&body=${encodeURIComponent(
      message
    )}`;
    window.location.href = mailtoLink;

    // Close modal
    setMessage("");
    setIsOpen(false);
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
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Message Input */}
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="اكتب رسالتك..."
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition resize-none mb-4 text-gray-900"
            />

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setMessage("");
                }}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition"
              >
                إلغاء
              </button>
              <button
                onClick={handleSend}
                disabled={!message.trim()}
                className="flex-1 bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-400 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                إرسال
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Email Link Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="hover:text-white transition-colors font-light break-all text-left"
      >
        ahmedmohamed44556@gmail.com
      </button>
    </>
  );
}
