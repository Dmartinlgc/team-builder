import react, { useState, useEffect } from 'react'
export default function AddMember(props){
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [role, setRole] = useState('')

const handleNameChange = evt =>{ 
    setName(evt.target.value)
}
const handleEmailChange = evt =>{ 
  setEmail(evt.target.value)
}

const handleRoleChange = evt =>{ 
    setRole(evt.target.value)
}

useEffect(() => {
console.log(name, email, role)
}, [name, email, role])

const memberSubmit = () =>{
const newMember = {
    name: name.trim(),
    email: email.trim(),
    role: role
}
props.addNew([...props.teamMember, newMember])
}
    return (
<div>
 <label>Name
    <input
    type = 'text'
    name = 'name'
    onChange = {handleNameChange}
    value= {name}
    />
 </label>

 <label> email
    <input
    type = 'email'
    name = 'email'
    onChange = {handleEmailChange}
    value= {email}
    />
 </label>
 <label>Role
    <select values = {role} onChange = {handleRoleChange}>
        <option value = ''>--Select role--</option>
        <option value='Wizard'>Wizard</option>
        <option value = 'Paladin'>Paladin</option>
        <option value = "Tiny dancer">Tiny Dancer</option>
        <option value ='Massive dancer'>Massive Dancer</option>
        <option value ='I.T support'>IT support</option>
    </select>
    </label>
    <button onClick = {memberSubmit} >Submit</button>
</div>
 )
}