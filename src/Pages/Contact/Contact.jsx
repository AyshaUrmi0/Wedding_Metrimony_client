import React, { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show SweetAlert success message
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for reaching out! We'll get back to you soon.",
      confirmButtonColor: "custom-pink",
    });

    // Reset the form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen p-8 ">
      <div className="max-w-4xl p-6 mx-auto rounded-lg shadow-md">
        <h1 className="mb-4 text-3xl font-bold text-custom-pink">Contact Us</h1>
        <p className="mb-6 text-custom-orange">
          Have questions or need assistance? Fill out the form below, and our
          team will get in touch with you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-custom-orange">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-custom-orange">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-custom-orange">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-white rounded-lg bg-custom-pink hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
