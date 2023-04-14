import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const Blog = () => {
    return (
        <section id='blog' className='pt-48 pb-48'>
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
                        FEATURED POSTS
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

            <div className='flex justify-center'>
                <motion.div
                    className='grid md:grid-cols-2 gap-8'
                    variants={container}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <BlogCard
                        link={
                            'https://blog.apify.com/web-scraping-javascript-nodejs/'
                        }
                        title={'Web scraping with JavaScript and Node.js'}
                        description={
                            'The Node.js scraping community is growing steadily. As new powerful libraries come along, it’s safe to say that the Node.js ecosystem is one of the most reliable choices for modern web scraping.'
                        }
                        author={'Percival Villalva'}
                        authorPicture={
                            'https://blog.apify.com/content/images/2022/02/ghost_profile_pic--1-.png'
                        }
                    />
                    <BlogCard
                        link={
                            'https://blog.apify.com/web-scraping-javascript-vs-python-2022/'
                        }
                        title={
                            'Web scraping with JavaScript vs. Python in 2022'
                        }
                        description={
                            "The internet is an ocean of information that is often not easily accessible through an API, which can provide limited access to the data or not even be available. And that's where web scraping comes in."
                        }
                        author={'Percival Villalva'}
                        authorPicture={
                            'https://blog.apify.com/content/images/2022/02/ghost_profile_pic--1-.png'
                        }
                    />
                    <BlogCard
                        link={
                            'https://blog.apify.com/bypass-antiscraping-protections/'
                        }
                        title={'How anti-bot protections work and get bypassed'}
                        description={
                            'Websites have protections to stop malicious bots. But not all bots are created equal. Learn how websites detect bots and how to avoid being blocked while scraping the web legally and ethically.'
                        }
                        author={'Percival Villalva'}
                        authorPicture={
                            'https://blog.apify.com/content/images/2022/02/ghost_profile_pic--1-.png'
                        }
                    />
                    <BlogCard
                        link={
                            'https://blog.apify.com/how-to-build-an-e-commerce-scraper/'
                        }
                        title={'How to build an e-commerce scraper'}
                        description={
                            'Most e-commerce stores follow similar design patterns, and once you understand them, it’s not that difficult to write a few lines of code to get the data you want.'
                        }
                        author={'Percival Villalva'}
                        authorPicture={
                            'https://blog.apify.com/content/images/2022/02/ghost_profile_pic--1-.png'
                        }
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Blog;
