import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderImage from '../HeaderImage';
import './Projects.css'

const teamProjects = [
    {
        title: "UDYAMI UTSAV",
        sub_title: "–A National Level Innovation and Entrepreneur Summit",
        image1: "./images/udyamiutsav-logo.png",
        role: "–Web Developer"
    },
    {
        title: "AnimaDrive",
        sub_title: "–An Initiative for Animal Welfare",
        image1: "./images/animadrive_lap.png",
        role: "–Web Developer"
    }
]

const individualProjects = [
    {
        title: "Home Gallery",
        sub_title: "–For saving your memorable family photos.",
        image1: "./images/home_gallery_lap.png"
    },
    {
        title: "Portfolio",
        sub_title: "–A portfolio which express about me.",
        image1: "./images/portfolio_lap.png"
    },
    {
        title: "Calculator",
        sub_title: "–This is a calculator allpication with all functionality.",
        image1: "./images/Calculator.png"
    },
    {
        title: "Weather Application",
        sub_title: "–A application which provide weather report.",
        image1: "/images/Weather Report.png",
        image2: "/images/2.png",
    },
    {
        title: "Alarm Clock",
        sub_title: "–An application which have a digital clock and an alarm set.",
        image1: "/images/Alarm Clock.png",
        image2: "/images/2.png"
    },
    {
        title: "Add your books",
        sub_title: "–An application which can add books in your local storage.",
        image1: "/images/Add Books.png",
        image2: "/images/2.png"
    },
    {
        title: "Add Notes",
        sub_title: "–An application which can add notes in your local storage.",
        image1: "/images/Add Notes.png",
        image2: "/images/2.png"
    },
    {
        title: "Ajax API Calls",
        sub_title: "–An application which can make request to APIs.",
        image1: "/images/Ajax API Calls.png",
        image2: "/images/2.png"
    },
    {
        title: "CV Scanner",
        sub_title: "–This application looks like a CV Scanner of any company.",
        image1: "/images/CV Scanner.png",
        image2: "/images/2.png"
    },
    {
        title: "Character Image By Name",
        sub_title: "–This application takes a name and in response gives a different images on different names.",
        image1: "/images/Character Image.png",
        image2: "/images/2.png"
    },
    {
        title: "Small Search Bar",
        sub_title: "–This application have a search bar which can search what you want like a google.",
        image1: "/images/Small Search Bar.png",
        image2: "/images/2.png"
    },
    {
        title: "JSON 2 HTML",
        sub_title: "–This application takes json data in input box and in response gives html page.",
        image1: "/images/json2html_lap.png",
        image2: "/images/2.png"
    },
    {
        title: "Validate Form",
        sub_title: "–An application have many input boxes which takes data with full validation.",
        image1: "/images/Validated Form.png",
        image2: "/images/2.png"
    },
    {
        title: "Online Meal Website",
        sub_title: "–A website which looks like an online meal website.",
        image1: "/images/Online Meal Website.png",
        image2: "/images/2.png"
    },
    {
        title: "Cafe",
        sub_title: "–This looks like a beautiful home page of a cafe website.",
        image1: "/images/Cafe.png",
        image2: "/images/2.png"
    }
]

class Projects extends Component {
    constructor() {
        super()
        this.state = {
            projects: teamProjects
        }
    }

    handleTeamProjects() {
        this.setState({
            projects: teamProjects
        })
    }

    handleIndividualProjects() {
        this.setState({
            projects: individualProjects
        })
    }


    render() {
        return (
            <>
                <div className='projecs'>
                    <div className='projects_container'>
                        <div className='projects_wrapper'>
                            <HeaderImage heading='/projects' />
                            <div className='project_links'>
                                <div className='project_links_container'>
                                    <div className='project_links_wrapper'>
                                        <div className='project_link' onClick={() => this.handleTeamProjects()}>
                                            <p>Team Projects</p>
                                        </div>
                                        <div className='project_link' onClick={() => this.handleIndividualProjects()}>
                                            <p>Individual Projects</p>
                                        </div>
                                    </div>
                                    <div className='all_projects'>
                                        <div className='all_projects_container'>
                                            <div className='all_projects_wrapper'>
                                                {
                                                    this.state.projects.map(project =>
                                                        <div className='project'>
                                                            <div className='project_image'>
                                                                <figure className='project_image_wrap'>
                                                                    <img src={project.image1} className='project_img' />
                                                                </figure>
                                                            </div>
                                                            <div className='project_info'>
                                                                <p>Title: {project.title} <span>{project.sub_title}</span></p>
                                                                <p>Responsibility:<span>{project.role}</span></p>
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
                    </div>
                </div>
            </>
        )
    }
}

export default Projects;