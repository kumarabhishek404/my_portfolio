import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderImage from '../HeaderImage';
import './Projects.css'

const teamProjects = [
    {
        title: "UDYAMI UTSAV",
        sub_title: "–A National Level Innovation and Entrepreneur Summit",
        image: "https://s.tmimgcdn.com/blog/wp-content/uploads/2018/04/Web-Design.png?x54449",
        role: "–Web Developer"
    },
    {
        title: "AnimaDrive",
        sub_title: "–An Initiative for Animal Welfare",
        image: "/images/logo1.png",
        role: "–Web Developer"
    }
]

class Projects extends Component {


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
                                        <div className='project_link'>
                                            <p>Team Projects</p>
                                        </div>
                                        <div className='project_link'>
                                            <p>Individual Projects</p>
                                        </div>
                                    </div>
                                    <div className='all_projects'>
                                        <div className='all_projects_container'>
                                            <div className='all_projects_wrapper'>
                                                {
                                                    teamProjects.map(project =>
                                                        <div className='project'>
                                                            <div className='project_image'>
                                                                <figure>
                                                                    <img src={project.image} />
                                                                </figure>
                                                            </div>
                                                            <p>Title: {project.title} <span>{project.sub_title}</span></p>
                                                            <p>Responsibility:<span>{project.role}</span></p>
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