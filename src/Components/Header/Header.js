import React, {Component} from 'react';
import './Header.css'

export default class Header extends Component{
    render(){
        return(
            <section>
                <h1 className='main-title'>Create A Playlist</h1>
                {<div className='astronaut'>👨🏼‍🚀</div>}
                {/* <div className='rocket'>🚀</div> */}
            </section>
        )
    }
}