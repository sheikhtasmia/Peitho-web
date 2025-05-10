import React from 'react';
import { motion } from 'framer-motion';
import { BookOpenText, PenLine, MessageCircleQuestion, Feather } from 'lucide-react';

const topics = [
  {
    title: 'Power of Cultural Storytelling',
    icon: BookOpenText,
    description: 'Explore how cultural myths and narratives shape modern branding and audience connection.',
  },
  {
    title: 'Peitho & Modern Influence',
    icon: Feather,
    description: 'Linking the goddess of persuasion to contemporary communication strategies.',
  },
  {
    title: 'How to Win with Words',
    icon: PenLine,
    description: 'Unlocking the rhetorical tools that turn communication into conversion.',
  },
  {
    title: 'Communication Ethics in Branding',
    icon: MessageCircleQuestion,
    description: 'Balancing persuasion with integrity in today’s competitive landscape.',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const PeithologyIdeas = () => {
  return (
    <section id='peithology' className="relative bg-gradient-to-br from-white via-[#f9f9fb] to-gray-100 py-20 overflow-hidden">
      <div className="max-w-full mx-auto px-6 z-10 relative">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-2xl md:text-5xl font-extrabold text-center text-gray-800 mb-4"
        >
          Peithology <span className="text-indigo-500">(Blog / Ideas)</span>
        </motion.h2>
        <motion.p
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-16"
        >
          Thought leadership rooted in strategy, myth, and persuasive influence.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {topics.map(({ title, icon: Icon, description }, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group backdrop-blur-md bg-white/60 border border-gray-200 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 p-6"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-white shadow-lg group-hover:scale-105 transform transition duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition">
                  {title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Optional background accent */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-indigo-100 rounded-full blur-3xl opacity-30 z-0" />
      <div className="absolute bottom-[-80px] left-[-80px] w-[200px] h-[200px] bg-purple-100 rounded-full blur-2xl opacity-20 z-0" />
    </section>
  );
};

export default PeithologyIdeas;
