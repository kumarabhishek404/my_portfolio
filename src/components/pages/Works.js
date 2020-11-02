import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import HeaderImage from '../HeaderImage';
import './Works.css'

const reactProjects = [
    {
        title: "AnimaDrive",
        sub_title: "–An Initiative for Animal Welfare.",
        image1: "./images/animadrive_lap.png",
        image2: "./images/animadrive-mobile.jpg"
    },
    {
        title: "Home Gallery",
        sub_title: "–For saving your memorable family photos.",
        image1: "./images/home_gallery_lap.png",
        image2: "./images/photo-gallery-mobile.jpg"
    },
    {
        title: "Portfolio",
        sub_title: "–A portfolio which express about me.",
        image1: "./images/portfolio_lap.png",
        image2: "./images/portfolio-mobile.jpg"
    },
    {
        title: "Calculator",
        sub_title: "–This is a calculator allpication with all functionality.",
        image1: "./images/Calculator.png",
        image2: "./images/calculator-mobile.jpg"
    }
]

const nodejsProjects = [
    {
        title: "Weather Application",
        sub_title: "–A application which provide weather report.",
        image1: "./images/Weather Report.png",
        image2: "./images/weather-mobile.jpg",
    }
]

const javascriptProjects = [
    {
        title: "Alarm Clock",
        sub_title: "–An application which have a digital clock and an alarm set.",
        image1: "./images/Alarm Clock.png",
        image2: "./images/alarm-clock-mobile.jpg"
    },
    {
        title: "Add your books",
        sub_title: "–An application which can add books in your local storage.",
        image1: "./images/Add Books.png",
        image2: "./images/add-books-mobile.jpg"
    },
    {
        title: "Add Notes",
        sub_title: "–An application which can add notes in your local storage.",
        image1: "./images/Add Notes.png",
        image2: "./images/add-notes-mobile.jpg"
    },
    {
        title: "Ajax API Calls",
        sub_title: "–An application which can make request to APIs.",
        image1: "./images/Ajax API Calls.png",
        image2: "./images/ajax-api-mobile.jpg"
    },
    {
        title: "CV Scanner",
        sub_title: "–This application looks like a CV Scanner of any company.",
        image1: "./images/CV Scanner.png",
        image2: "./images/cv-scanner-mobile.jpg"
    },
    {
        title: "Character Image By Name",
        sub_title: "–This application takes a name and in response gives a different images on different names.",
        image1: "./images/Character Image.png",
        image2: "./images/character-image-mobile.jpg"
    },
    {
        title: "Small Search Bar",
        sub_title: "–This application have a search bar which can search what you want like a google.",
        image1: "./images/Small Search Bar.png",
        image2: "./images/small-search-bar-mobile.jpg"
    },
    {
        title: "JSON 2 HTML",
        sub_title: "–This application takes json data in input box and in response gives html page.",
        image1: "./images/json2html_lap.png",
        image2: "./images/json 2 html-mobile.jpg"
    },
    {
        title: "Validate Form",
        sub_title: "–An application have many input boxes which takes data with full validation.",
        image1: "./images/Validated Form.png",
        image2: "./images/validate-form-mobile.jpg"
    }
]

const htmlProjects = [
    {
        title: "Online Meal Website",
        sub_title: "–A website which looks like an online meal website.",
        image1: "./images/Online Meal Website.png",
        image2: "./images/online-meal-mobile.jpg"
    },
    {
        title: "Cafe",
        sub_title: "–This looks like a beautiful home page of a cafe website.",
        image1: "./images/Cafe.png",
        image2: "./images/cafe-mobile.jpg"
    }
]

class Works extends Component {
    constructor() {
        super()
        this.state = {
            projects: reactProjects
        }
    }

    handleReactProjects() {
        this.setState({
            projects: reactProjects
        })
    }

    handleNodeProjects() {
        this.setState({
            projects: nodejsProjects
        })
    }

    handleJavaScriptProjects() {
        this.setState({
            projects: javascriptProjects
        })
    }

    handleHTMLProjects() {
        this.setState({
            projects: htmlProjects
        })
    }

    render() {
        return (
            <>
                <HeaderImage heading='/works' />
                <div className='works_links'>
                    <div className='works_links_container'>
                        <div className='works_links_wrapper'>
                            <div className='works_link' onClick={() => this.handleReactProjects()}>
                                <p>React</p>
                            </div>
                            <div className='works_link' onClick={() => this.handleNodeProjects()}>
                                <p>NodeJS</p>
                            </div>
                            <div className='works_link' onClick={() => this.handleJavaScriptProjects()}>
                                <p>JavaScript</p>
                            </div>
                            <div className='works_link' onClick={() => this.handleHTMLProjects()}>
                                <p>HTML</p>
                            </div>
                        </div>
                        <div className='all_works'>
                            <div className='all_works_container'>
                                <div className='all_works_wrapper'>
                                    {
                                        this.state.projects.map(project =>
                                            <div className='work'>
                                                <div className='work_image'>
                                                    <figure className='work_image_wrap'>
                                                        <img src={project.image1} className='work_img' />
                                                        <div className='work_img img-top'>
                                                            <div className='second_img'>
                                                            <img src={project.image2} className='img' />
                                                            </div>
                                                        </div>
                                                    </figure>
                                                </div>
                                                <div className='work_info'>
                                                    <div className='work_info_container'>
                                                        <p>Title: {project.title} <span>{project.sub_title}</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Works;