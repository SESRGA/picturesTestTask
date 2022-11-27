import "./basket.css"
import {useContext} from "react";
import {countContext} from "../../context/countContext";

export const BasketCount = () => {
  const contextCount = useContext(countContext)

  return (
    <>
      {contextCount.count !== 0 ?
        <div className="basketCount">
          {contextCount.count}
        </div>
        : null
      }
    </>
  )
}