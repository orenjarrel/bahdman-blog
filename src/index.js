import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar/navbar';
import Welcome from './components/Welcome/welcome';
import Footer from './components/Footer/Footer';
import CreateArticle from './components/CreateArticle/CreateArticle';


const Home = () => {
    return <h1>This is the Home Page</h1>
}

const About = () => {
    return <h1>This is the About Page</h1>
}

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Navbar />

            <Route exact path="/" component={Welcome} />
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
            <Route path="/articles/create" component={CreateArticle} />

            <Footer />
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
