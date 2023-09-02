/* eslint-disable jsx-a11y/alt-text */
import styles from "./banner.module.css";
import Hero from "../../public/hero.png";
import Image from "next/image";
const Home = () => {
  return (
    <div className="">
      
      <div>
        <Image src="https://images.pexels.com/photos/9739345/pexels-photo-9739345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={1200} height={600} alt="banner image" className="w-[600px]"></Image>
      </div>
      {/* way to use external image have include the path of the image on next.config.js */}
      {/* <div>
        <Image src="https://images.pexels.com/photos/16205515/pexels-photo-16205515/free-photo-of-close-up-of-fruit-and-vegetables.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width={15} height={15}></Image>
      </div> */}
    </div>
  );
};
export default Home;
