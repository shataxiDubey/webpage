import React from 'react';
import './SixthComponent.css'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaPinterest} from 'react-icons/fa'
import {GrLinkedin} from 'react-icons/gr'
const SixthComponent = () => {
    return (
        <div>
            <div className="divrows2">
            <div className="list">
            <a href="/">Home</a>
            <a href="/">Feedback</a>
            <a href="/">Prices</a>
            <a href="/">Brands</a>
            <a href="/">Payments</a>
            <a href="/">Policy</a>
            </div>
            <div className="list">
            <a href="/">Home</a>
            <a href="/">Feedback</a>
            <a href="/">Prices</a>
            <a href="/">Brands</a>
            <a href="/">Payments</a>
            <a href="/">Policy</a>
            </div>
            <div className="list">
            <a href="/">Home</a>
            <a href="/">Feedback</a>
            <a href="/">Prices</a>
            <a href="/">Brands</a>
            <a href="/">Payments</a>
            <a href="/">Policy</a>
            </div>
            <div className="list">
            <a href="/">Home</a>
            <a href="/">Feedback</a>
            <a href="/">Prices</a>
           <div className="rows">
           <a href="/"><AiFillFacebook className="mini"/></a>
           <a href="/"><AiOutlineTwitter className="mini"/></a>
           <a href="/"><FaPinterest className="mini"/></a>
           <a href="/"><GrLinkedin className="mini"/></a>
           </div>
            </div>
            </div>
            <div className="footer">
            <span className="span1">Wrist Watches</span>
            <span className="span2">Wrist Watches</span>
            </div>
        </div>
    );
};

export default SixthComponent;