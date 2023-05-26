const BlogCard = ({ author, title, description, link, authorPicture }) => {
    return (
        <a
            href={link}
            className='h-auto w-full transition transform duration-500 hover:shadow-lg hover:shadow-teal-600 hover:translate-x-1 hover:-translate-y-1 rounded-xl'
            rel='noreferrer'
            target='_blank'
        >
            <article className='p-6 rounded-lg shadow-md bg-light-navy text-slate-200 '>
                <h2 className='mb-3 text-2xl font-bold tracking-tight'>
                    {title}
                </h2>
                <p className='mb-5 font-light text-gray-400'>{description}</p>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center space-x-4'></div>
                </div>
            </article>
        </a>
    );
};

export default BlogCard;
