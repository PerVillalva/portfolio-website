import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaRegPaperPlane } from 'react-icons/fa';
import { smIconContent } from '../utils/data';

const handleEmailClick = () => {
    const email = 'percival.villalva@gmail.com';
    const subject = 'Hello Percival!';
    const body = "Let's build something exciting together!";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
        subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
};

const SocialMediaIcons = () => {
    return (
        <div className='flex justify-center md:justify-start my-2 gap-6'>
            {smIconContent.map((media) => {
                const IconComponent = media.id === 'li' ? BsLinkedin : BsGithub;

                return (
                    <a
                        href={media.icon}
                        className='hover:text-teal-400 hover:scale-105 hover:-translate-y-0.5 transition duration-500'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <IconComponent size='32' />
                    </a>
                );
            })}
            <div
                className='hover:text-teal-400 hover:scale-105 hover:-translate-y-0.5 transition duration-500'
                onClick={handleEmailClick}
            >
                <FaRegPaperPlane size='32' />
            </div>
        </div>
    );
};

export default SocialMediaIcons;
