import { FaCaretRight } from 'react-icons/fa';

const SkillList = ({ title, skills, icon }) => {
    return (
        <>
            <div className='relative h-32'>
                <div className='z-10'>
                    <p className='font-playfair font-semibold text-5xl text-teal-500'>
                        {icon}
                    </p>
                    <p className='font-playfair font-semibold text-3xl mt-3'>
                        {title}
                    </p>
                </div>
            </div>
            <ul className='mt-5 grid grid-cols-2 gap-3 '>
                {skills.map((skill) => (
                    <li className='text-slate-400'>
                        <FaCaretRight className='inline-block mb-1 text-teal-500' />
                        {skill}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default SkillList;
