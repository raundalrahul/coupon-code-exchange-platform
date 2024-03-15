import React from 'react'
import { Link } from 'react-router-dom'
import './Startpage.css'

export default function Startpage(props) {
  return (
    <div>
      <div>
        <h1 >
            <Link className='colorbc' to="/login">Login</Link>
        </h1>
        <br />
        <h1>
            <Link className='colorbc'  to="/signup">SignUp</Link>
        </h1>
        <br />
        <h2> {props.name ? `Welcome - ${props.name}` :"Login Please"} </h2>
      </div>
    </div>
  )
}
