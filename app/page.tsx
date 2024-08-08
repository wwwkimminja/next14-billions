import React from 'react'
import styles from '../styles/home.module.css'
import Person from '../components/person'

async function getBillionaires() {
  try {
    return (await fetch("https://billions-api.nomadcoders.workers.dev/")).json()
  } catch (e) {
    console.log(e)
  }
}


async function Home() {
  const billionaires = await getBillionaires()
  return (
    <div className={styles.container}>
        {billionaires.map(person =>
          <Person key={person.id}
            {...person}
          />)}
    </div>
  )
}

export default Home