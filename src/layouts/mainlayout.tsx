import React, {ReactNode} from 'react'
import Footer from './footer'
import Nav from './nav'

type Props = {
    children: ReactNode
}

function Mainlayout({children}: Props) {
  return (
    <div className='layout min-h-screen'>
    <Nav />
    <main>{children}</main>
    <Footer />
  </div>
  )
}

export default Mainlayout