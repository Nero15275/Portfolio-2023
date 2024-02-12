import React from 'react'
import './portfolio.css'
import { portfolioData } from '../../constants'



const Portfolio = () => {
    return (
        <section>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    portfolioData.map((portfolio) => {
                        return (
                            <article className='portfolio__item' key={portfolio.id}>
                                <div className="portfolio__item-image">
                                    <img src={portfolio.image} alt="" />
                                </div>
                                <h3>{portfolio.title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={portfolio.github} className='btn' target='_blank'>Github</a>
                                    <a href={portfolio.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }




            </div>
        </section>
    )
}

export default Portfolio
