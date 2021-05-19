import '../styles/globals.css'
import { useEffect } from 'react'
import { projectAuth } from '../firebase/firebase'
import NavBar from '../components/NavBar'


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    console.log('inloggad? :', projectAuth.currentUser)

  }, [])

  return (

    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
