// Assets
import ScrollBg from "../../components/home/ScrollBg";
import mainLogo from "../../assets/common/logo_lbp.svg";
import mainLogoBlack from "../../assets/common/logo_lbp_black.svg";

// Components
import NavBar from "../../components/common/NavBar";

// Hooks
import { useContext, useEffect, useRef, useState } from "react";
import { pageContext } from "../../App";
import CoursesPage from "../courses/CoursesPage";

//types

function HomePage() {
  const usePage = () => {
    const context = useContext(pageContext);
    if (!context) {
      throw new Error("useCounter must be used within a CounterProvider");
    }
    return context;
  };

  const { page, setPage } = usePage();

  // Window ref
  const mainWindow = useRef<null | HTMLDivElement>(null);

  // Scroll monitoring state
  const [_, setScrollY] = useState(0);

  const [isBottom, setIsBottom] = useState<Boolean>(false);

  const handleScroll = () => {
    if (mainWindow.current) {
      setScrollY(mainWindow.current.scrollTop);

      if (mainWindow.current.scrollTop - window.innerHeight == 0) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }

      if (mainWindow.current.scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
  };

  useEffect(() => {
    const scrollableDiv = mainWindow.current;

    if (scrollableDiv) {
      scrollableDiv.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollableDiv) {
        scrollableDiv.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // Animate after the state change
  const [isScrolled, setIsScrolled] = useState<Boolean>(false);

  // Scroll to top
  useEffect(() => {
    if (mainWindow.current) {
      mainWindow.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [mainWindow.current]);

  return (
    <div className="relative w-full h-full overflow-y-auto" ref={mainWindow}>
      <div
        className={
          page == 1
            ? `fixed tr-2 ${
                isScrolled
                  ? "top-[27px] left-[95px]"
                  : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              }`
            : "fixed tr-2 top-[27px] left-[95px] z-[99]"
        }
        style={{
          pointerEvents: "none",
        }}
      >
        <img
          src={page == 1 ? mainLogo : mainLogoBlack}
          alt="Logo"
          className={
            page == 1
              ? ` tr ${isScrolled ? "h-[100px]" : "h-[500px]"}`
              : "tr h-[100px]"
          }
        />
      </div>

      {page == 1 ? <div className="h-screen w-full"></div> : null}

      <NavBar isScrolled={page == 1 ? isScrolled : true} />
      {page == 1 ? <ScrollBg isBottom={isBottom} /> : <CoursesPage />}
    </div>
  );
}

export default HomePage;
