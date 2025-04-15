import { useCounter } from "../hooks/useCounter";

function Counter() {
  const { count, increment, reset } = useCounter();

  return (
    <div className="bg-sky-400">
      <h1>カウント: {count}</h1>
      <button onClick={increment}>増加</button>
      <button onClick={reset}>リセット</button>
    </div>
  );
}

export default Counter;
