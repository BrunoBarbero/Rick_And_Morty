import { useState } from "react"
import validation from "../Validation/validation"


const Form = ({login})=> {
  
  const [userData, setUserData] = useState ({
    email:'',
    password:''
  })
    
  const [errors, setErrors] = useState({})


  const handleChange = (event)=>{
      setUserData({
      ...userData,
       [event.target.name] : event.target.value
        })
        
        setErrors(validation({
            ...userData,
            [event.target.name] : event.target.value
        }))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }

    return(
        <form onSubmit={handleSubmit} >
            <label htmlFor="email" >Email:</label>
            <input name="email" value={userData.email} type="email" placeholder="ingrese su mail" onChange={handleChange} />
            {errors.email && <p>{errors.email}</p>}

            <hr />
           
            <label htmlFor="password" >Password:</label>
            <input name="password" value={userData.password} type="text" placeholder="ingrese su password" onChange={handleChange} />
            {errors.password && <p>{errors.password}</p>}
            
            <hr />
            <button>Submit</button>
        </form>
    )
}
export default Form