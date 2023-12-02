'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>MySQL</li>
                <li>Spring Boot</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Python</li>
            </ul>
        ),
    },
    {
        title: 'Education',
        id: 'education',
        content: (
            <ul className='list-disc pl-2'>
                <li>🎓 UNICEPLAC - Software Engineering</li>
                <li>🇺🇸 English - Advanced</li>
                <li>🇧🇷 Portuguese - Native Speaker</li>
            </ul>
        ),
    },
    {
        title: 'Certifications',
        id: 'certifications',
        content: (
            <ul className='list-disc pl-2'>
                <li>DIO Cybersecurity Specialist</li>
                <li>UNICEPLAC Programming in Python</li>
                <li>IFRS English</li>
                <li>CertiProf Remote Worker Professional</li>
                <li>CertiProf Scrum Foundation Professional </li>
            </ul>
        ),
    },
]

const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className='text-white' id='about'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src='/images/about-image.jpg' width={500} height={500}
                    className='rounded-[100px]' />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-[#8d93d9] mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        I'm a software engineering student aiming to specialize in the backend area. I'm constantly searching for knowledge to improve my skills.
                    </p>
                    <div className='flex flex-row justify-start mt-8 text-[#8d93d9]'>
                        <TabButton
                            selectTab={() => handleTabChange('skills')}
                            active={tab === 'skills'}
                        >
                            {' '}
                            Skills{' '}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange('education')}
                            active={tab === 'education'}
                        >
                            {' '}
                            Education{' '}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange('certifications')}
                            active={tab === 'certifications'}
                        >
                            {' '}
                            Certifications{' '}
                        </TabButton>
                    </div>
                    <div className='mt-8'>
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection