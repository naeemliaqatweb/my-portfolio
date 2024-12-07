import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            
            1000,
            "I'm a Software Engineer!",
            1000,
            "I'm a PHP | Laravel | Yii | WordPress | Rest API | GIT Developer!",
            1000,
            "I'm a Bootstrap | MUI | Tailwind CSS | jQuery | React Js | Next Js Developer!",
           
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          // omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      <img src="/man.png" alt="" />
    </motion.div>
  );
};

export default Speech;