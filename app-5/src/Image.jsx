import React, {Component} from 'react'

export default class Image extends Component{
    render(){
        return(
            <div>
                <img src='https://http.cat/409' alt='error 409, conflict'/>
                <caption>Error 409</caption>
            </div>
        )
    }
}