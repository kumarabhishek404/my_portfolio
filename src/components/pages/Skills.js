import React, { Component } from 'react';
import HeaderImage from '../HeaderImage';
import './Skills.css'

const allSkills = [
    {
        title: 'React',
        knows: '85%',
        logo: '/images/react-logo.png'
    },
    {
        title: 'Redux',
        knows: '78%',
        logo: '/images/redux-logo.png'
    },
    {
        title: 'HTML',
        knows: '70%',
        logo: '/images/html5-logo.png'
    },
    {
        title: 'CSS3',
        knows: '60%',
        logo: '/images/css3-logo.png'
    },
    {
        title: 'JavaScript',
        knows: '67%',
        logo: '/images/javascript-logo.png'
    },
    {
        title: 'Git',
        knows: '65%',
        logo: '/images/github-logo.png'
    },
    {
        title: 'Bootstrape',
        knows: '90%',
        logo: '/images/bootstrape-logo.png'
    },
    {
        title: 'JQuery',
        knows: '35%',
        logo: '/images/jquery-logo.png'
    },
    {
        title: 'Heroku',
        knows: '64%',
        logo: '/images/heroku-logo.png'
    },
    {
        title: 'AWS Cloud',
        knows: '70%',
        logo: '/images/aws-logo.png'
    },
    {
        title: 'Linux',
        knows: '80%',
        logo: '/images/linux-logo.png'
    },
    {
        title: 'Python',
        knows: '30%',
        logo: '/images/python-logo.png'
    },
    {
        title: 'PowerPoint',
        knows: '79%',
        logo: '/images/powerpoint-logo.png'
    },
    {
        title: 'Ubuntu',
        knows: '100%',
        logo: '/images/ubuntu-logo.png'
    },
    {
        title: 'Material UI',
        knows: '70%',
        logo: '/images/materialUi-logo.png'
    }
]

class Skills extends Component {

    
    componentDidMount() {
        window.scrollTo(0,0)
    }


    render() {
        return (
            <>
                <HeaderImage heading=' / Skills' />
                <div className='skills'>
                    <div className='skills_container'>
                        <div className='skills_wrapper'>
                            <h1>My Current Skillset</h1>
                            <div className='all_skills'>
                                <div className='all_skills_container'>
                                    <div className='all_skills_wrapper'>
                                        {
                                            allSkills.map(skill =>
                                                <div className='skill'>
                                                    <div className='skill_image' knows={skill.knows}>
                                                        <figure className='skill_image_wrap' skill={skill.title}>
                                                            <img src={skill.logo} className='skill_img' />
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

export default Skills;