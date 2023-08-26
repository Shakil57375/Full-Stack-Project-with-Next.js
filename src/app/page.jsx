/* eslint-disable jsx-a11y/alt-text */
import styles from "./banner.module.css";
import Hero from "../../public/hero.png";
import Image from "next/image";
const Home = () => {
  return (
    <div className="flex  items-center gap-24">
      <div className={styles.items}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className="text-lg font-medium">
          Turning your Idea into Reality. We bring together the teams form the
          global teach industry.
        </p>
        <button className="p-5 cursor-pointer bg-[#53c29b] border-none rounded-xl text-black">See Our Works</button>
      </div>
      <div>
        <Image src={Hero} alt="banner image" className={styles.img}></Image>
      </div>
      {/* way to use external image have include the path of the image on next.config.js */}
      {/* <div>
        <Image src="https://images.pexels.com/photos/16205515/pexels-photo-16205515/free-photo-of-close-up-of-fruit-and-vegetables.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width={15} height={15}></Image>
      </div> */}
    </div>
  );
};
export default Home;
