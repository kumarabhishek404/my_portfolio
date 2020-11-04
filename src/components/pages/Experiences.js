import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderImage from '../HeaderImage'
import './Experiences.css'

const experiences = [
    {
        company: 'Udyami Utsav',
        role: 'Web Developer',
        about: 'Udyami Utsav  aims to provide the young and building entrepreneur of the country with the opportunity to fulfil their dreams, by providing them with a platform to learn, network and explore, in turn helping them to carve their pathway to a bright future and country.',
        image: 'images/udyamiutsav-logo.png'
    },
    {
        company: 'AnimaDrive',
        role: 'Project Manager & Web Developer',
        about: 'Anima Drive believe in spreading love and awareness towards the innocent animals arounds us. AnimaDrive incubated in ATAL INCUBATED CENTER BIMTECH',
        image: '/images/animadrive-logo.png'
    }
]

class Experiences extends Component {

     
    componentDidMount() {
        window.scrollTo(0,0)
    }

    render() {
        return (
            <>
                <div className='home'>
                    <div className='home_container'>
                        <div className='home_wrapper'>
                            <HeaderImage heading=' / Experiences' />
                            <div className='experiences'>
                                <div className='experiences_container'>
                                    <h1>Exeperiences</h1>
                                    <div className='experiences_wrapper'>
                                        {
                                            experiences.map(experience =>
                                                    <div className='experience'>
                                                        <div className='info' >
                                                            <p><span>{experience.company}</span></p>
                                                            <p><span>{experience.role}</span></p>
                                                            <p>{experience.about}</p>
                                                        </div>
                                                        <div className='logo'>
                                                            <figure className='experiences_logo'>
                                                                <img src={experience.image} alt={experience.company} className='experiences_img' />
                                                            </figure>
                                                        </div>
                                                    </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Experiences;