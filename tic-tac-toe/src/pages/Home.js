import React from 'react'   
import { Link } from 'react-router-dom' 

export default function Home() {
    return (
        <section className='#home'>
            <div></div>
            <div className=''>
                <Link to="/humanVScomputer">Human v/s Computer</Link>
                <Link to="/humanVShuman">Human v/s Human</Link>
            </div>
        </section>
    )
}