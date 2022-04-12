import React, { useContext } from 'react'
import UserContext from './Context'

const About = () => {
    const msg = useContext(UserContext)
    return (
        <div>
            <center><h2>About Page</h2></center>
            <center><h2>{msg}</h2></center>
        </div>
    )
}

export default About
