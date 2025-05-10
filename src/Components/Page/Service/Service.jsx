import React from 'react';

const services = [
  {
    title: "Strategic Communication",
    description: "We help brands design persuasive strategies rooted in cultural insight and audience psychology.",
    offerings: [
      "Messaging frameworks",
      "Campaign planning",
      "Cross-platform communication"
    ],
    importance: "Every message you share becomes part of your brand. We ensure it's purposeful and persuasive."
  },
  {
    title: "Branding & Identity",
    description: "We build bold, memorable brands that speak with clarity and character.",
    offerings: [
      "Logo & Visual Systems",
      "Voice & Tone Guidelines",
      "Brand Playbooks"
    ],
    importance: "A cohesive identity builds trust and sets you apart in a crowded world."
  },
  {
    title: "PR & Influence Management",
    description: "Shape public perception and build meaningful influence with well-managed PR strategies.",
    offerings: [
      "Media Strategy",
      "Reputation Consulting",
      "Influencer Collaborations"
    ],
    importance: "Your reputation is your currency — we help you protect and amplify it."
  },
  {
    title: "Content Creation",
    description: "From words to visuals, we craft content that captures attention and converts interest into action.",
    offerings: [
      "Copywriting & Editorial",
      "Video & Audio Content",
      "Branded Visuals"
    ],
    importance: "Good content tells, great content persuades. We do both."
  },
  {
    title: "Social Campaigns",
    description: "Strategic, trend-aware campaigns designed to engage and grow your community.",
    offerings: [
      "Campaign Strategy",
      "Hashtag Activations",
      "Cross-platform Execution"
    ],
    importance: "Connection begins with conversation — we help you start the right ones."
  },
  {
    title: "Cross-cultural & Narrative Consulting",
    description: "We guide brands through culturally sensitive storytelling and global audience alignment.",
    offerings: [
      "Cultural Relevance Audits",
      "Narrative Alignment Workshops",
      "Localization Strategies"
    ],
    importance: "Global resonance comes from local understanding. We make your story universally relatable."
  }
];

const Service = () => {
  return (
    <section id='service' className="py-20 px-6 md:px-20 bg-white text-gray-900">
      <h2 className="text-4xl font-bold text-center text-sky-700 mb-14">
        What We Offer
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-sky-600 mb-3">
              {service.title}
            </h3>
            <p className="mb-4 text-gray-700">{service.description}</p>

            <div className="mb-4">
              <h4 className="text-sky-500 font-medium mb-1">What We Offer:</h4>
              <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                {service.offerings.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sky-500 font-medium mb-1">Why It Matters:</h4>
              <p className="text-sm text-gray-800">{service.importance}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
