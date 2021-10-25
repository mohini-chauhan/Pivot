import React,{useState} from 'react'
import "./Year.css"

const Year = (props) => {
    const [toggle,setToggle]=useState(0);

   var gradeList=[]
   for (let i=0;i<props.text.length;i++){
       gradeList.push(props.text[i].grade)
        }
   //state setting for select
    const [select,setSelect]=useState(gradeList[0]);
   var dropDown=gradeList.map((g)=>{
    return (
        <option  value={g}>{g}</option>
            )
        })


 // board list 
 var boardList=[]
 for (let i =0;i<Object.keys(props.text[gradeList.indexOf(select)].boards).length;i++){
     boardList.push(Object.keys(props.text[gradeList.indexOf(select)].boards)[i])
 }
 const [board,setBoard]=useState(boardList[0]);

 console.log(props.text)

  //for printing the values of  board dropdown 
  var boardDropDown=boardList.map((b)=>{
      console.log(boardList.indexOf(b))
    return (
        
        <button onClick={(e)=>{setToggle(boardList.indexOf(b)); setBoard(e.target.value)}} className={toggle==boardList.indexOf(b)?"clk" :""}  value={b}>{b}</button>
    )
})

function onSelect(e){
    setSelect(e.target.value)
    setBoard(Object.keys(props.text[gradeList.indexOf(e.target.value)].boards)[0])
    setToggle(0)
    
}

    function sessionContent(number,session,s={}){
        return(
            <article className='session-number' style={s}>
                <p className="session-content">{session}</p>
                <p className="session-count">{number}</p>
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
            {console.log(board)}
            <section className="monthly-course-container">
                <section className="year-container">
                    <select onChange={onSelect}>
                    {dropDown}
                    </select>   
                    <div className="year-board-btn">
                       {boardDropDown}
                       {console.log(board ,"set")}
                    </div>   
                </section>
                <section className="session-details-container">
                    {sessionContent(props.text[gradeList.indexOf(select)].boards[board]['total_sessions'],'Total Sessions')}
                    {sessionContent(props.text[gradeList.indexOf(select)].boards[board]['online_pre_assignments'],'Online Pre Assignments')}
                    {sessionContent(props.text[gradeList.indexOf(select)].boards[board]['online_post_assignments'],'Online Post Assignments')}
                    {sessionContent(props.text[gradeList.indexOf(select)].boards[board]['online_assignments'],'Online Assignments')}
                    {sessionContent(props.text[gradeList.indexOf(select)].boards[board]['online_tests'],'Online Tests',{width:'7%'})}
                    {sessionContent(props.text[gradeList.indexOf(select)].boards[board]['career_counselling_sessions'],'Career Counselling Sessions',{width:'18%'})}
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
                    <article className="A11">
                        <button>Filling out soon</button>
                        <p className="head-para">Vacant seats<span> 100 Seats </span></p>
                        <p className="sub-para">Not a classroom,but 1:1 sessions </p>
                    </article>
                    <article className="A22">
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
