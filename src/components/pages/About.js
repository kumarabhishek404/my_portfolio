import React, { Component } from 'react';
import './About.css'
import HeaderImage from '../HeaderImage'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

class About extends Component {


    componentDidMount() {
        window.scrollTo(0, 0)
    }


    render() {
        return (
            <>
                <div className='about_'>
                    <div className='about__container'>
                        <div className='about__wrapper'>
                            <HeaderImage heading=' / About' />
                            <div className='about'>
                                <div className='about_container'>
                                    <h1>About Us</h1>
                                    <div className='about_wrapper'>
                                        <div className='about_image'>
                                            <figure className='about_image_wrap'>
                                                <img src='/images/my-pic.png' alt='pic' className='about_img' />
                                            </figure>
                                        </div>
                                        <div className='about_info'>
                                            <div className='name'>
                                                <h2>Abhishek Kumar</h2>
                                                <h3>React Developer</h3>
                                            </div>
                                            <div className='about_para'>
                                                <p>
                                                    I always tried to learn from myself and was successful in that and that is why I didn’t take admission in any college.
                                                    I am currently looking for an organization where my skills can be complemented and polished and thus further effectuate the growth of the organization.
                                    </p>
                                                <div className='about_social'>
                                                    <a href='https://www.linkedin.com/in/abhishek-kumar-a0197a1ab/' target='_blank' className='social_link'>
                                                        <LinkedInIcon />
                                                    </a>
                                                    <a href='https://www.instagram.com/kumarabhishek404/' target='_blank' className='social_link'>
                                                        <InstagramIcon />
                                                    </a>
                                                    <a className='social_link'>
                                                        <EmailIcon />
                                                    </a>
                                                    <a className='social_link'>
                                                        <WhatsAppIcon />
                                                    </a>
                                                    <a href='https://www.facebook.com/profile.php?id=100012152628346' target='_blank' className='social_link'>
                                                        <FacebookIcon />
                                                    </a>
                                                </div>
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

export default About;