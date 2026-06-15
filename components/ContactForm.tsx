"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    description: "",
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ Email validation
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      return toast.error("Invalid email format");
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      toast.success("Message sent successfully 🎉");

      // reset
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        description: "",
      });
    } catch (err: any) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-br from-white via-green-50 to-white"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-6">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-5xl font-bold text-black leading-tight">
            Let's Connect
          </h2>

          <p className="text-gray-600">
            Have questions about our fragrances? Reach out and our team will get
            back to you shortly.
          </p>

          {/* Contact cards */}
          {[Mail, Phone, MapPin].map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-xl"
            >
              <Icon className="w-6 h-6 text-green-600" />
              <span className="text-gray-700">
                {i === 0 && "info@sgfrag.com"}
                {i === 1 && "+91 8080113377"}
                {i === 2 && "Mumbai, Maharashtra"}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-2xl shadow-xl space-y-5"
        >
          {/* Floating Inputs */}
          {["firstName", "lastName", "email", "phone"].map((field) => (
            <div key={field} className="relative">
              <input
                type="text"
                name={field}
                value={(formData as any)[field]}
                onChange={handleChange}
                required
                className="peer w-full border-b-2 border-gray-300 focus:border-green-600 outline-none py-2 placeholder-transparent"
                placeholder={field}
              />
              <label
                className="absolute left-0 top-2 text-gray-500 text-sm transition-all 
                peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm 
                peer-focus:-top-3 peer-focus:text-xs peer-focus:text-green-600"
              >
                {field === "firstName" && "First Name"}
                {field === "lastName" && "Last Name"}
                {field === "email" && "Email"}
                {field === "phone" && "Phone"}
              </label>
            </div>
          ))}

          {/* Textarea */}
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-600 outline-none"
          />

          {/* Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-full shadow-md hover:bg-green-800 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
