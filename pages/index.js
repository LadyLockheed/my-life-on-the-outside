import { useState, useEffect } from 'react'
import { projectAuth } from '../firebase/firebase'
import Link from 'next/link'
import styled from 'styled-components'
import NavBar from '../components/NavBar'


const Wrapper = styled.div `
padding: 16px;



`
const ButtonAsd = styled.button `

  border: 1px solid red;
  background-color: black;
  color: white;
  padding: 8px;
`

const StyledLabel = styled.label`
  display:block;

`


const Login = () => {



  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const loginFunc = () => {

    console.log('click')

    projectAuth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log('login, userCredential: ', userCredential);
        // Signed in
        let user = userCredential.user;
        console.log('login, user: ', user)
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('error: ', errorMessage)
      });
  }


  return (
    <Wrapper>
{/* 
    <NavBar/> */}
      <StyledLabel>Email</StyledLabel>
      <input
        type='text'
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <StyledLabel>Password</StyledLabel>
      <input
        type='text'
        value={password}
        onChange={event => setPassword(event.target.value)}
      />

      <ButtonAsd onClick={loginFunc}>Logga in</ButtonAsd>
      {/* <button>Lägg till ny user</button> */}

      {/* <Link href="/addnewuser">
          <a>Gå till addnewuser</a>
        </Link>

        <Link href="/allequipment">
          <a>Gå till allequipment</a>
        </Link> */}


    </Wrapper>
  )

}

export default Login