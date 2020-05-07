import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import './index.css';
import Index from './Pages/index';
import Video from './Pages/video/video';

class App extends Component {
    
    render() { 
        return (
        <Router>
            <div className='mainDiv'>
                <div className='leftNav'>
                    <ul>
                        <h3>一级导航</h3>
                        <li><Link to='/'>博客首页</Link></li>
                        <li><Link to='/video'>视频教程</Link></li>
                        <li><Link to=''>职场技能</Link></li>
                    </ul>
                </div>
                <div className='rightMain'>
                    <Route path='/' exact component={Index}></Route>
                    <Route path='/video/' component={Video}></Route>
                </div>
            </div>
        </Router>);
    }
}

export default App;