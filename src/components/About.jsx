import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.5, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <p>
          I am a <a href="https://masterdatascience.ubc.ca/">Master of Data Science</a> student at <a href="https://www.ubc.ca/">University of British Columbia</a> in Vancouver, Canada.
        </p>
        <br />
        <p>
          My interest in data science began during my undergraduate degree in <a href="https://www.bcit.ca/programs/business-information-technology-management-artificial-intelligence-management-option-diploma-full-time-623adipma/">Business Information Technology Management - Artificial Intelligence Management (BITMAN-AI)</a> 
          at <a href="https://www.bcit.ca/">British Columbia Institute of Technology</a>, where I developed a passion for data analysis and wanted to explore it further.
        </p>
        <br />
        <p>
        I am driven by the potential of data to drive positive change. I aim to promote transparency and data-driven decision-making, helping businesses develop informed strategies that 
        benefit both departments and the organization as a whole.
        </p>
        <br />
        <p>
        This website reflects my creativity and commitment to continuous learning in both my professional and personal life.
        </p>
      </motion.p>
      {/* 
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      */}
    </>
  );
};

export default SectionWrapper(About, "about");