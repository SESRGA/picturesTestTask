import React, {useCallback, useState} from "react";
import {PicturesData, PicturesDataType} from "../data/picturesData";

export interface DataContext {
  data: PicturesDataType[],
  filterData: (searchingString: string) => void
}

export const defaultDataValue: DataContext = {
  data: [] as PicturesDataType[],
  filterData: () => {}
}

export const dataContext = React.createContext<DataContext>(defaultDataValue)

export const useDataContext = (): DataContext =>  {
  const [data, setData] = useState<PicturesDataType[]>(PicturesData)
  const filterData = useCallback((searchingString: string) => {
    setData(PicturesData.filter(item => item.picturesName.toLowerCase().includes(searchingString.toLowerCase())))
  }, [])

  return {
    data,
    filterData
  }
}