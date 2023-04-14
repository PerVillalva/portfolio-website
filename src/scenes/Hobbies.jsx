import { useState } from 'react';
import CurrentlyPlaying from '../components/CurrentlyPlaying';

const data = [
    {
        id: 1,
        label: 'Podcasts',
        content: <CurrentlyPlaying />,
    },
    {
        id: 2,
        label: 'Books',
        content: <CurrentlyPlaying />,
    },
    {
        id: 3,
        label: 'Music',
        content: <CurrentlyPlaying />,
    },
];

const Hobbies = () => {
    const [currentTab, setCurrentTab] = useState(1);

    return (
        <>
            <section id='hobbies' className='flex flex-wrap py-24'>
                <div className='w-full'>
                    <ul
                        className='flex mb-0 list-none pt-3 pb-4'
                        role='tablist'
                    >
                        {data.map((tab) => (
                            <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
                                <a
                                    className={`text-xs fold-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                                        currentTab === tab.id
                                            ? 'text-teal-400'
                                            : 'text-gray-500'
                                    }`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setCurrentTab(tab.id);
                                    }}
                                    data-toggle='tab'
                                    href='/'
                                    role='tablist'
                                >
                                    {tab.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {data.map((tab) => (
                        <div
                            className={`grid md:grid-cols-3 gap-4
                                            ${
                                                currentTab === tab.id
                                                    ? 'block'
                                                    : 'hidden'
                                            }
                                        `}
                            id={`link${tab.id}`}
                        >
                            {tab.content}
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Hobbies;
