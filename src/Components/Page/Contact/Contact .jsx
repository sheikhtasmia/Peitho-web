import React from 'react';
import { Mail, Phone, CalendarCheck, Facebook, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaLocationArrow } from 'react-icons/fa';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  return (
    <section id='contact' className="relative bg-gradient-to-br from-[#fdfdfd] to-[#f4f4f7] py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center text-gray-600 text-lg max-w-xl mx-auto mb-16"
        >
          We'd love to hear from you — whether it's a quick question or a full project discussion.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form Section */}
          <motion.form
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-gray-200 shadow-xl space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none bg-white"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none bg-white"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none bg-white resize-none"
                placeholder="Your message here..."
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-indigo-700 transition duration-300"
            >
              Send Message
            </button>
          </motion.form>

          {/* Info Section */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6 text-gray-700"
          >
            <div className="flex items-start gap-4">
              <Mail className="text-indigo-500 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p>peithology@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-indigo-500 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p>.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaLocationArrow className="text-indigo-500 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold">Address</h4>
                <p>college para, Tangail</p>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="font-semibold mb-2">Follow us</h4>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/peithology" className="text-indigo-600 hover:text-indigo-800"><Facebook /></a>
                <a href="https://www.linkedin.com/company/107271127" className="text-indigo-600 hover:text-indigo-800"><Linkedin /></a>
                <a href="https://www.instagram.com/peitho25/" className="text-indigo-600 hover:text-indigo-800"><Instagram /></a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute bottom-[-120px] right-[-100px] w-[250px] h-[250px] bg-purple-100 rounded-full blur-3xl opacity-30 z-0" />
      <div className="absolute top-[-80px] left-[-80px] w-[200px] h-[200px] bg-indigo-100 rounded-full blur-2xl opacity-20 z-0" />
    </section>
  );
};

export default Contact;
