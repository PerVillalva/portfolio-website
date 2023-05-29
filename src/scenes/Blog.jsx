import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import { articles } from '../utils/data';

const Blog = () => {
    return (
        <section id='articles' className='pt-48 pb-32'>
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
                <div className='mb-16'>
                    <p className='font-playfair font-semibold text-4xl'>
                        ARTICLES
                    </p>
                    <div className='flex justify-center mt-5'>
                        <LineGradient width='w-2/3' />
                    </div>
                </div>
            </motion.div>

            <div className='flex justify-center flex-col items-center'>
                <motion.div
                    className='grid md:grid-cols-2 gap-8'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {articles.map((article) => (
                        <BlogCard
                            key={article.id}
                            image={article.image}
                            link={article.link}
                            title={article.title}
                            description={article.description}
                        />
                    ))}
                </motion.div>
                <a
                    className='bg-teal-300 hover:bg-transparent outline hover:outline-teal-500 text-deep-blue rounded-lg py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500 mt-2 hover:scale-105 text-center mt-20 px-20 py-5'
                    href='https://blog.apify.com/author/percival/'
                    target='_blank'
                    rel='noreferrer'
                >
                    BROWSE ALL ARTICLES
                </a>
            </div>
        </section>
    );
};

export default Blog;
