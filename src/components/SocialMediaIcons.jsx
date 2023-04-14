import { BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                href="https://www.linkedin.com/in/percival-villalva/"
                className="hover:text-teal-400 hover:scale-105 hover:-translate-y-0.5 transition duration-500"
                target="_blank"
                rel="noreferrer"
            >
                <BsLinkedin size={28} />
            </a>
            <a
                href="https://github.com/PerVillalva"
                className="hover:text-teal-400 hover:scale-105 hover:-translate-y-0.5 transition duration-500"
                target="_blank"
                rel="noreferrer"
            >
                <BsGithub size={28} />
            </a>
        </div>
    );
};

export default SocialMediaIcons;
