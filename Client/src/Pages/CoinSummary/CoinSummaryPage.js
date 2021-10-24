import React from 'react'
import AddCoin from '../../components/AddCoin/AddCoin'
import CoinList from '../../components/CoinList/CoinList'
import Container from 'react-bootstrap/Container'
import './CoinSummaryPage.css'

const CoinSummaryPage = () => {
  return (
    <Container>
      <div className='coinsummary border p-2 rounded mt bg-light'>
        <AddCoin />
        <CoinList />
      </div>
    </Container>
  )
}

export default CoinSummaryPage