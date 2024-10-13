import React from 'react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        alert("Message sent!"); // Alert on form submission
    };

    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <h2>We'd love to hear from you!</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" rows="4" required></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
            </form>
            <div className="contact-info">
                <h3>Contact Information</h3>
                <p>Email: support@example.com</p>
                <p>Phone: +1234567890</p>
            </div>
        </div>
    );
};

export default Contact;
