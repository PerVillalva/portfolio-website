import React from "react";

const ProjectItem = ({ title, backgroundImg, tech, projectUrl }) => {
    return (
        <div className="relative flex items-center justify-center h-auto w-full shadow-lg shadow-teal-700 rounded-xl group hover:bg-teal-500">
            <img
                className="rounded-xl group-hover:opacity-10 w-full"
                src={backgroundImg}
                alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl text-white font-bold tracking-wider text-center">
                    {title}
                </h3>
                <p className="pb-4 pt-2 text-white text-center">{tech}</p>
                <a href={projectUrl}>
                    <p className="text-center p-4 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                        More Info
                    </p>
                </a>
            </div>
        </div>
    );
};

export default ProjectItem;
