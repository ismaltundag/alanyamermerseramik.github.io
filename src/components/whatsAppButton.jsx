import React from "react";

const WhatsAppButton = () => {
  return (
    <div id="whatsapp-button">
      <a
        href="https://wa.me/+905418286821"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <div id="contact-text">
          <span>Bize Ulaşın!</span>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp Logo"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
