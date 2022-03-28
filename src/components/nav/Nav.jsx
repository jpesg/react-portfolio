import React, {useState} from "react";
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'

const Nav = () => {
    const [active, setActive] = useState('#')
    const handleActive = (active)=> () => setActive(active)
    const setActiveClass = (current) => current === active ? 'active' : ''
    return (
        <nav>
            <a href={'#'} onClick={handleActive('#')} className={setActiveClass('#')}><AiOutlineHome/></a>
            <a href={'#about'} onClick={handleActive('#about')} className={setActiveClass('#about')}><AiOutlineUser/></a>
            <a href={'#experience'} onClick={handleActive('#experience')} className={setActiveClass('#experience')}><BiBook/></a>
            <a href={'#services'} onClick={handleActive('#services')} className={setActiveClass('#services')}><RiServiceLine/></a>
            <a href={'#contact'} onClick={handleActive('#contact')} className={setActiveClass('#contact')}><BiMessageSquareDetail/></a>
        </nav>
    )
}
export default Nav
