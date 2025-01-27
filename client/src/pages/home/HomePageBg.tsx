// Assets
import { useContext } from "react";
import maintexture from "../../assets/home/texture_1.png";
import maintexture2 from "../../assets/home/texture_2.png";

//Components
import HomePage from "./HomePage";
import { pageContext } from "../../App";

function HomePageBg() {
  const usePage = () => {
    const context = useContext(pageContext);
    if (!context) {
      throw new Error("useCounter must be used within a CounterProvider");
    }
    return context;
  };

  const { page, setPage } = usePage();

  return (
    <div
      className={`w-full max-w-[1820px] h-full relative ${
        page == 1 ? "bg-black" : "bg-white"
      }`}
    >
      <div
        style={{
          backgroundImage: `url(${page == 1 ? maintexture : maintexture2})`,
        }}
        className={`absolute w-full h-full bg-center bg-cover inset-0 ${
          page == 1 ? "opacity-25" : "opacity-80"
        }`}
      ></div>

      <div className="relative w-full h-full z-10">
        <HomePage />
      </div>
    </div>
  );
}

export default HomePageBg;
