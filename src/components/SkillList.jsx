import { FaCaretRight } from 'react-icons/fa';

const SkillList = ({ skills }) => {
    return (
        <ul className='mt-5 grid grid-cols-2 gap-3 '>
            {skills.map((skill) => (
                <li className='text-slate-400'>
                    <FaCaretRight className='inline-block mb-1 text-teal-500' />{' '}
                    {skill}
                </li>
            ))}
        </ul>
    );
};

export default SkillList;
