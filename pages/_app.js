import '../styles/globals.scss'
import {useEffect} from 'react'
import '../styles/css/style.css'

function MyApp( { Component, pageProps } ) {

  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
}, [])
  return <Component {...pageProps} />
}
 
export default MyApp
 