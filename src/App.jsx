import { useState } from 'react'
import styles from './styles'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>


    </div>
  )
}

export default App
