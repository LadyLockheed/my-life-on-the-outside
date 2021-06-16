import { projectAuth } from '../firebase/firebase'
import {useState} from 'react'
import styled from 'styled-components'


const StyledButton = styled.button`
    padding: 8px;
    background-color: lightblue;
`;


const addnewuser = () => {

    // const newUser = 'Janne';
    // const newPassword = 'Långben2'
    // const newEmail = 'foo2@hotmail.com'

    const [newEmail, setNewEmail]=useState('')
    const [newPassword, setNewPassword]=useState('')

    console.log(newEmail)
    console.log(newPassword)



    const addnewuserFunc = () => {
        console.log('click')

        projectAuth.createUserWithEmailAndPassword(newEmail, newPassword)
            .then((userCredential) => {
                console.log('addnewuser, userCredential: ', userCredential)
                // Signed in 
                var user = userCredential.user;
                let userId = userCredential.user.uid
                console.log('addnewuser, user: ', user)
                console.log('addnewuser, userid: ', userId)
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log('error: ', errorMessage)
                // ..
            });
    }


    return (

        <div>
            <label>Email</label>
            <input
                type='text'
            value={newEmail}
            onChange={event => setNewEmail(event.target.value)}
            />
            <label>Password (minst 6 tecken)</label>
            <input
                type='text'
            value={newPassword}
            onChange={event => setNewPassword(event.target.value)}
            />
            <button onClick={addnewuserFunc}>Lägg till ny användare</button>

            {/* <StyledButton>  <Link href="/">  
          <a>Gå till login</a>
      </Link>  </StyledButton> */}

        </div>
    )
}

export default addnewuser