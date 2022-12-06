// Add Test form
// form sections
//     0 Title - str
//     1 Base Wrds - arr
//     2 Challenge Wrds - arr
//     3 Submit Btn
//     4 Cancel Btn

import { useState } from "react";

//  state for each form section 
const TestForm = () => {
  
  // HW- How to make a reusable component 
  /* send one wrd value to the component for htmlFor, id, name, and label content; as well as the label type.  */
  
  const [title, setTitle] = useState('');
  const [inputBaseWrds, setInputBaseWrds] = useState('');
  const [inputChallengeWrds, setInputChallengeWrds] = useState('');
  
  
  const [baseWrds, setBaseWrds] = useState([]);
  const [challengeWrds, setChallengeWrds] = useState([]);
  
    const addBaseWrds = ()=>{
        if(!inputBaseWrds.length)return;
       console.log('Clicked BaseWrds')
       // get the add base words input value
       // set state of basewrds == basewrds.push in to []
       setBaseWrds([...baseWrds, inputBaseWrds])
       // clear input field
       setInputBaseWrds('')
    }

    const addChallengeWrds = () =>{
         if(!inputChallengeWrds.length)return;
         console.log('Clicked ChallengeWrds')
        // get the add challenge words input value
       // set state of challengewrds == challengewrds.push in to []
       setChallengeWrds([...challengeWrds, inputChallengeWrds])
       // clear input field
       setInputChallengeWrds('')
    }

const handleSubmit = async (e)=>{
    e.preventDefault()
    if(!title.length || !baseWrds.length || !challengeWrds.length) return;
    try {
        const postTestResp = await fetch("http://localhost:3001/addtest", {
            method: "POST"
        })
        if(postTestResp.ok) console.log("Test Posted")

        // redirect on success0

    } catch (err) {
       console.log(err)
    }
    
}

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input required id="title" name="title" type="text" value={title} onChange={(e)=> setTitle(e.target.value)}/>
        
        <label htmlFor="baseWrds">Base Words</label>
        <input id="baseWrds" name="baseWrds" type="text" value={inputBaseWrds} onChange={(e)=> setInputBaseWrds(e.target.value)}/>

        <button type="button" onClick={addBaseWrds}>Add Word </button>
        
        <label htmlFor="challengeWrds">Challenge Words</label>
        <input id="challengeWrds" name="challengeWrds" type="text" value={inputChallengeWrds} onChange={(e)=> setInputChallengeWrds(e.target.value)}/>

        <button type="button" onClick={addChallengeWrds}>Add Word </button>

        <button type="submit">SUBMIT</button>

    </form>
  )
}

export default TestForm