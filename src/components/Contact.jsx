import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi"; // Import icons

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Contact</p>
        <h3 className={styles.sectionHeadText}>Get In Touch!</h3>

        <div className="mt-6 flex flex-col gap-4">
          <p className="text-white font-medium flex items-center gap-2">
            <FiMail className="text-white" />
            <a
              href="mailto:ashitadiwan2@gmail.com"
              className="text-white"
            >
              ashitadiwan2@gmail.com
            </a>
          </p>
          <p className="text-white font-medium flex items-center gap-2">
            <FiLinkedin className="text-white" />
            <a
              href="https://www.linkedin.com/in/ashita-diwan-3b30b8164/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              LinkedIn
            </a>
          </p>
          <p className="text-white font-medium flex items-center gap-2">
            <FiGithub className="text-white" />
            <a
              href="https://github.com/diwanashita"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              GitHub
            </a>
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        {EarthCanvas ? <EarthCanvas /> : <p>Loading Canvas...</p>}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
