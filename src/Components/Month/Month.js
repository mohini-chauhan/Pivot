import React,{useState} from 'react'
import "./Month.css";



const Month = (props) => {


//for obtaining all the grades in an array
var gradeList=[]
    for (let i=0;i<props.text.length;i++){
        gradeList.push(props.text[i].grade)
    }
//state setting for select
const [select,setSelect]=useState(gradeList[0]);
    //for printing the values of dropdown 
    var dropDown=gradeList.map((g)=>{
        return (
            <option  value={g}>{g}</option>
        )
    })
//function for price after discount    
function dPrice(price,discount){
    return price-(price*(discount/100));

}
    function cardSkeleton( cardData){
        console.log("kvvh",cardData)
        return(
            <section className="monthly-card-skeleton">
                    <input type="radio"/>
                    <div className="month-duration">
                        <label>{cardData.valid} </label>
                        <p className="offer">{cardData.refund}</p>
                    </div>
                    <div className="month-price">
                        <p>₹{dPrice(cardData.price,cardData.discount)} <span><s>₹{cardData.price}</s></span></p>
                        <p className="discount">{cardData.discount}% OFF</p>
                    </div>
                    <div className="session-duration">
                        <p className="price-session">₹{cardData.per_class_price} per session </p>
                        <p className="session-count">{cardData.total_sessions} Sessions</p>

                    </div>

                </section>
        )
    }



    return (
        <div className="main-container">
            <section className="monthly-course-container">
                <select  onChange={(e)=>setSelect(e.target.value)}>
                    {dropDown}             
                </select>
                {cardSkeleton(props.text[gradeList.indexOf(select)].boards.general["5_sessions"])}
                {cardSkeleton(props.text[gradeList.indexOf(select)].boards.general["10_sessions"])}
                {cardSkeleton(props.text[gradeList.indexOf(select)].boards.general["20_sessions"])}
                {cardSkeleton(props.text[gradeList.indexOf(select)].boards.general["45_sessions"])}
            </section>
            <section className="footer-container">
                <section className="footer-items">
                    <article className="A1">
                        <p>Monthly classes let you choose your own course topics</p>
                    </article>
                    <article className="A2">
                        <p>Each session lasts</p>
                        <p> 45 minutes</p>
                    </article>
                    <article className="A3">
                       <button className="month-btn">Book Now</button> 
                    </article>
                </section>
                <p className="terms">Refund same day<a href="/"> terms & conditions </a>apply</p>
            </section>
            
        </div>
    )
}

export default Month
