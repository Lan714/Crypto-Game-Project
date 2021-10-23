import React from 'react'
import AddCoin from '../../components/AddCoin/AddCoin'
import CoinList from '../../components/CoinList/CoinList'
import './CoinSummaryPage.css'

const CoinSummaryPage = () => {
  return (
    <div className='coinsummary border p-2 rounded mt bg-light'>
      <AddCoin />
      <CoinList />
    </div>
  )
}

export default CoinSummaryPage