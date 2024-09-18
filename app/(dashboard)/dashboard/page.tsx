import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName : 'Bugra'};

  return (
    <section className='home'> 
      <div className='home-content'>
          <header className='home-header'>
            <HeaderBox
            title = "Welcome"
            type="greeting"
            user={loggedIn?.firstName || 'Guest'}
            subtext= "Access and manage your account and transactions efficiently"
            />
          </header>
      
      </div>

    </section>

  )
}

export default Home