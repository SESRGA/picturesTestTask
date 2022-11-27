import {BasketSvg} from "./basketSvg";
import {BasketCount} from "./basketCount";
import "./basket.css"

export const Basket = () => {
  return (
    <div className="basket">
      <BasketCount />
      <BasketSvg />
    </div>
  )
}