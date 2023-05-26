import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import { FaCode, FaShareAltSquare, FaMugHot } from 'react-icons/fa';
import SkillList from '../components/SkillList';

const tech = [
    'JS/TS',
    'Node.js',
    'Python',
    'React',
    'React Native',
    'Redux',
    'Git',
    'MongoDB',
];
const marketing = ['SEO', 'Hubspot', 'Email marketing', 'Google Analytics'];
const other = [
    'Web scraping',
    'Technical writing',
    'Teaching',
    'Web automation',
];

const Skills = () => {
    const isAboveLarge = useMediaQuery('(min-width: 1060px)');
    return (
        <section id='skills' className='pt-10 pb-24 b-10'>
            {/* HEADER AND IMAGE SECTION */}
            <div className='md:flex md:justify-between md:gap-16 mt-32'>
                <motion.div
                    className='md:w-1/3'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className='font-playfair font-semibold text-4xl mb-5'>
                        Skills
                    </p>
                    <LineGradient width='w-1/3' />
                    <p className='mt-10 mb-7'>
                        Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet
                        integer ut fames odio in at.
                    </p>
                </motion.div>

                <div className='mt-16 md:mt-0'>
                    {isAboveLarge ? (
                        <div
                            className='relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]'
                        >
                            <img
                                alt='skills'
                                className='z-10'
                                src='assets/skills-image.png'
                            />
                        </div>
                    ) : (
                        <img
                            alt='skills'
                            className='z-10'
                            src='assets/skills-image.png'
                        />
                    )}
                </div>
            </div>

            {/* Tech */}
            <div className='md:flex md:justify-between mt-16 gap-32'>
                <motion.div
                    className='md:w-1/3 mt-10'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className='relative h-32'>
                        <div className='z-10'>
                            <p className='font-playfair font-semibold text-5xl mx-auto'>
                                <FaCode className='text-teal-500' />
                            </p>
                            <p className='font-playfair font-semibold text-3xl mt-3'>
                                Technologies
                            </p>
                        </div>
                    </div>
                    <SkillList skills={tech} />
                </motion.div>

                {/* Marketing */}
                <motion.div
                    className='md:w-1/3 mt-10'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className='relative h-32'>
                        <div className='z-10'>
                            <p className='font-playfair font-semibold text-5xl'>
                                <FaShareAltSquare className='text-teal-500' />
                            </p>
                            <p className='font-playfair font-semibold text-3xl mt-3'>
                                Digital Marketing
                            </p>
                        </div>
                    </div>
                    <p className='mt-5'>
                        <SkillList skills={marketing} />
                    </p>
                </motion.div>
                {/* Other */}
                <motion.div
                    className='md:w-1/3 mt-10'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className='relative h-32'>
                        <div className='z-10'>
                            <p className='font-playfair font-semibold text-5xl'>
                                <FaMugHot className='text-teal-500' />
                            </p>
                            <p className='font-playfair font-semibold text-3xl mt-3'>
                                Other
                            </p>
                        </div>
                    </div>
                    <SkillList skills={other} />
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
