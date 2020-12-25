import { useState } from "react";
import { CourseCard } from "./components/CourseCard";
function App() {
  const [myCourses, setMyCourse] = useState([]);
  const [inputData, setInputData] = useState({});
  const [GPA, setGPA] = useState(0);

  const [id, setId] = useState("");
  const [grade, setGrade] = useState(0);
  const [credit, setCredit] = useState(0);
  /**
   * Calculate the GPA of current courses
   * @returns the GPA of current courses
   */
  function calculateGPA(course) {
    // TODO
    let sum_credit=0 , sum_grade=0
    course.forEach(e=>{
      if(parseFloat(e.grade)>=0){
        sum_credit += parseFloat(e.credit)
        sum_grade += parseFloat(e.grade)*parseFloat(e.credit) 
      } 
    })
    setGPA(sum_grade/sum_credit)
  }

  /**
   * Should be called when a course is to be added to the list.
   * After adding the course to the list, the displayed GPA should be updated.
   * @param {*} event
   */
  function addCourse(event) {
    event.preventDefault();
    // TODO
    let input = {
      id:id,
      credit:credit,
      grade:grade
    }
     setMyCourse([...myCourses,input])
    // recalculate GPA
    const courses = [...myCourses, input]
    calculateGPA(courses);
  }

  /**
   * Should be called when a course is to be removed from the list.
   * After removing the course from the list, the displayed GPA should be updated.
   * @param {*} id
   */
  function onDeleteCourse(id) {
    // TODO
    setMyCourse(myCourses.filter(e=> e.id !== id))
    const courses = myCourses.filter(e=> e.id !== id)
    calculateGPA(courses);
  }

  function onClear(e) {
    setMyCourse([])
  }


  
  return (
    <div>
      <div className="header-text"><h1><b> <span className="colorhgpa">GPA</span>  <span>CALCULATOR</span></b></h1></div>
      <div className="background-gpa">
        <h1 className="courseH"><b>My Course</b></h1>
        <div className="selcou">
          <h1><b>Select Course</b></h1>
          {myCourses.map((value)=>{
            return CourseCard(value,onDeleteCourse) 
          })}
        </div>
      </div>
  
      <div className="inputBlock">
        <div>
          <input placeholder="Subject ID" id="subject-id" className="sid" onChange={(e)=>setId(e.target.value)}></input>
        </div>
        <div>
          <select className ="scadit" onChange={(e)=>setCredit(e.target.value)}>
             <option selected disabled>Select Credit</option>
             <option value ="1">1</option>
             <option value ="2">2</option>
             <option value ="3">3</option>
          </select>
        </div>
        <div>
          <select className ="sgrade" onChange={(e)=>setGrade(e.target.value)}>
             <option selected id ="selected-grade" disabled >Select Grade</option>
             <option value ="4">  A</option>
             <option value ="3.5">B+</option>
             <option value ="3">  B</option>
             <option value ="2.5">C+</option>
             <option value ="2">  C</option>
             <option value ="1.5">D+</option>
             <option value ="1">  D</option>
             <option value ="0">  F</option>
             <option value ="-1"> W</option>
          </select>
        </div>
      </div>
      <div className="calbut">
        <button className="add" onClick={addCourse}>add</button>
        <button className="button" onClick={onClear}>clear</button>
      </div>
      <div className="calshow"><div className="show">GPA {GPA.toFixed(2)}</div></div>
    </div>
  );

}
     

export default App;




