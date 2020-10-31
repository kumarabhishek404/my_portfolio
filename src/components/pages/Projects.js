import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderImage from '../HeaderImage';
import './Projects.css'

const teamProjects = [
    {
        title: "UDYAMI UTSAV",
        sub_title: "–A National Level Innovation and Entrepreneur Summit",
        image: "/images/logo1New.png",
        role: "–Web Developer"
    },
    {
        title: "AnimaDrive",
        sub_title: "–An Initiative for Animal Welfare",
        image: "/images/logo1New.png",
        role: "–Web Developer"
    }
]

const individualProjects = [
    {
        title: "UDYAMI UTSAV",
        sub_title: "–A National Level Innovation and Entrepreneur Summit",
        image: "https://s.tmimgcdn.com/blog/wp-content/uploads/2018/04/Web-Design.png?x54449",
        role: "–Web Developer"
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
                                                                <figure>
                                                                    <img src={project.image} />
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