import React from 'react';
import { FaBullhorn, FaPenNib, FaGlobe, FaUsers, FaPaintBrush, FaComments } from 'react-icons/fa';

const services = [
    { icon: <FaBullhorn size={30} />, title: 'Strategic Communication' },
    { icon: <FaPaintBrush size={30} />, title: 'Branding & Identity' },
    { icon: <FaUsers size={30} />, title: 'PR & Influence Management' },
    { icon: <FaPenNib size={30} />, title: 'Content Creation' },
    { icon: <FaComments size={30} />, title: 'Social Campaigns' },
    { icon: <FaGlobe size={30} />, title: 'Cross-cultural & Narrative Consulting' },
];

const Banner = () => {
    return (
        <div id='home' className="bg-black text-white font-sans">
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center text-center h-[90vh] px-4 overflow-hidden bg-gray-500 animate-shootingBackground">
                {/* Optional logo */}
                <img
                    src="https://i.ibb.co.com/H3c6zbP/download-8.png"
                    alt="Peitho Logo"
                    className="w-32 mb-6"
                />
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
                    Hey — we’re Peithology
                </h1>

                <p className='text-center w-[450px] md:w-[800px]'>
                    Your one-click-away solution for bold, persuasive communication.
                    We craft stories, shape perceptions, and grow brands with strategy that speaks.
                </p>
                <div className="mt-6 flex gap-4">
                    <a href="#services" className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold hover:from-red-600 hover:to-orange-600 transition-all">
                        Explore Our Services
                    </a>
                    <a href="#contact" className="px-6 py-3 border border-white hover:bg-white hover:text-black transition-all">
                        Let’s Collaborate
                    </a>
                </div>
            </section>



            {/* What We Do Section */}
            <section id="services" className="py-16 px-6 md:px-20 bg-white text-black">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center animate-fadeIn">What We Do</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                    {services.map((service, index) => (
                        <div key={index} className="p-6 border-2 bg-base-200 shadow-xl rounded-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300">
                            <div className="mb-4 text-orange-400">{service.icon}</div>
                            <h3 className="text-xl font-semibold">{service.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            {/* Testimonials Section */}
            <section className="py-16 px-6 md:px-20 bg-white border rounded-xl text-black">
                <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Jane Doe",
                            company: "CEO, Athena Media",
                            quote: "Peithology transformed our brand narrative with elegance and purpose. Their work is persuasion at its finest.",
                        },
                        {
                            name: "Mark Leon",
                            company: "Creative Director, Orion Agency",
                            quote: "They truly understand the soul of communication. Every campaign felt like art backed by strategy.",
                        },
                        {
                            name: "Sarah Chen",
                            company: "Marketing Head, Helix Tech",
                            quote: "From storyboarding to execution — their team delivered clarity, creativity, and cultural relevance.",
                        },
                    ].map((testimonial, index) => (
                        <div key={index} className="bg-base-200 p-6 rounded-lg shadow-md">
                            <p className="italic mb-4">“{testimonial.quote}”</p>
                            <p className="font-bold">{testimonial.name}</p>
                            <p className="text-sm text-gray-400">{testimonial.company}</p>
                        </div>
                    ))}
                </div>
            </section>


        </div>
    );
};

export default Banner;
