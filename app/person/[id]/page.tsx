import React from 'react'
import styles from '../../../styles/person-detail.module.css'

async function getDetail(id: string) {
  try {
    return (await fetch(`https://billions-api.nomadcoders.workers.dev/person/${id}`)).json()
  } catch (e) { }
}
interface IFinancialAsset {
  exchange: string,
  ticker: string,
  companyName: string,
  numberOfShares: number
  sharePrice: number,
  currencyCode: string,
  exchangeRate: number,
  interactive: boolean,
  currentPrice?: number
}

interface IPersonInfo {
  id: string,
  state: string,
  city: string,
  name: string,
  country: string,
  position: number,
  industries: string[],
  financialAssets: IFinancialAsset[],
  thumbnail: string,
  squareImage: string,
  bio: string[],
  about: string[],
  netWorth: number
}
async function PersonDetail({ params }) {
  const { id } = params

  const {name,squareImage,netWorth,country,industries,about,financialAssets}: IPersonInfo = await getDetail(id)

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <img src={squareImage} alt={`${name}'s image`} />
        <div className={styles.detail}>
          <h1 className={styles.title}>{name}</h1>
          <div>Networth: {netWorth}</div>
          <div>Country: {country}</div>
          <div>Industry: {industries}</div>
          <p>{about}</p>
        </div>
      </div>
      <div className={styles.assets}>
        <h3 className={styles.title}>Financial Assets</h3>
        <ul className={styles.assetWrapper}>
          {financialAssets.map((asset,i)=>
               <li key ={`${i}-${asset.companyName}`}className={styles.asset}>
               <div>Ticker : {asset.ticker}</div>
               <div>Shares : {asset.numberOfShares.toLocaleString()}</div>
               {asset.currentPrice&&<div>Current Price : ${asset.currentPrice}</div>}
             </li>
          )}
        </ul>

      </div>

    </div>
  )
}

export default PersonDetail