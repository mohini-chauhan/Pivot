import React,{useState} from 'react'
import "./Year.css"

const Year = (props) => {
    console.log(props.tex)
    function sessionContent(){
        return(
            <article>
                <p className="session-content">Total Session</p>
                <p className="session-count">145</p>
            </article>

        )
    }
    function topicDesc(){
        return(
            <section>
                <h3>Introduction</h3>
                <p>However, there is no change in the appearance of link in case of the hover state.Now let's see how to customize the links by overriding its default styling</p>
            </section>
        )
    }
    
    return (
        <div className="main-container">
            {/*for dropdown option*/}
            <section className="monthly-course-container">
                <section className="year-container">
                    <select>
                    <option>Grade 9</option> 
                    <option>Grade 10</option> 
                    <option>Grade 11</option> 
                    </select>   
                    <ul>
                        <li class="active"><a  href="/">CBSE</a></li>
                        <li><a href="/">ICSE</a></li>
                        <li><a href="/">IB</a></li>
                        <li><a href="/">IGCSE</a></li>
                        <li><a href="/">ADVANCE LEVEL</a></li>
                    </ul>   
                </section>
                <section className="session-details-container">
                    {sessionContent()}
                    {sessionContent()}
                    {sessionContent()}
                    {sessionContent()}
                    {sessionContent()}
                    {sessionContent()}
                </section> 
                <section className="topic-details-container">
                    <h2>Course Topic Include</h2>
                    <article className="topic-content">
                        {topicDesc()}
                        {topicDesc()}
                        {topicDesc()}
                    </article>
                </section>
            </section>
            <section className="footer-container">
                <section className="footer-items">
                    <article className="A1">
                        <button>Filling out soon</button>
                        <p className="head-para">Vacant seats<span> 100 Seats </span></p>
                        <p className="sub-para">Not a classroom,but 1:1 sessions </p>
                    </article>
                    <article className="A2">
                        <button>50% Off</button>
                        <p className="head-para">Subscription Cost:<span> ₹3999<s> ₹5999</s></span></p>
                        <p className="sub-para">This cost is inclusive of the tablet cost. </p>
                        <p className="sub-para">Per session cost is ₹129 </p>
                    </article>
                    <article className="yearA3">
                       <button className="month-btn">Book Now</button> 
                    </article>
                </section>
                <p className="tab-sub">You can also avail a 8 inch tablet with your subscription</p>
                <p className="terms">Guranteed<a href="/"> terms & conditions </a>apply*</p>
            </section>



















        </div>
    )
}

export default Year
