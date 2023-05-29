import { BsGithub } from 'react-icons/bs';

export const Footer = () => {
    return (
        <footer className='rounded-lg shadow m-4 bg-navy mx-auto'>
            <div className='w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center text-slate-400'>
                <a
                    href='https://github.com/PerVillalva/portfolio-website'
                    target='_blank'
                    rel='noreferrer'
                    className='text-sm hover:text-teal-500 transition duration-200'
                >
                    <div>Built by Percival Villalva</div>
                    <div className='flex items-center w-full sm:w-auto rounded-lg justify-center mt-2'>
                        <BsGithub size='15' className='mr-2' />
                        <div>View on GitHub</div>
                    </div>
                </a>
            </div>
        </footer>
    );
};
