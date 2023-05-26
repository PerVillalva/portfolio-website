const BlogCard = ({ title, description, link, image }) => {
    return (
        <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition transform duration-500 hover:shadow-lg hover:shadow-teal-600 hover:translate-x-1 hover:-translate-y-1'>
            <a
                href={link}
                className='flex flex-col h-full'
                target='_blank'
                rel='noreferrer'
            >
                <img
                    className='rounded-t-lg object-cover h-48'
                    src={image}
                    alt=''
                />

                <div className='p-5 flex-1'>
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                        {title}
                    </h5>

                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3'>
                        {description}
                    </p>
                </div>
            </a>
        </div>
    );
};

export default BlogCard;
