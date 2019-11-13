import React, {useState} from 'react';
import MemberForm from './MemberForm';
import MemberList from './MemberList';

function MemberContainer(){
    const [members, setMembers ] = useState([
        {
            name: 'Apiyo',
            email: 'a@gmail.com',
            role: 'Frontend developer'

        },
        {
            name: 'Solomon',
            email: 's@gmail.com',
            role: 'Backend developer'

        },
        {
            name: 'Wanjiku',
            email: 'w@gmail.com',
            role: 'Backend developer'

        },
        {
            name: 'Maina',
            email: 'm@gmail.com',
            role: 'Designer developer'

        }

    ])

    function addMember(member){
        const newMember = {
            name: member.name,
            email: member.email,
            role: member.role
        }
        setMembers([...members, newMember])
    }
    return(
        <div>
            <h1>Members</h1>
       
            <MemberForm addMember = {addMember} /> 
            <h2>List of Members</h2>  
           { members.map((member, index)=>{
               return(
                   <div>
                       
                        <MemberList member={member} key={index}/>
                   </div>
               )
            })
            }
        </div>
    )
}
export default MemberContainer;