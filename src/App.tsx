import Header from "./components/Header";
import Translator from "./components/Translator";

const App = () => {
  return (
    <div className="bg-white text-black dark:text-gray-100 dark:bg-gray-950 min-h-screen">
      <Header />
      <Translator />
    </div>
  );
};

export default App;
