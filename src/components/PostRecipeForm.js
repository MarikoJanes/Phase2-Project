import React, {useState} from 'react'
import { useHistory } from "react-router-dom";

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
        setStepInput(stepList,setFormData(fd => {return {...fd, ["instructions"]: stepInput}}));
    }


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
        <label>Recipe Name: </label>
        <input  onChange={handleChange} type="text" name="name" value={formData.name} />
        <br></br>
        <label>image URL: </label>
        <input onChange={handleChange} type="text" name="image" value={formData.image} />
        <br></br>
    {/* alert how to type ingredients? like separate by "," */}
        
        <p>separate each indredient by ", " ex) 2eggs, salt</p>
        <label>Ingredients: </label>
        <input onChange={handleChange} type="text" name="ingredients" value={formData.ingredients} />
        <br></br>
        <label>Instructions: </label>
        <br></br>
    
        {stepInput.map((Step, i) => {
                            return <div key={i+1}><label >Step {i+1}</label><textarea onChange={(e)=> handleStep(e,i)} type="text" name={"Step"+(i+1)} value={Step[stepNum+1+""]}  /> </div>})}
        <button onClick={handleClick} type="button"> + add a step </button>
        <input type="submit" value="add a recipe" />
   </form>
  )
}

export default PostRecipeForm

