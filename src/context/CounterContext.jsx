import { createContext, useState, useContext } from "react";

const CounterContext = createContext();

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounterContext() {
  return useContext(CounterContext);
}
