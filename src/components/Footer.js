import React, { Component } from 'react';
import './Footer.css'
import Button from './Button'
import { NavLink } from 'react-router-dom';


class Footer extends Component {

    render() {
        return (
            <>
                <div className='footer'>
                    <div className='footer_container'>
                        <div className='footer_wrapper'>
                            <div className='form'>
                                <form>
                                    <h2>Touch with us</h2>
                                    <div className='intro'>
                                        <div className='input_box margin'>
                                            <input placeholder='Your Name' />
                                        </div>
                                        <div className='input_box'>
                                            <input placeholder='Your Email' />
                                        </div>
                                    </div>
                                    <div className='message'>
                                        <div className='input_box'>
                                            <textarea cols='70' rows='3' placeholder='Write your message...' />
                                        </div>
                                    </div>
                                    <Button>Submit</Button>
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
                                    <div className='link'>
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
                                        <p>Immm mmm mm skfnsi  wad hiu afhwq aifqwnr nas vq vqhrqwhrnwerinw dna vaniasf wnr nfwurn unqiudn qrh wbw wefbweufbw</p>
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