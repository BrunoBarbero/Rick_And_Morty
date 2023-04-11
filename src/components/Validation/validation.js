const validation = (userData)=>{
   
    const errors = {};

    if(!/\S+@\S+\.\S+/.test(userData.email)){
         errors.email = 'Email invalido'
    }
    else errors.email = ''
   
    if(!userData.email){
        errors.email = 'Este campo no puede estar vacio'
    }

    if(userData.email.length > 35){    
        errors.email = 'Numero maximo de caracteres superado'           
    }
    

    if(userData.password.length < 6 && userData.password.length > 10 ){
        errors.password = 'La contraseña debe tener entre 6 y 10 caracteres'
    }
    if(!userData.password.match(/\d/)){
        errors.password = 'La contraseña debe contener al menos un numero'
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'La contraseña debe contener entre 6 y 10 caracteres'
    }

    return errors;
}

export default validation