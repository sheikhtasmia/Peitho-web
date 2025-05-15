import React from 'react';
import { motion } from 'framer-motion';

const SectionCard = ({ title, children, color }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`relative rounded-2xl p-6 shadow-md border-l-[6px] ${color} bg-white w-full overflow-hidden`}
    >
        <h3 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h3>
        <div className="text-gray-600 leading-relaxed">{children}</div>
        <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-gradient-to-br from-transparent to-gray-100 rounded-full opacity-30 blur-2xl pointer-events-none"></div>
    </motion.div>
);

const MediaBlock = ({ media }) => {
    if (!media) return null;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full mt-8"
        >
            {media.type === 'image' ? (
                <img
                    src={media.src}
                    alt={media.alt || 'Project visual'}
                    className="rounded-xl w-full max-h-[500px] object-cover shadow-lg"
                />
            ) : (
                <video
                    controls
                    className="rounded-xl w-full max-h-[500px] object-cover shadow-lg"
                >
                    <source src={media.src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
        </motion.div>
    );
};

const TestimonialCard = ({ text, name }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-white border border-blue-200 p-8 shadow-md text-center mt-10 max-w-full mx-auto"
    >
        <p className="italic text-start text-gray-700 text-lg mb-4 leading-relaxed">“{text}”</p>
        <p className="font-semibold text-start text-blue-600 tracking-wide">— {name}</p>
    </motion.div>
);

const CaseStudyBlock = ({ project }) => (
    <section className="bg-gray-50 w-full border-b border-gray-200 py-20 px-4">
        <div className="md:w-[1400px] w-full mx-auto space-y-10">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-center text-gray-800 relative inline-block"
            >
                {project.title}
                <span className="block w-20 h-1 bg-blue-400 mt-3 mx-auto rounded-full" />
            </motion.h2>

            <div className="space-y-6">
                <SectionCard title="Challenge" color="border-red-400">
                    {project.challenge}
                </SectionCard>

                <SectionCard title="Strategy" color="border-yellow-400">
                    {project.strategy}
                </SectionCard>

                <SectionCard title="Outcome" color="border-green-400">
                    {project.outcome}
                </SectionCard>
            </div>

            <MediaBlock media={project.media} />

            <div className='w-full text-start'>
                {project.testimonial && (
                    <TestimonialCard
                        className="text-start"
                        text={project.testimonial.text}
                        name={project.testimonial.name}
                    />
                )}
            </div>
        </div>
    </section>
);

const CaseStudy = () => {
    const studies = [
        {
            title: '',
            challenge: 'Client needed a full redesign of their website to improve engagement and user retention.',
            strategy: 'We crafted a clean, accessible UI with optimized user journeys and brand consistency.',
            outcome: 'Post-launch, bounce rates dropped by 35% and average session duration increased by 50%.',
            media: {
                type: 'image',
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Fragment_of_a_terracotta_skyphos_%28deep_drinking_cup%29_MET_SF0728651b.jpg/500px-Fragment_of_a_terracotta_skyphos_%28deep_drinking_cup%29_MET_SF0728651b.jpg',
                alt: 'Website redesign mockup',
            },
            
        },
        {
            title: '',
            challenge: 'Client’s mobile users were struggling with slow loading times and bad UX.',
            strategy: 'We rebuilt the frontend with mobile-first design and lazy-loaded components.',
            outcome: 'Mobile conversion rates jumped by 40%, with much better reviews from users.',
            media: {
                type: 'video',
                src: 'https://www.w3schools.com/html/mov_bbb.mp4',
            },
            
        },
    ];

    return (
        <div id='work' className="w-full">
            {studies.map((study, index) => (
                <CaseStudyBlock key={index} project={study} />
            ))}
        </div>
    );
};

export default CaseStudy;
