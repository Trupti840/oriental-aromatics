"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding py-32 bg-oriental-dark text-white"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="font-display text-5xl md:text-6xl font-black">
            Get In Touch
          </h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-2xl">
              <Mail className="w-6 h-6" />
              <span className="text-lg">info@orientalaromatics.com</span>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-2xl">
              <Phone className="w-6 h-6" />
              <span className="text-lg">+91 22 4094 6000</span>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-white/10 rounded-2xl">
              <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
              <span className="text-lg leading-relaxed">
                Plot No. A-37, TTC Industrial Area, M.I.D.C., Mahape, Navi
                Mumbai - 400710, India
              </span>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              className="w-full p-6 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-oriental-gold focus:border-transparent transition-all"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              className="w-full p-6 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-oriental-gold focus:border-transparent transition-all"
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-6 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-oriental-gold focus:border-transparent transition-all"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full p-6 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-oriental-gold focus:border-transparent transition-all"
          />
          <button
            type="submit"
            className="w-full p-6 bg-oriental-gold text-oriental-dark font-semibold text-xl rounded-2xl hover:bg-opacity-90 transform hover:scale-[1.02] transition-all duration-300 shadow-2xl"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
