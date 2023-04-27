import { useState } from "react"
import validation from "../Validation/validation"
import style from "./Form.module.css"


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
        <form className={style.container} onSubmit={handleSubmit} >
              
            <label className={style.labelEmail} htmlFor="email" >Email:</label>
            <input className={style.inputEmail}  name="email" value={userData.email} type="email" placeholder="ingrese su mail" onChange={handleChange} />
            {errors.email && <p>{errors.email}</p>}


            <label className={style.labelPassword} htmlFor="password" >Password:</label>
            <input className={style.inputPassword} name="password" value={userData.password} type="text" placeholder="ingrese su password" onChange={handleChange} />
            {errors.password && <p>{errors.password}</p>}
            
            <div>
                <button className={style.botonSubmit}>Submit</button>
            </div>

        </form>
    )
}
export default Form