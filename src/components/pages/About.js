import React, {Component} from 'react';
import HeaderImage from '../HeaderImage'

class About extends Component {


    render() {
        return (
            <>
            <div className='home'>
                    <div className='home_container'>
                        <div className='home_wrapper'>
                            <HeaderImage heading='/About' />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default About;