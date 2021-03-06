import React, { Component } from 'react';
import './Footer.css'
import Button from './Button'
import { NavLink } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WorkIcon from '@material-ui/icons/Work';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import emailjs from 'emailjs-com';


class Footer extends Component {
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

    handleScroll() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <>
                <div className='footer'>
                    <div className='footer_container'>
                        <div className='footer_wrapper'>
                            <div className='form'>
                                <form onSubmit={this.sendEmail}>
                                    <h2>Touch with us</h2>
                                    <div className='intro'>
                                        <div className='input_box margin'>
                                            <input id='name' name='name' placeholder='Your Name' />
                                        </div>
                                        <div className='input_box'>
                                            <input id='email' name='email' placeholder='Your Email' />
                                        </div>
                                    </div>
                                    <div className='message'>
                                        <div className='input_box'>
                                            <textarea cols='70' rows='3' id='message' name='message' placeholder='Write your message...' />
                                        </div>
                                    </div>
                                    <Button type='submit' btnStyle='btnSecondary'>Submit</Button>
                                    {/* <div className='action'>
                                        <button>Submit</button>
                                    </div> */}
                                </form>
                            </div>
                            <div className='about_links'>
                                <div className='links'>
                                    <h3>Links</h3>
                                -----
                                    <div className='link'>
                                        <NavLink to='/' className='link_item'>
                                            <div>
                                                Home
                                            </div>
                                        </NavLink>
                                    </div>
                                    <div className='link'>
                                        <NavLink to='/about' className='link_item'>
                                            <div>
                                                About Me
                                            </div>
                                        </NavLink>
                                    </div>
                                    <div className='link' onClick={() => this.handleScroll()}>
                                        <NavLink to='/certificates' className='link_item'>
                                            <div>
                                                Certificates
                                            </div>
                                        </NavLink>
                                    </div>
                                    <div className='link'>
                                        <NavLink to='/experiences' className='link_item'>
                                            <div>
                                                Experineces
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className='thought'>
                                    <h3>Someone Said...</h3>
                                    -----
                                    <div className='thought_container'>
                                        <p>" The Best Way To Get Started Is To Quit Talking And Begin Doing. " <br /> - Walt Disney</p>
                                    </div>
                                    <div className='footer_social_links'>
                                        <div className='footer_social_links_wrapper'>
                                            <a href='https://www.linkedin.com/in/abhishek-kumar-a0197a1ab/' target='_blank' className='footer_social_link'>
                                                <LinkedInIcon />
                                            </a>
                                            <a href='https://www.instagram.com/kumarabhishek404/' target='_blank' className='footer_social_link'>
                                                <InstagramIcon />
                                            </a>
                                            <a href='https://www.naukri.com/mnjuser/profile?id=&orgn=homepage' target='_blank' className='footer_social_link'>
                                            <img src='https://www.naukri.com/favicon.ico' className='footer_social_link_img' />
                                            </a>
                                            <a href='https://api.whatsapp.com/send?phone=916397308499' target='_blank' className='footer_social_link'>
                                                <WhatsAppIcon />
                                            </a>
                                            <a href='https://www.facebook.com/profile.php?id=100012152628346' target='_blank' className='footer_social_link'>
                                                <FacebookIcon />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='about_us'>
                                    <div className='name'>
                                        <p>Abhishek</p>
                                        -----
                                    </div>
                                    <div className='position'>
                                        <p>React Developer</p>
                                    </div>
                                    <div className='phone'>
                                        <p>6397308499</p>
                                    </div>
                                    <div className='email'>
                                        <p>ak111edu000@gmail.com</p>
                                    </div>
                                    <div className='address'>
                                        <p>valipur, shakaroli, jalesar, Etah</p>
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

export default Footer;