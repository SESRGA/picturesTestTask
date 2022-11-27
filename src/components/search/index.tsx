import {useContext, useState} from "react";
import {dataContext} from "../../context/dataContext";
import './search.css'

export const Search = () => {
  const contextData = useContext(dataContext)
  const [searchString, setSearchString] = useState<string>("")
  return (
    <div className="searchBar">
      <input
        className="searchInput"
        placeholder="Поиск по названию картины"
        onChange={(e) => setSearchString(e.target.value)}
      />
      <button className="searchButton" onClick={() => {contextData.filterData(searchString)}}>Найти</button>
    </div>
  )
}