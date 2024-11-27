import React from 'react'

export default function About(props) {

  // const[myStyle,setMyStyle]=useState(
  //   {
  //     color:"black",
  //     backgroundColor:'white'
  //   }
  // )

  let myStyle={
    color:props.mode==="dark"?'white':'#042743',
    backgroundColor:props.mode==="dark"?'#042743':'white'
  }

  // const [btntext,serBtnText]=useState("Enable Dark Mode");

  // const toggleStyle=()=>{
  //   if(myStyle.color==='black'){
  //     setMyStyle(
  //       {
  //         color:"white",
  //         backgroundColor:'black'
  //       }
  //     )
  //     serBtnText("Enable Dark Mode");
  //   }

  //   else{
  //     setMyStyle(
  //     {
  //       color:"black",
  //       backgroundColor:'white'
  //     }
  //   )
  //   serBtnText("Enable Light Mode");
  //   }
  // }
 
  return (
    <div className='container' style={myStyle}>
        <h1 className='my-3'>About us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
<div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong> Analiyze your text </strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUlils gives you a way to analyze your text quickly and efficient. Be if word count, charter count or 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong> Free to use </strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      TextUtils is a free character counter tools that provides character count and word count statistics for a given text, Textutils reports the number of words and character. Thus it is suitable for writing text with word/character limit.      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong> Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      This Word counter software works in any web web Browser, Chrome, Firefox .Internet Explorer ,Safari, Opera. its used to count charter in Facebook, blog, books etc.      </div>
    </div>
  </div>
</div>

{/* <div className="container my-3">
    <button type="button" onClick={toggleStyle} className="btn btn-primary">{btntext}</button>
</div> */}
    </div>
  )
}
