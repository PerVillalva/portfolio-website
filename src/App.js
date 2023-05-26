import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import DotGroup from './scenes/DotGroup';
import LineGradient from './components/LineGradient';
import Landing from './scenes/Landing';
import Projects from './scenes/Projects.jsx';
import useMediaQuery from './hooks/useMediaQuery.jsx';
import Navbar from './scenes/Navbar';
import Skills from './scenes/Skills.jsx';
import Blog from './scenes/Blog';
import Contact from './scenes/Contact';

function App() {
    const [selectedPage, setSelectedPage] = useState('home');
    const [isTopOfPage, setIsTopOfPage] = useState(true);
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage('home');
            }
            if (window.scrollY !== 0) setIsTopOfPage(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='bg-navy'>
            <Navbar
                isTopOfPage={isTopOfPage}
                selectedpage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <div className='w-5/6 mx-auto md:h-screen'>
                {isAboveMediumScreens && (
                    <DotGroup
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                )}
                <motion.div
                    margin='0 0 -200px 0'
                    amount='all'
                    onViewportEnter={() => setSelectedPage('home')}
                    viewport={{ once: true }}
                >
                    <Landing setSelectedPage={setSelectedPage} />
                </motion.div>
            </div>

            <LineGradient width={'w-10/12'} margin={'m-auto'} />
            <div className='w-5/6 mx-auto md:h-full'>
                <motion.div
                    margin='0 0 -200px 0'
                    amount='all'
                    onViewportEnter={() => setSelectedPage('projects')}
                >
                    <Blog />
                </motion.div>
            </div>

            <LineGradient width={'w-10/12'} margin={'m-auto'} />
            <div className='w-5/6 mx-auto md:h-full'>
                <motion.div
                    margin='0 0 -200px 0'
                    amount='all'
                    onViewportEnter={() => setSelectedPage('articles')}
                >
                    <Projects />
                </motion.div>
            </div>

            <LineGradient width={'w-10/12'} margin={'m-auto'} />
            <div className='w-5/6 mx-auto md:h-full '>
                <motion.div
                    margin='0 0 -200px 0'
                    amount='all'
                    onViewportEnter={() => setSelectedPage('skills')}
                >
                    <Skills />
                </motion.div>
            </div>

            <LineGradient width={'w-10/12'} margin={'m-auto'} />
            <div className='w-5/6 mx-auto md:h-full'>
                <motion.div
                    margin='0 0 -200px 0'
                    amount='all'
                    onViewportEnter={() => setSelectedPage('contact')}
                >
                    <Contact />
                </motion.div>
            </div>
        </div>
    );
}

export default App;
