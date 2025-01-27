import CourseCard from "../../components/courses/CourseCard";

function CoursesPage() {
  return (
    <div className="h-auto w-full relative z-0 justify-end flex flex-col items-center">
      {/* First Section */}
      <div className="h-screen w-full flex justify-center items-center">
        <span className="text-[#D01F2C] text-[96px] text-center font-bold">
          ¿<i>SABOTEAS</i> TUS <br />
          PROPIOS SUEÑOS?
        </span>
      </div>

      {/* Second Section */}
      <div className="h-screen w-full flex justify-center items-center bg-[#bb000caa]">
        <span className="text-white text-[96px] text-center font-bold">
          ¿TE CUESTA
          <br />
          <i>PRORIZARTE</i> A TI
          <br />
          MISMO?
        </span>
      </div>

      {/* Rotated Triangle Section */}
      <div className="h-screen w-full relative overflow-hidden">
        <div
          className="absolute w-[200%] h-[150%] bg-[#bb000caa] -rotate-[25deg] z-0"
          style={{
            top: "-110%",
            left: "-50%",
          }}
        ></div>

        <div
          className="w-full h-full absolute z-30 flex justify-center items-center"
          style={{ pointerEvents: "none" }}
        >
          <CourseCard title={""} desc={""} link={""} />
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;
