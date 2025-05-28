import React, { useRef } from 'react'

function Register() {
    const userRef = useRef(null);
    const passwordRef = useRef(null);
    const roleRef = useRef(null);

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const username = userRef.current.value;
        const password = passwordRef.current.value;
        const role = roleRef.current.value;

        try{
            const response = await fetch('http://localhost:3000/api/auth/register',{
                method:"POST",
                headers:{
                    'Content-type':'application/json',
                },
                body:JSON.stringify({username,password,role})
            });
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            userRef.current.value = ''; // Clear username field
            passwordRef.current.value = '';
            roleRef.current.value='';
  
        }catch(err){
            console.log(err);
        }
          
    }
  return (
   <>
   <form onSubmit={handleSubmit}>
    <div>
        <label>Username</label>
        <input type='text' ref={userRef} />
    </div>
    <div>
        <label>Password</label>
        <input type='password' ref={passwordRef} />
    </div>
    <div>
        <label>Role</label>
        <input type='text' ref={roleRef} />
    </div>
    <button type='submit'>Submit</button>
   </form>
   </>
  )
}

export default Register