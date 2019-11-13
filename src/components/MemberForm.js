import React from 'react';

function MemberForm(props){
    return(
        <div>
            <h2>Add a member</h2>
            <form>
                <label> Name:
                <input type='text' placeholder='Enter your Name' name='name' id='name' />
                </label>
                <br />
                <label> Email:
                <input type='text' placeholder='Enter your Email' name='email' id='email' />
                </label>
                <br />
                <label> Role:
                <input type='text' placeholder='role' name='role' id='role' />
                </label>
                <br />
                <button type='submit'>Add Member</button>
            </form>
        </div>
    )
}
export default MemberForm;