import React,{useState} from 'react'
// usestate ko import kia ye  ek hook hai
// always use use state syntax in function
export default function Textform(props) {
//this is state
const [textcolor,settextcolor] = useState({
    color: 'black'
 })
    const [text,settext]=useState("");//usestate mai text ki value rhegi
    // text = "sourabh"text this is wrong way to changee the state
// settext ("updateded text") se apn text ki value upodate kr sakte hai j
//upr click function man lo niche likha hai onchange k
const upercaseclick=()=>{
    console.log("uppercase was clicked"+text)//ye text ab jo apn usme likhenge vo hai 
    let uptext= text.toUpperCase(); 
    settext(uptext ) //and finally click hone pe text update krdo
    settextcolor({color:'red'})
    props.showalert("converted to lower case","success")
}
// yha se start hai process###########################
// onchnage hmesha event fire krta hai to vo event ko apn settext mai le lenge jis se text ki value live chnag ehogi settext update krta hai 
const handleonchnage =(event)=>{
    console.log("text is handeled")
    settext(event.target.value)//ye sirf live update karega text ko jo bhi usme likhengee
}

 const lowercase = ()=>{
    let low = text.toLowerCase()
    settext(low)
   settextcolor({color:'red'})
   props.showalert("converted to lower case","success")
 }
 const clear = ()=>{
    let clear = ""
    settext(clear)
 }
 
  return (
    <>
    <div>
    <h1 className="container">{props.heading}</h1> 
    <div className="ab-3">
        <label htmlFor="floatingTextarea2"></label>
    <textarea style={textcolor}onChange={handleonchnage} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"rows = "8" value = {text} ></textarea>
  </div>
          <button className="btn btn-primary mx-4 my-4"onClick={upercaseclick}>convert to upercase</button>
          <button  className="btn btn-primary "onClick={lowercase} >convert to lower case</button>
          <button  className="btn btn-primary mx-4 "onClick={clear} 
          >clear</button>
    </div>
    <div className="container my-3">
        <h2>your text summary</h2>
        <p>No of words are {text.split(" ").length} ,  
         No of characters {text.length}</p>
        <h2>priview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
