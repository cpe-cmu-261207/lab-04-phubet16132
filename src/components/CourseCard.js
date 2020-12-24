import picx from './picx.svg'
export const CourseCard = (props , func) => {
  // TODO: design HTML component that displays a course as a "card" on the webpage.
  
  return (<div className="cadded">
            <aside className="scg">
                <aside>Subject ID</aside>
                <aside>Credit</aside>
                <aside>Grade</aside>
                <aside>{props.id}</aside>
                <aside>{props.credit}</aside>
                <aside>{props.grade}</aside>
            </aside>
            <aside><button className="delx" onClick={()=>func(props.id)}><img src={picx}></img></button></aside>
          </div>);
};
