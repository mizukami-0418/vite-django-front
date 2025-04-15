import { CounterProvider } from "./context/CounterContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <CounterProvider>
      <AppRoutes />
    </CounterProvider>
  );
}

export default App;
