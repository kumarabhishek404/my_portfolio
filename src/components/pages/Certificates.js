import React, { Component } from 'react';
import HeaderImage from '../HeaderImage';
import './Certificates.css'

const certificates = [
    {
        title: 'Certificate of Appreciation For Udyami Utsav’s Teamwork by MSME Minister [ NITIN GADKARI ]',
        position: 'Web Developer',
        image: 'https://s.tmimgcdn.com/blog/wp-content/uploads/2018/04/Web-Design.png?x54449'
    },
    {
        title: 'Certificate of Best Work of the month at AnimaDrive',
        position: 'Project Manager & Frontend Developer',
        image: 'https://s.tmimgcdn.com/blog/wp-content/uploads/2018/04/Web-Design.png?x54449'
    },
    {
        title: 'Select for the Navodaya Cluster Label Innovation Challenge of IT',
        position: 'Presentation',
        image: 'https://s.tmimgcdn.com/blog/wp-content/uploads/2018/04/Web-Design.png?x54449'
    }
]

class Certificates extends Component {

     
    componentDidMount() {
        window.scrollTo(0,0)
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
                                                    <p>{certificate.title}</p>
                                                    <p>Position: <span>{certificate.position}</span></p>
                                                    <div className='certificate_image'>
                                                        <figure>
                                                            <img src={certificate.image} />
                                                        </figure>
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
            </>
        )
    }
}

export default Certificates;