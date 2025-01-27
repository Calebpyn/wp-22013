import React from "react";

type CourseCardType = {
  title: string;
  desc: string;
  link: string;
};

const CourseCard: React.FC<CourseCardType> = () => {
  return <div className="w-[90%] h-[60%] bg-[#D9D9D9]"></div>;
};

export default CourseCard;
