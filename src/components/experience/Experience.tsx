import React from 'react'
import './experience.css'
import { TbDiscountCheckFilled } from 'react-icons/tb'
const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I have</h5>
            <h2>My Experience</h2>

            <div className="container exprience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <TbDiscountCheckFilled className='experience__details-icons' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <TbDiscountCheckFilled className='experience__details-icons' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <TbDiscountCheckFilled className='experience__details-icons' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <TbDiscountCheckFilled className='experience__details-icons' />
                            <div>
                                <h4>JAVASCRIPT</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <TbDiscountCheckFilled className='experience__details-icons' />
                            <div>
                                <h4>TYPESCRIPT</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <TbDiscountCheckFilled className='experience__details-icons' />
                            <div>
                                <h4>REACT</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <TbDiscountCheckFilled className='experience__details-icons' />
                            <div>
                                <h4>ANGULAR</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <TbDiscountCheckFilled className='experience__details-icons' />
                            <div>
                                <h4>IONIC ANGULAR</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>


                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">

                        <article className='experience__details'>
                            <TbDiscountCheckFilled className='experience__details-icons' />
                            <div>
                                <h4>JAVASCRIPT</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <TbDiscountCheckFilled className='experience__details-icons' />
                            <div>
                                <h4>TYPESCRIPT</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <TbDiscountCheckFilled className='experience__details-icons' />
                            <div>
                                <h4>NODE</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <TbDiscountCheckFilled className='experience__details-icons' />
                            <div>
                                <h4>EXPRESS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <TbDiscountCheckFilled className='experience__details-icons' />
                            <div>
                                <h4>MONGODB</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <TbDiscountCheckFilled className='experience__details-icons' />
                            <div>
                                <h4>MONGOOSE</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
