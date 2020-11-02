import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import About from "./components/pages/About";
import Certificates from "./components/pages/Certificates";
import Experiences from "./components/pages/Experiences";
import Projects from "./components/pages/Projects";
import Skills from './components/pages/Skills'
import Works from "./components/pages/Works";

class App extends Component {
    constructor(props) {
        super(props);
        // this.state = { };
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route path='/' component={Home} exact />
                        <Route path='/about' component={About} exact />
                        <Route path='/certificates' component={Certificates} exact />
                        <Route path='/experiences' component={Experiences} exact />
                        <Route path='/works' component={Works} exact />
                        <Route path='/projects' component={Projects} exact />
                        <Route path='/skills' component={Skills} exact />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;