import React, { Component } from 'react';
import './Home.css';
import HeaderImage from '../HeaderImage'
import { NavLink } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <>
                <div className='home'>
                    <div className='home_container'>
                        <div className='home_wrapper'>
                            <HeaderImage heading='' />
                            <div className='home_links'>
                                <div className='home_links_container'>
                                    <NavLink to='/works' className='home_link'>
                                        <p>Work</p>
                                    </NavLink>
                                    <NavLink to='/projects' className='home_link'>
                                        <p>Project</p>
                                    </NavLink>
                                    <NavLink to='/skills' className='home_link'>
                                        <p>Skills</p>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home;