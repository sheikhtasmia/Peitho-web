import React from 'react';

const About = () => {
  return (
    <section id='about' className="bg-white py-20 px-6 md:px-20 text-gray-900">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-sky-700 mb-12">About Peithology</h1>

      {/* Origin Section with Image */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Eros_brought_by_Peitho_to_Aphrodite_as_Anteros_laughs_at_his_being_punished_for_having_chosen_the_wrong_target%2C_Pompeiian_fresco%2C_circa_25_BCE_%2828298194699%29.jpg/500px-Eros_brought_by_Peitho_to_Aphrodite_as_Anteros_laughs_at_his_being_punished_for_having_chosen_the_wrong_target%2C_Pompeiian_fresco%2C_circa_25_BCE_%2828298194699%29.jpg"
          alt="Peitho Fresco"
          className="w-full md:w-1/2 rounded-xl shadow-lg"
        />
        <div className="text-lg leading-relaxed text-gray-700">
          <h2 className="text-2xl font-semibold text-sky-800 mb-4">Our Origin</h2>
          <p>
            Peithology draws its name from <strong>Peitho</strong>, the ancient Greek goddess of persuasion and charm.
            Just like Peitho guided minds with elegance and eloquence, our mission is to shape narratives that move
            people, minds, and markets. We’re not just a communication agency—we’re a <strong>communication farm</strong>,
            cultivating strategic stories and campaigns with depth, culture, and intention.
          </p>
        </div>
      </div>

      {/* Vision, Mission, Values, Team */}
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6 shadow hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold text-sky-800 mb-4">Vision & Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our vision is to become a global name in persuasive, cross-cultural communication. <br />
            Our mission is to blend story, design, and psychology into communication strategies that connect, influence,
            and endure.
          </p>
        </div>

        <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6 shadow hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold text-sky-800 mb-4">Core Values</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li><strong>Elegance</strong> — Clarity wrapped in creative beauty.</li>
            <li><strong>Clarity</strong> — Every message with purpose and direction.</li>
            <li><strong>Cultural Sensitivity</strong> — Narratives that respect diversity and nuance.</li>
            <li><strong>Persuasion with Integrity</strong> — Influence rooted in truth and trust.</li>
          </ul>
        </div>

      
      </div>
    </section>
  );
};

export default About;
