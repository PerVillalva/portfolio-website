import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';
import ProjectItem from '../components/ProjectItem';

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const Projects = () => {
    return (
        <section id='projects' className='pt-48 pb-48'>
            {/* HEADINGS */}
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
                        PROJECTS
                    </p>
                    <div className='flex justify-center mt-5'>
                        <LineGradient width='w-2/3' />
                    </div>
                </div>
                <p className='mt-10 mb-10'>
                    Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet
                    integer ut fames odio in at. At magna ornare dictum lectus.
                    Purus massa morbi purus nec eget eleifend ut elit.
                </p>
            </motion.div>

            {/* PROJECTS */}
            <div className='flex justify-center'>
                <motion.div
                    className='grid md:grid-cols-2 gap-8'
                    variants={container}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <ProjectItem
                        title='Property Finder'
                        backgroundImg={'../assets/project-1.jpeg'}
                        projectUrl='/property'
                        tech='React JS'
                    />
                    <ProjectItem
                        title='Crypto App'
                        backgroundImg={'../assets/project-2.jpeg'}
                        projectUrl='/crypto'
                        tech='React JS'
                    />
                    <ProjectItem
                        title='Netflix App'
                        backgroundImg={'../assets/project-3.jpeg'}
                        projectUrl='/netflix'
                        tech='React JS'
                    />
                    <ProjectItem
                        title='Twitch UI'
                        backgroundImg={'../assets/project-4.jpeg'}
                        projectUrl='/twitch'
                        tech='Next JS'
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
