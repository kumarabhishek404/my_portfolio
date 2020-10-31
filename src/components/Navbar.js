import React, { Component } from 'react';
import './Navbar.css'
import Button from './Button'
import { NavLink } from 'react-router-dom'


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false
        }
        this.menuHandler = this.menuHandler.bind(this);
    }

    menuHandler() {
        // alert('clicked')
        this.setState({
            menu: !this.state.menu
        })
    }

    render() {
        return (
            <>
                <nav>
                    <div className={this.state.menu ? 'navbar_active' : 'navbar'}>
                        <div className='navbar_container'>
                            <div className={this.state.menu ? 'navbar_wrapper_active' : 'navbar_wrapper'}>
                                <NavLink to='/' className='navbar_logo'>
                                    <h2>PORTFOLIO</h2>
                                </NavLink>
                                <div className={this.state.menu ? 'navbar_path_active' : 'navbar_path'}>
                                    <div className={this.state.menu ? 'navbar_items_active' : 'navbar_items'}>
                                        <NavLink to='/' className='navbar_item'>
                                            <div className='item'>
                                                <p>Home</p>
                                            </div>
                                        </NavLink>
                                        <NavLink to='/about' className='navbar_item'>
                                            <div className='item'>
                                                <p>About</p>
                                            </div>
                                        </NavLink>
                                        <NavLink to='/certificates' className='navbar_item'>
                                            <div className='item'>
                                                <p>Certificate</p>
                                            </div>
                                        </NavLink>
                                        <NavLink to='/experiences' className='navbar_item'>
                                            <div className='item'>
                                                <p>Experiences</p>
                                            </div>
                                        </NavLink>
                                        <div className='navbar_item'>
                                            {/* <Link> */}
                                            <div className='item'>
                                                <Button btnStyle='btnPrimary'>Admin</Button>
                                            </div>
                                            {/* </Link> */}
                                        </div>
                                    </div>
                                    <div className={this.state.menu ? 'menu_container_active' : 'menu_container'} onClick={this.menuHandler}>
                                        <Button btnStyle='btnPrimary'>{this.state.menu ? 'Cancel' : 'Menu'}</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar;