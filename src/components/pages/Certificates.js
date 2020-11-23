import React, { Component } from 'react';
import HeaderImage from '../HeaderImage';
import './Certificates.css'

const certificates = [
    {
        title: 'Certificate of Appreciation For Udyami Utsav’s Teamwork by MSME Minister [ NITIN GADKARI ]',
        position: 'Web Developer',
        image: '/images/certifcate1.png'
    },
    // {
    //     title: 'Certificate of Best Work of the month at AnimaDrive',
    //     position: 'Project Manager & Frontend Developer',
    //     image: ''
    // },
    // {
    //     title: 'Select for the Navodaya Cluster Label Innovation Challenge of IT',
    //     position: 'Presentation',
    //     image: ''
    // }
]

class Certificates extends Component {


    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <>
                <div className='home'>
                    <div className='home_container'>
                        <div className='home_wrapper'>
                            <HeaderImage heading=' / Certificates' />
                            <div className='certificates'>
                                <div className='certificates_container'>
                                    <h1>Certificates</h1>
                                    <div className='certificates_wrapper'>
                                        {
                                            certificates.map(certificate =>
                                                <div className='certificate'>
                                                    <a href='https://drive.google.com/file/d/11C1oVMrIVupTtNN9zsqO7qx-0m7ecxY8/view' target='_blank' className='certificate_link'>
                                                        <p>{certificate.title}</p>
                                                        <p>Position: <span>{certificate.position}</span></p>
                                                        <div className='certificate_image'>
                                                            <figure className='certificate_figure'>
                                                                <img src={certificate.image} className='certificate_img' />
                                                            </figure>
                                                        </div>
                                                    </a>
                                                </div>

                                            )
                                        }
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

export default Certificates;