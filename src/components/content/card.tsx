import {PicturesDataType} from "../../data/picturesData";
import "./card.css"
import {Spinner} from "../spinner";
import {useContext, useState} from "react";
import {countContext} from "../../context/countContext";
import {CheckMark} from "../../svg/checkMark";
import {MillionPriceParcer} from "../../helpers/priceParcer";

const IN_BASKET = 'in basket'
const FOR_SALE = 'for sale'
const COUNT_IN_BASKET = 'countInBasket'

export const Card = ({cardData}: {cardData: PicturesDataType}) => {
  const [isLoading, setLoading] = useState(false)
  const contextCount = useContext(countContext)
  const [status, setStatus] = useState(localStorage.getItem(cardData.id.toString()))
  const buy = () => {
    setLoading(true);
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(json => console.log(json))
      contextCount.increment()
      localStorage.setItem(cardData.id.toString(), IN_BASKET)
      localStorage.setItem(COUNT_IN_BASKET, (contextCount.count + 1).toString())
      setStatus(IN_BASKET)
      setLoading(false);
    }, 700)
  }
  const cancelBuying = () => {
    setLoading(true);
    setTimeout(() => {
      contextCount.decrement()
      localStorage.setItem(cardData.id.toString(), FOR_SALE)
      localStorage.setItem(COUNT_IN_BASKET, (contextCount.count - 1).toString())
      setStatus(FOR_SALE)
      setLoading(false);
    }, 700)
  }
  return (
    <div className={cardData.sold ? "card soldOut" : "card"}>
      <img src={cardData.img} className="image"/>
      <div className="textBlock">
        <h2 className="naming">{"«" + cardData.picturesName + "»"}</h2>
        <h2 className="naming">{cardData.painter}</h2>
      </div>
      {
        cardData.sold ?
          <p className="textBlock soldText">Продана на аукционе</p> :
          <div className="priceBlock">
            <div className="priceSection">
              {cardData.previousPrice ? <p className="previousPriceText">{MillionPriceParcer(cardData.previousPrice)}</p> : null}
              <h3 className="currentPriceText">{MillionPriceParcer(cardData.currentPrice!)}</h3>
            </div>
            <div className="buttonSection">
              {
                isLoading ? <div className="buyButton"><Spinner/></div>
                  : status === IN_BASKET
                  ? <button className="buyButton cancelButtonColor" onClick={cancelBuying}><CheckMark /> В корзине</button>
                  : <button className="buyButton buyButtonColor" onClick={buy}>Купить</button>
              }
            </div>
          </div>
      }
    </div>
  )
}