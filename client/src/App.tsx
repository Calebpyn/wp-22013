// Assets
import { createContext, useState } from "react";
import HomePageBg from "./pages/home/HomePageBg";

//Context type
type CounterContextType = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export const pageContext = createContext<CounterContextType | undefined>(
  undefined
);

function App() {
  const [page, setPage] = useState<number>(1);

  return (
    <pageContext.Provider value={{ page, setPage }}>
      <div className="w-full h-screen bg-black flex justify-center items-start">
        <HomePageBg />
      </div>
    </pageContext.Provider>
  );
}

export default App;
