import React, { useRef } from 'react'

function Login() {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        try{
            const response = await fetch('http://localhost:3000/api/auth/login',{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                //credentials: 'include', // step6 add credentials:"include" to set token in cookie automatically
                body:JSON.stringify({username,password})
            });
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            localStorage.setItem('token', result.token); 
            usernameRef.current.value = ''; // Clear username field
            passwordRef.current.value = '';
            
        }catch(err){
            console.log(err);
        }

    }
  return (
   <>
    <form onSubmit={handleSubmit}>
    <div>
        <label>Username</label>
        <input type='text' ref={usernameRef} />
    </div>
    <div>
        <label>Password</label>
        <input type='password' ref={passwordRef} />
    </div>
    <button type='submit'>Login</button>
   </form>
   </>
  )
}

export default Login