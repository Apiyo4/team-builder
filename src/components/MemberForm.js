import React, {useState} from 'react';

function MemberForm(props){
    console.log(props);
    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    })
    const handleChange = e =>{
        
        setMember({...member, 
            [e.target.name]: e.target.value
        })
    }
    
    return(
        <div>
            <h2>Add a member</h2>
            <form>
                <label> Name:
                <input type='text' placeholder='Enter your Name' name='name' id='name' onChange={handleChange} />
                </label>
                <br />
                <label> Email:
                <input type='text' placeholder='Enter your Email' name='email' id='email' onChange={handleChange} />
                </label>
                <br />
                <label> Role:
                <input type='text' placeholder='Enter your Role' name='role' id='role' onChange={handleChange} />
                </label>
                <br />
                <button type='submit'>Add Member</button>
            </form>
        </div>
    )
}
export default MemberForm;