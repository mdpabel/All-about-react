import Counter from "./Counter";
import { CounterProvider } from "./context/Counter";

const App = () => {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
};

export default App;
