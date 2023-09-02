"use client"
import React, { useContext } from "react";
import style from "./DarkModeToggle.css";
import { ThemeContext } from "@/context/ThemeContext";
const DarkModeToggle = () => {
  const {toggle, mode} = useContext(ThemeContext)
  return (
    <div className="w-[60px] h-7 flex items-center justify-between p-2 relative cursor-pointer border border-[#53c28b70] rounded-full" onClick={toggle} >
      <div className="text-sm">🌙</div>
      <div className="text-sm">🔆</div>
      <div
        className="w-5 h-5 bg-[#53c28b] rounded-[50%] absolute"
        style={mode === "light" ? { left: "9.2px" } : { right: "6px" }}
      ></div>
    </div>
  );
};

export default DarkModeToggle;
