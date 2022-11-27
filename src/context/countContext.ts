import React, {useCallback, useState} from "react";

export interface CountContext {
  count: number,
  increment: () => void,
  decrement: () => void
}

export const defaultCountValue: CountContext = {
  count: 0,
  increment: () => {},
  decrement: () => {}
}

export const countContext = React.createContext<CountContext>(defaultCountValue)

export const useCountContext = (): CountContext => {
  const [count, setCount] = useState(+(localStorage.getItem('countInBasket') || 0))
  const increment = useCallback(() => setCount(prev => prev + 1), [])
  const decrement = useCallback(() => setCount(prev => prev - 1), [])
  return {
    count,
    increment,
    decrement
  }
}
