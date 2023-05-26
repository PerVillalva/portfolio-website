import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import SocialMediaIcons from '../components/SocialMediaIcons';

const Landing = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

    return (
        <section
            id='home'
            className='md:flex md:justify-between md:items-center md:h-screen gap-16 py-10'
        >
            {/* IMAGE SECTION */}
            <div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32'>
                {isAboveMediumScreens ? (
                    <div>
                        <img
                            src='assets/profile.jpeg'
                            alt='Percival Villalva'
                            // height={176}
                            width={450}
                            className='rounded-full filter grayscale hover:grayscale-0'
                        />
                    </div>
                ) : (
                    <div>
                        <img
                            src='assets/profile.jpeg'
                            alt='Percival Villalva'
                            height={176}
                            width={250}
                            className='rounded-full filter grayscale'
                        />
                    </div>
                )}
            </div>

            {/* MAIN SECTION */}
            <div className='z-30 basis-2/5 mt-12 md:mt-32'>
                {/* HEADINGS */}
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className='text-6xl font-playfair z-10 text-center md:text-start'>
                        Percival {''}
                        Villalva
                    </p>

                    <p className='mt-10 mb-7 text-lg text-center md:text-start text-gray-400'>
                        Helping developers build scalable, human-like bots for
                        data extraction and web automation. Teaching about web
                        scraping and automation in Node.js.
                    </p>
                </motion.div>

                <motion.div
                    className='flex justify-center md:justify-start'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <SocialMediaIcons />
                </motion.div>
            </div>
        </section>
    );
};

export default Landing;
