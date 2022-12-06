import React, { useState } from 'react'

export const Form = () => {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName]=useState()
  const onSubmit= (e)=>{ e.preventDefault()
    console.log("It Worked")    
}
    return (
    <form onSubmit={onSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" required name='firstName' value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name='lastName' value={lastName} onChange={(e)=> setLastName(e.target.value)}/>

        <button type='submit'>Submit</button>
    </form>
  )
}
