import { Card } from "./card"
import "./content.css"
import {useContext} from "react";
import {dataContext} from "../../context/dataContext";

export const Content = () => {
  const contextData = useContext(dataContext)
  return (
    <div className="content">
      <h1 className="pageHeader">Картины эпохи Возрождения</h1>
      <div className="cardContainer">
        {contextData.data.map(item => {
          return (
            <div key={item.id} className="cardData">
              <Card cardData={item}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}