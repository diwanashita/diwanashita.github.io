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
          Currently, I am a student completing my <a href="https://masterdatascience.ubc.ca/">Master of Data Science</a> 
          from <a href="https://www.ubc.ca/">University of British Columbia</a> in Vancouver, Canada.
        </p>
        <br />
        <p>
          My inteteres in data science grew from my undergrad degree in <a href="https://www.bcit.ca/programs/business-information-technology-management-artificial-intelligence-management-option-diploma-full-time-623adipma/">Business Information Technology Management - Artificial Intelligence Management (BITMAN-AI)</a>
          from <a href="https://www.bcit.ca/">British Columbia Institute of Technology</a>. I grew fond of data analysis and wanted to learn and dig deeper into the world of data. 
        </p>
        <br />
        <p>
          I am passionate about using data to drive positive changes. Through data, I desire to build data transparency and data-driven decision making for businesses. 
          I strongly believe that using data to guide business decisions can lead to more informed strategies, ultimately benefiting both the departments and the organization as a whole.
        </p>
        <br />
        <p>
          As evident by this website, I am always looking for new mediums to demonstrate my creativity. 
          I enjoy learning and growing in both my professional and personal life. 
        </p>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");