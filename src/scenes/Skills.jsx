import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import { FaCode, FaShareAltSquare, FaMugHot } from 'react-icons/fa';
import SkillList from '../components/SkillList';
import { skills } from '../utils/data';

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
                    <SkillList
                        icon={<FaCode />}
                        title={skills.tech.title}
                        skills={skills.tech.list}
                    />
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
                    <SkillList
                        icon={<FaShareAltSquare />}
                        title={skills.marketing.title}
                        skills={skills.marketing.list}
                    />
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
                    <SkillList
                        icon={<FaMugHot />}
                        title={skills.other.title}
                        skills={skills.other.list}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
