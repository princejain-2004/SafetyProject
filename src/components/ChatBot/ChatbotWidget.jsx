import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react"; // for icons (lucide-react)

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Chatbot Window */}
      {isOpen && (
        <div className="w-96 h-[500px] bg-white shadow-2xl rounded-xl mb-3 overflow-hidden border">
          <div className="flex justify-between items-center bg-blue-600 text-white px-4 py-2">
            <h2 className="font-semibold">Disaster Assistant</h2>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
          <iframe
            title="Chatbot"
            src="https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/09/25/18/20250925185159-C5SR3AJE.json"
            className="w-full h-full"
            frameBorder="0"
          ></iframe>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition duration-300"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}