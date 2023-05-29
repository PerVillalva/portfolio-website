import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';
import { FaCode, FaShareAltSquare, FaMugHot } from 'react-icons/fa';
import SkillList from '../components/SkillList';
import { skills } from '../utils/data';

const Skills = () => {
    return (
        <section id='skills' className='pt-48 pb-40'>
            <motion.div
                className='md:w-2/5 mx-auto text-center'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div>
                    <p className='font-playfair font-semibold text-4xl'>
                        Skills
                    </p>
                    <div className='flex justify-center mt-5 mb-16'>
                        <LineGradient width='w-2/3' />
                    </div>
                </div>
            </motion.div>

            <div className='md:flex md:justify-between mt-16 gap-32'>
                {/* Tech */}
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
