import { useState } from "react";

function Calculate() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = async () => {
    setError(null);
    setResult(null);

    try {
      const response = await fetch("http://localhost:8000/api/calculator/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          num1,
          num2,
          operator,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setResult(data.result);
      } else {
        setError(data.error || "計算に失敗しました");
      }
    } catch (err) {
      setError("ネットワークエラーが発生しました");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-light text-gray-800">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-primary mb-6 text-center">
          計算機アプリ
        </h1>

        <div className="flex flex-col gap-4">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="数値1"
            className="border border-primary rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="数値2"
            className="border border-primary rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <select
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
            className="border border-primary rounded px-4 py-2"
          >
            <option value="+">+</option>
            <option value="-">−</option>
            <option value="*">×</option>
            <option value="/">÷</option>
          </select>

          <button
            onClick={handleCalculate}
            className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition"
          >
            計算する
          </button>
        </div>

        {result !== null && (
          <p className="mt-4 text-green-600 font-semibold text-center">
            結果: {result}
          </p>
        )}
        {error && (
          <p className="mt-4 text-red-600 text-center">エラー: {error}</p>
        )}
      </div>
    </div>
  );
}

export default Calculate;
