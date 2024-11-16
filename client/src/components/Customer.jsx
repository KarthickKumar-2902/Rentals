import  { useState } from "react";

const Customer = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  return (
    <div className="max-w-4xl mt-20 mb-20 mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-semibold mb-6 text-center">Customer Service</h1>

      {/* Introduction Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">How can we help you?</h2>
        <p className="text-gray-700">
          We are here to assist you with any issues or questions you may have. Our customer
          service team is dedicated to providing you with the best support experience. Please
          feel free to reach out to us through any of the contact methods listed below.
        </p>
      </div>

      {/* Frequently Asked Questions Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-4">
          {[
            { question: "How do I track my order?", answer: "You can track your order by logging into your account and visiting the 'My Orders' section." },
            { question: "What is your return policy?", answer: "We accept returns within 30 days of purchase. Items must be in their original condition." },
            { question: "How can I change my shipping address?", answer: "To change your shipping address, go to 'My Account' and update your address before placing your order." },
            { question: "What payment methods do you accept?", answer: "We accept credit cards, debit cards, PayPal, and Apple Pay." },
          ].map((faq, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full px-4 py-3 text-left text-lg font-semibold text-blue-800 focus:outline-none"
              >
                {faq.question}
                <span>{openFAQ === index ? "−" : "+"}</span>
              </button>
              {openFAQ === index && (
                <div className="px-4 pb-4 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p className="text-gray-700">You can reach our customer service team through the following channels:</p>
        <ul className="mt-4 text-gray-700 space-y-2">
          <li>
            <strong>Email:</strong> <a href="mailto:support@example.com" className="text-blue-500">support@example.com</a>
          </li>
          <li>
            <strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-500">+1 (234) 567-890</a>
          </li>
          <li>
            <strong>Address:</strong> 123 Customer Service Lane, Suite 100, City, State, Country
          </li>
        </ul>
      </div>

      {/* Hours of Operation Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Hours of Operation</h2>
        <p className="text-gray-700">
          Our customer service team is available:
        </p>
        <ul className="mt-4 text-gray-700 space-y-1">
          <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
          <li>Saturday: 10:00 AM - 4:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>

      {/* Social Media Section */}
      <div className="mt-6 text-center">
        <p className="text-gray-700 mb-2">Follow us on social media for the latest updates:</p>
        <div className="space-x-4">
          <a href="#" className="text-blue-600 hover:underline">Facebook</a>
          <a href="#" className="text-blue-400 hover:underline">Twitter</a>
          <a href="#" className="text-pink-600 hover:underline">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Customer;
