import Image from "next/image";
import React from "react";
import styles from "./footer.module.css"
const Footer = () => {
  return (
    <div className="h-[50px] flex items-center justify-between">
      <div>
        <p> &copy; All Rights reserved by Shakil</p>
      </div>
      <div>
        <div className="flex gap-3 items-center">
          <Image src="/1.png" width={15} height={15} className="opacity-[0.6] cursor-pointer" alt="Shakil image"></Image>
          <Image src="/2.png" width={15} height={15} className="opacity-[0.6] cursor-pointer" alt="Shakil image"></Image>
          <Image src="/3.png" width={15} height={15} className="opacity-[0.6] cursor-pointer" alt="Shakil image"></Image>
          <Image src="/4.png" width={15} height={15} className="opacity-[0.6] cursor-pointer" alt="Shakil image"></Image>
        </div>
        {/* another way to do styling */}
        {/* <div className={styles.imgContainer}>
          <Image src="/1.png" fill={true} alt="Shakil image"></Image>
          <Image src="/2.png" fill={true} alt="Shakil image"></Image>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
