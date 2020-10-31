import React, { Component } from 'react';
import './HeaderImage.css'

class HeaderImage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: 'https://www.shore-access.com/wp-content/uploads/2017/08/portfolio-background.jpg'
        }

    // changeImage(e) {
    //     this.setState({
    //         img: ''
    //     })
    // }        

    }

    render() {
        return (
            <>
                <div className='image'>
                    <div className='image_heading'>
                        <h1>home{this.props.heading}</h1>
                    </div>
                </div>
            </>
        )
    }
}

export default HeaderImage;