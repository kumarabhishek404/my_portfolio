import React, { Component } from 'react';
import './Button.css'

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonStyle: false
            // path = ''
        }
    }
    // this.styleHandler = this.styleHandler.bind(this)
    // this.sizeHandler = this.sizeHandler.bind(this)

    componentDidMount() {
        (this.props.btnStyle == 'btnPrimary')
            ? this.setState({ buttonStyle: true })
            : this.setState({ buttonStyle: false })
    }

    render() {
        return (
            <>
                <div className='button'>
                    <button className={this.state.buttonStyle ? 'btnPrimary' : 'btnSecondary'}>
                        {this.props.children}
                    </button>
                </div>
            </>
        )
    }
}

export default Button;