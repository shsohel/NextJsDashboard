import PropTypes from 'prop-types'
import Header from './Header'

const Layout = ({children})=> {
  return (
    <div className='container'>
        <Header />
        <main>
            {children}
        </main>
    </div>
  )
}

Layout.propTypes = {

}

export default Layout