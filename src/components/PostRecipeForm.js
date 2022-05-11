import React, {useState} from 'react'
import { useHistory } from "react-router-dom";


    const inputStyles = {
        padding: "10px",
        border: "3px solid #f8c146",
        boxShadow: "0px 0px 0px",
        borderColor: "#FFB72B",
        outline: "10px",
        borderRadius: "15px",
        width: "35%",
        margin: "20px 0",
    };

 

function PostRecipeForm( {refreshData}) {

    const history = useHistory();
    const [stepInput, setStepInput] = useState([{Step1: ""}]);
    const [stepNum, setStepNum] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        image:"",
        ingredients:"",
        instructions: stepInput
    });



    function handleChange(e) {
        const {name, value} = e.target; 
        setFormData({...formData, [name]: value});
    }


    console.log(stepInput)
    function handleStep(e, index) {
       const  {name, value} = e.target;
       const stepList =  [...stepInput];
            stepList[index][name] = value;
            console.log(stepList)
        setStepInput(stepList);
    }

    /* ,setFormData(fd => {return {...fd, ["instructions"]: stepInput}}) */

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
        fetch("http://localhost:4000/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: formData.name,
                image: formData.image,
                ingredients: formData.ingredients.split(","),
                instructions: stepInput
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            refreshData(data)
            history.push(`/recipes/${data.id}`);
        })
        // setFormData({
        //     name: "",
        //     image:"",
        //     ingredients:"",
        //     description: stepInput
        // }, setStepInput([{step1: ""}]));
    }

    function handleClick() {
        let tmpObj = {};
        tmpObj["Step"+(stepNum+1+"")] = "";
        setStepNum(stepNum => stepNum+=1)
        setStepInput(stepInput => [...stepInput, tmpObj])
    }
    

  return (
   <form onSubmit={handleSubmit}>
        <label className='otherLabels'>Recipe Name: </label>
        <input  style={inputStyles} onChange={handleChange} type="text" name="name" value={formData.name} />
        <br></br>
        <label className='otherLabels'>Image URL: </label>
        <input style={inputStyles} onChange={handleChange} type="text" name="image" value={formData.image} />
        <br></br>
        <label className='otherLabels'>Ingredients: </label>
        <input style={inputStyles} onChange={handleChange} type="text" name="ingredients" value={formData.ingredients} />
        <p className='message'>separate each indredient by ", " ex) 2eggs, salt</p>
        
        <br></br>
        <label>Instructions: </label>
        
        <div>
            {stepInput.map((Step, i) => {
                                return <div key={i+1}><label className='stepLabel'>Step {i+1}: </label><textarea style={inputStyles} onChange={(e)=> handleStep(e,i)} type="text" name={"Step"+(i+1)} value={Step[stepNum+1+""]}  /> </div>})}
            <button className="formButton addButton" onClick={handleClick} type="button"> + </button>
        </div>
       
        
        <input className="formButton submitButton"  type="submit" value="add a recipe" />
    
        
   </form>
  )
}

export default PostRecipeForm

