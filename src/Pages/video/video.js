import React from 'react';
import {Link,Route} from 'react-router-dom'
import Flutter from './flutter'
import Vue from './vue'
import ReactPage from './reactpage'

function Video(){
    return(
        <div>
            <div className='topNav'>
                <ul>
                    <li><Link to='/video/reactpage'>React学习</Link></li>
                    <li><Link to='/video/vue'>Vue学习</Link></li>
                    <li><Link to='/video/flutter'>flutter学习</Link></li>
                </ul>
            </div>
            <div className='videoContent'>
                <div><h3>视频教程</h3></div>
                <Route path='/video/reactpage/' component={ReactPage}></Route>
                <Route path='/video/vue/' component={Vue}></Route>
                <Route path='/video/flutter/' component={Flutter}></Route>
            </div>
        </div>
    )
}
export default Video