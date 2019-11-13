import React from 'react';

function MemberList(props){
    console.log(props.member);
    return(
        <div>
           <h4>{props.member.name}</h4>
            <p>{props.member.email}</p>
             <p>{props.member.role}</p>
              
        </div>

    )
}
export default MemberList;