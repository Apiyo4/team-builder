import React, {useState} from 'react';
import MemberForm from './MemberForm'

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
    }
    return(
        <div>
            <h1>Members</h1>
       
            <MemberForm addMember = {addMember} />   
        </div>
    )
}
export default MemberContainer;