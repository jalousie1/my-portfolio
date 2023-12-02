'use client'
import React, { useState } from 'react'
import GithubIcon from '../../../public/github-icon.svg'
import EmailIcon from '../../../public/email-icon.svg'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
    return (
        <section
            id='contact'
            className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'
        >
            <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#8d93d9] to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
            <div className='z-10'>
                <h5 className='text-xl font-bold text-[#9498b9] my-2'>
                    Let's Connect
                </h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {' '}
                    Open doors to new possibilities. I'm welcoming inquiries, collaborations, and friendly connections. Reach out, I'll reply as soon as possible. <br />
                    At the moment, the email sending part below is not working, but feel free to click on the icons!
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link href='https://github.com/jalousie1' target='_blank'>
                        <Image src={GithubIcon} alt='Github Icon' width={50} height={50} />
                    </Link>
                    <Link href='mailto:kirie0000@proton.me' rel='noopener noreferrer'>
                        <Image src={EmailIcon} alt='Email Icon' width={50} height={50} />
                    </Link>
                </div>
            </div>
            <div>
                <form className='flex flex-col disabled'>
                    <div className='mb-6'>
                        <label
                            htmlFor='email'
                            className='text-white block mb-2 text-sm font-medium'
                        >
                            Your email
                        </label>
                        <input
                            name='email'
                            type='email'
                            id='email'
                            required
                            disabled
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder='example@example.com'
                        />
                    </div>
                    <div className='mb-6'>
                        <label
                            htmlFor='subject'
                            className='text-white block text-sm mb-2 font-medium'
                        >
                            Subject
                        </label>
                        <input
                            name='subject'
                            type='text'
                            id='subject'
                            required
                            disabled
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder='Hi'
                        />
                    </div>
                    <div className='mb-6 '>
                        <label
                            htmlFor='message'
                            className='text-white block text-sm mb-2 font-medium'
                        >
                            Message
                        </label>
                        <textarea
                            name='message'
                            id='message'
                            disabled
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder="Let's talk about"
                        />
                    </div>
                    <button
                        type='submit'
                        disabled
                        className='bg-[#8d93d9] hover:bg-[#adafd1] text-white font-medium py-2.5 px-5 rounded-lg w-full cursor-not-allowed'
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}

export default EmailSection
