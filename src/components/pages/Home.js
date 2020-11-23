import React, { Component } from 'react';
import './Home.css';
import HeaderImage from '../HeaderImage'
import { NavLink } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WorkIcon from '@material-ui/icons/Work';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Button from '../Button'
import emailjs from 'emailjs-com';

class Home extends Component {
    constructor(props) {
        super(props)
        this.sendEmail = this.sendEmail.bind(this)

    }

    sendEmail(e) {
        e.preventDefault()
        console.log(e.target.message.value);
        if (e.target.name.value !== '' && e.target.email.value !== '' && e.target.message.value !== '') {
            emailjs.sendForm('service_ukabj5r', 'template_amzbifj', e.target,
                'user_XbJtGzV9wZfp60QdwcCrr')
                .then((result) => {
                    console.log(result)
                    window.location.reload()
                }, (error) => {
                    console.log(error.text);
                });
        }
        else {
            alert('Fill all the inputs')
        }
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
                                        <p>Portfolio</p>
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
                                        <form className='about_form_wrapper' onSubmit={this.sendEmail} >
                                            <input type='text' id='name' name='name' placeholder='Your Name' />
                                            <input type='email' id='email' name='email' placeholder='Your Email' />
                                            <textarea id='message' name='message' placeholder='Your Message...' cols='35' rows='3' />
                                            <Button type='submit' btnStyle='btnThird'>Message</Button>
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
                                    <a href='https://www.naukri.com/mnjuser/profile?id=&orgn=homepage' target='_blank' className='home_link'>
                                        <img src='https://www.naukri.com/favicon.ico' className='home_link_img' />
                                    </a>
                                    <a href='https://api.whatsapp.com/send?phone=916397308499' target='_blank' className='home_link'>
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