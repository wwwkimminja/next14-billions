"use client"
import React from 'react'
import styles from '../styles/person.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


type Billionaire = {
  id: string,
  name: string,
  squareImage: string,
  netWorth: number,
  industries: string[]
}
function Person({id,name,squareImage,netWorth,industries}:Billionaire) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/person/${id}`);
  };
  return (
    <li className={styles.wrapper}>
     <img className={styles.image} src={squareImage} onClick={onClick} alt={`${name}'s image`}/>
      <Link  href={`/person/${id}`}>
      <div className={styles.name}>{name}</div>
      <span>{Math.round(netWorth/1000)} Billion / </span>
      <span>{industries.join()}</span>
      </Link>
    </li>
  )
}

export default Person