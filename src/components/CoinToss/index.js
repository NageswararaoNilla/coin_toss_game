import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {isHead: true, heads: 0, tails: 0}

  getImage = isHead => {
    const coinResult = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return coinResult
  }

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    if (tossResult === 0) {
      this.setState(prevState => ({
        isHead: true,
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        isHead: false,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {isHead, heads, tails} = this.state
    const imgUrl = this.getImage(isHead)
    return (
      <div className="app-container">
        <div className="coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={imgUrl} className="coin-img" alt="toss result" />
          <button type="button" onClick={this.tossCoin} className="btn">
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count total-count">Total: {heads + tails}</p>
            <p className="count heads-count">Heads: {heads}</p>
            <p className="count tails-count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
