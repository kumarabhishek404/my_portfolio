import React, { Component } from 'react';
import './Button.css'

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonStyle: ''
            // path = ''
        }
    }
    // this.styleHandler = this.styleHandler.bind(this)
    // this.sizeHandler = this.sizeHandler.bind(this)

    componentDidMount() {
        // (this.props.btnStyle == 'btnPrimary')
        //     ? this.setState({ buttonStyle: true })
        //     : this.setState({ buttonStyle: false })
        if(this.props.btnStyle == 'btnPrimary') {
            return this.setState({
                buttonStyle: 'btnPrimary'
            })
        }
        else if (this.props.btnStyle == 'btnSecondary') {
            return this.setState({
                buttonStyle: 'btnSecondary'
            })
        }
        else {
            return this.setState({
                buttonStyle: 'btnThird'
            })
        }
    }

    render() {
        return (
            <>
                <div className='button'>
                    <button className={this.state.buttonStyle}>
                        {this.props.children}
                    </button>
                </div>
            </>
        )
    }
}

export default Button;