//Assets
import { pageContext } from "../../App";
import mainLogo from "../../assets/common/logo_lbp.svg";

//Hooks
import { useContext, useState } from "react";

//Context

//Component Type
type NavBarType = {
  isScrolled: Boolean;
};

const NavBar: React.FC<NavBarType> = ({ isScrolled }) => {
  const usePage = () => {
    const context = useContext(pageContext);
    if (!context) {
      throw new Error("useCounter must be used within a CounterProvider");
    }
    return context;
  };

  const { page, setPage } = usePage();

  const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <div className="h-[150px] p-10 flex lg:justify-start justify-between w-full items-center gap-14 pl-[96px] fixed top-0 z-[999]">
      <span className="flex justify-center items-center">
        <img src={mainLogo} className="h-[100px] opacity-0" />
      </span>

      <span
        className={`lg:hidden flex flex-col gap-3 select-none mr-12 hover:scale-105 tr cursor-pointer ${
          page == 1 ? "text-white" : "text-black"
        } text-[20px] tr ${isScrolled ? "" : "opacity-0"}`}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <span
          className={`h-[3px] w-[50px] bg-${page == 1 ? "white" : "black"}`}
        ></span>
        <span
          className={`h-[3px] w-[50px] bg-${page == 1 ? "white" : "black"}`}
        ></span>
        <span
          className={`h-[3px] w-[50px] bg-${page == 1 ? "white" : "black"}`}
        ></span>
      </span>

      <span
        className={`gap-[60px] hidden  lg:flex select-none ${
          page == 1 ? "text-white" : "text-black"
        } text-[20px] tr ${isScrolled ? "" : "opacity-0"}`}
      >
        <button
          className={`${
            page == 1 ? "bg-white text-black" : "hover:scale-110"
          } px-4 py-2 rounded-full tr cursor-pointer`}
          onClick={() => {
            setPage(1);
          }}
        >
          INICIO
        </button>
        <button
          className={`${
            page == 2 ? "bg-black text-white" : "hover:scale-110"
          } px-4 py-2 rounded-full tr cursor-pointer`}
          onClick={() => {
            setPage(2);
          }}
        >
          CURSOS
        </button>
        <button
          className={`${
            page == 3 ? "bg-black text-white" : "hover:scale-110"
          } px-4 py-2 rounded-full tr cursor-pointer`}
          onClick={() => {
            setPage(3);
          }}
        >
          PODCAST
        </button>
        <button
          className={`${
            page == 4 ? "bg-black text-white" : "hover:scale-110"
          } px-4 py-2 rounded-full tr cursor-pointer`}
          onClick={() => {
            setPage(4);
          }}
        >
          TIENDA
        </button>
        <button
          className={`${
            page == 5 ? "bg-black text-white" : "hover:scale-110"
          } px-4 py-2 rounded-full tr cursor-pointer`}
          onClick={() => {
            setPage(5);
          }}
        >
          COMUNIDAD
        </button>
      </span>

      <div
        className={`fixed w-[50%] h-full bg-[#D9D9D9] top-0 tr right-0 lg:hidden flex flex-col font-bold gap-[30px] ${
          isOpen ? "" : "translate-x-[100%]"
        }`}
      >
        <span className="h-[150px] w-full flex justify-start items-center pl-[50px]">
          <span
            className="flex flex-col gap-3 hover:scale-110 tr cursor-pointer"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <span className="h-[3px] w-[50px] bg-black"></span>
            <span className="h-[3px] w-[50px] bg-black"></span>
            <span className="h-[3px] w-[50px] bg-black"></span>
          </span>
        </span>
        <button
          className={`${
            page == 1 ? "scale-125" : "hover:scale-110"
          } px-[50px] py-2 tr cursor-pointer self-start`}
          onClick={() => {
            setPage(1);
            setIsOpen(false);
          }}
        >
          INICIO
        </button>
        <button
          className={`${
            page == 2 ? "scale-125" : "hover:scale-110"
          } px-[50px] py-2 tr cursor-pointer self-start`}
          onClick={() => {
            setPage(2);
            setIsOpen(false);
          }}
        >
          CURSOS
        </button>
        <button
          className={`${
            page == 3 ? "scale-125" : "hover:scale-110"
          } px-[50px] py-2 tr cursor-pointer self-start`}
          onClick={() => {
            setPage(3);
            setIsOpen(false);
          }}
        >
          PODCAST
        </button>
        <button
          className={`${
            page == 4 ? "scale-125" : "hover:scale-110"
          } px-[50px] py-2 tr cursor-pointer self-start`}
          onClick={() => {
            setPage(4);
            setIsOpen(false);
          }}
        >
          TIENDA
        </button>
        <button
          className={`${
            page == 5 ? "scale-125" : "hover:scale-110"
          } px-[50px] py-2 tr cursor-pointer self-start`}
          onClick={() => {
            setPage(5);
            setIsOpen(false);
          }}
        >
          COMUNIDAD
        </button>
      </div>
    </div>
  );
};

export default NavBar;
