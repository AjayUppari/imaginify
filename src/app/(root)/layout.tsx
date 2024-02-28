import React from 'react'
import SideBar from '@/components/shared/Sidebar'

const Layout = ({children} : { children : React.ReactNode}) => {
  return (
    <main className='auth'>

      <SideBar />
      {/* <MobileNav /> */}


        <div className='root-container'>
            <div className='wrapper'>
                {children}
            </div>
        </div>
    </main>
  )
}

export default Layout