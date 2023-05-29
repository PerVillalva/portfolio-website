import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';
import ProjectItem from '../components/ProjectItem';
import { projects } from '../utils/data';

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
                        Projects
                    </p>
                    <div className='flex justify-center mt-5 mb-16'>
                        <LineGradient width='w-2/3' />
                    </div>
                </div>
            </motion.div>

            {/* PROJECTS */}
            <div className='flex justify-center flex-col items-center'>
                <motion.div
                    className='md:w-2/4 grid md:grid-cols-1 gap-8'
                    variants={container}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {projects.map((project) => (
                        <ProjectItem
                            title={project.title}
                            description={project.description}
                            ghUrl={project.ghUrl}
                            liveUrl={project.liveUrl}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
