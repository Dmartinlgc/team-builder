
import './App.css';
import {useState, useEffect} from 'react'
import AddMember from './AddMember'

const members =  [
  {
      "name": "Tod ",
      "email":"todsbod@bodmail.com ",
      "role": "wizard"
     },
     {
      "name": "Rod ",
      "email":"rodthebod@bodmail.com ",
      "role": "paladin"
     },
     {
      "name": "Martha ",
      "email":"martha@bodmail.com",
      "role": " tiny dancer"
     },
     {
      "name": "bertha ",
      "email":"bigandbad@bodmail.com",
      "role": "massive dancer "
     },
     {
      "name": "frank ",
      "email":"beans@bodmail.com ",
      "role": "IT support "
     }
];


function App() {
  const [teamMembers, setTeamMembers] =useState([])
  useEffect(()=>{
    setTeamMembers(members)
  }, [])
  
  return (
    <div>
      <h1>Team Builder2021</h1>
      <h2>meet the team </h2>
      <AddMember
      addNew ={setTeamMembers}
      teamMember = {teamMembers}
      />
        {
          teamMembers.map(member =>{
            return( <h2 > {member.name}, {member.email}, {member.role}</h2> )
            
          })
        }
  
    </div>

  )
  
  }
export default App;
