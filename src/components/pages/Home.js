import React, { Component } from 'react';
import './Home.css';
import HeaderImage from '../HeaderImage'
import { NavLink } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Button from '../Button'

class Home extends Component {
    constructor(props) {
        super(props)

    }


    componentDidMount() {
        window.scrollTo(0, 0)
    }


    render() {
        return (
            <>
                <div className='home'>
                    <div className='home_container'>
                        <div className='home_wrapper'>
                            <div className='home_image'>
                                <div className='home_image_container'>
                                    <img src='/images/home-pic-1.jpg' className='home_img' />
                                </div>
                            </div>
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
                                <div className='about_form'>
                                    <div className='about_form_container'>
                                        <h1>Message Me</h1>
                                        <form className='about_form_wrapper' >
                                            <input type='text' placeholder='Your Name' />
                                            <input type='email' placeholder='Your Email' />
                                            <textarea placeholder='Your Message...' cols='35' rows='3' />
                                            <Button btnStyle='btnThird'>Message</Button>
                                        </form>
                                    </div>
                                </div>
                                <div className='home_links_container'>
                                    <a href='' target='_blank' className='home_link'>
                                        <LinkedInIcon fontSize='large' />
                                    </a>
                                    <a href='https://www.instagram.com/kumarabhishek404/' target='_blank' className='home_link'>
                                        <InstagramIcon fontSize='large' />
                                    </a>
                                    <a href='' className='home_link'>
                                        <EmailIcon fontSize='large' />
                                    </a>
                                    <a href='' className='home_link'>
                                        <WhatsAppIcon fontSize='large' />
                                    </a>
                                    <a href='https://www.facebook.com/profile.php?id=100012152628346' target='_blank' className='home_link'>
                                        <FacebookIcon fontSize='large' />
                                    </a>
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