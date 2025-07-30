import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";
import img from '../../../public/img/me.png'

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src={img}
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Frontend wizard visual storyteller and pixel perfectionist.
        </motion.h1>

        <p className="sub-title">
          I'm Tarek Helal a Frontend Developer focused on building interactive
          web apps with React and JavaScript I care about clean design smooth
          user experience and writing scalable maintainable code.
        </p>

        <div className="all-icons flex">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/tarekhelall?igsh=Ymk4ejNrYTJvemZv "
          >
            <span className="icon icon-instagram"></span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/tarekk190"
          >
            <span className="icon icon-github"></span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/tarek-helal1"
          >
            <span className="icon icon-linkedin"></span>
          </a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
