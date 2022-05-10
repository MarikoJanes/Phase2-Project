import React, {useState} from 'react'

function PostRecipeForm() {

    const [formData, setFormData] = useState({
        name: "",

    });
    const [stepInput, setStepInput] = useState([{step1: ""}]);
    const [stepNum, setStepNum] = useState(1);

    function handleClick() {
        
        setStepInput(stepInput => {
            let tmpObj = {};
            tmpObj["step"+(stepNum+1+"")] = "";
            let tmp =  [...stepInput,tmpObj];
             setStepNum(stepNum => stepNum+=1)
             return tmp;
        } );
    }
    console.log(stepInput)

  return (
   <form >
        <label>Recipe Name: </label>
        <input type="text" />
        <br></br>
        <label>image URL: </label>
        <input type="text" />
        <br></br>
    {/* alert how to type ingredients? like separate by "," */}
        <label>Ingredients: </label>
        <input type="text" />
        <br></br>
        <label>Decsriptions: </label>
        <br></br>
        {/* <textarea type="text" /> */}
        
       
        {stepInput.map((step, i) => {
                            return <div key={i}><label>Step {i+1}</label><textarea key={i+1} /> </div>})}
        <button onClick={handleClick} type="button"> + </button>
        <button type="submit">Add a recipe</button>
   </form>
  )
}

export default PostRecipeForm