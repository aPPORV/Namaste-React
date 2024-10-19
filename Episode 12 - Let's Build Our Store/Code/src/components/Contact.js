import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    alert("Message sent!"); // Alert on form submission
  };

  return (
    <div className="contact p-8 bg-white shadow-md rounded-md">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <h2 className="text-2xl text-gray-600 mb-6">We'd love to hear from you!</h2>
      <form className="contact-form mb-8" onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <label htmlFor="name" className="block text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="message" className="block text-gray-700">Message:</label>
          <textarea
            id="message"
            rows="4"
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="submit-button bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
      <div className="contact-info">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
        <p className="text-gray-700">Email: support@example.com</p>
        <p className="text-gray-700">Phone: +1234567890</p>
      </div>
    </div>
  );
};

export default Contact;
