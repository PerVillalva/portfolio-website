import { BsGithub } from 'react-icons/bs';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectItem = ({ title, description, ghUrl, liveUrl }) => {
    return (
        <div class='w-full p-4 text-center border rounded-lg shadow sm:p-8 bg-gray-900 border-gray-800'>
            <h5 class='mb-2 text-3xl font-bold text-gray-900 dark:text-white'>
                {title}
            </h5>
            <p className='mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400'>
                {description}
            </p>
            <div className='items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4'>
                <a
                    href={ghUrl}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center w-full sm:w-auto text-white rounded-lg justify-center px-4 py-2.5 hover:bg-teal-800 outline outline-teal-500'
                >
                    <BsGithub size='20' className='mr-3' />
                    <div class='text-left'>
                        <div class='font-sans text-sm font-semibold'>
                            View on GitHub
                        </div>
                    </div>
                </a>
                <a
                    href={liveUrl}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center w-full sm:w-auto text-white rounded-lg justify-center px-4 py-2.5 hover:bg-teal-800 outline outline-teal-500'
                    alt=''
                >
                    <FaExternalLinkAlt size='20' className='mr-3' />
                    <div class='text-left'>
                        <div className='font-sans text-sm font-semibold'>
                            View it live
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default ProjectItem;
