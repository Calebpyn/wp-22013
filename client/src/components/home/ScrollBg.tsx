//Assets
import { useEffect, useRef } from "react";
import asset3 from "../../assets/home/example.svg";
import Carousel from "./Carousel";

type ScrollBgType = {
  isBottom: Boolean;
};

const ScrollBg: React.FC<ScrollBgType> = ({ isBottom }) => {
  return (
    <div className="h-screen w-full relative z-0 justify-end flex flex-col items-center">
      <div className="absolute w-full h-full flex justify-center items-end z-20 overflow-clip">
        <img className="w-full -mb-[130px]" src={asset3} />
      </div>
      {isBottom ? (
        <div className="absolute w-full h-[80%] bottom-0 z-30 overflow-y-auto">
          <div className="h-full w-full"></div>
          <div className="w-full h-full flex justify-center items-start">
            <div className="w-[90%] h-[80%]">
              <Carousel />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ScrollBg;
