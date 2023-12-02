'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation';



const HeroSection = () => {
    return (
        <section className='lg:py-16'>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='text-white mb-4 text-4xl sm:text-4xl lg:text-5xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#8d93d9] to-white'>Hi, i'm {' '}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                'Chris',
                                1000,
                                'a Web Developer',
                                1000,
                            ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-centertext-base sm:text-lg lg:text-xl mb-5'>
                        Studying back-end and cyber security stuff xD
                    </p>
                    <div>
                        <div>
                            <Link
                                href='/#contact'
                                className='px-6
                                inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-[#8d93d9] hover:bg-slate-200 text-white'
                            >
                                Hire Me
                            </Link>

                        </div>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image src='/images/hero-image.png'
                            alt='hero image'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-[20px]'
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection