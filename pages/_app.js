import '../styles/globals.css'
import { useEffect } from 'react'
import { projectAuth } from '../firebase/firebase'
import NavBar from '../components/NavBar'

import myApplication from './myApplication'


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    console.log('inloggad? :', projectAuth.currentUser)

  }, [])

  return (

    <>

    <myApplication/>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
