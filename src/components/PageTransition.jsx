import { motion } from "framer-motion";

const PageTransition = ({children}) => {

    return (
      <div>
        {children}
        <motion.div
          className="slide_in absolute top-0 left-0 w-full h-full bg-[#ff3535] origin-right"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.22, 0.1, 0.36, 1] }}
        />
        <motion.div
          className="slide_out absolute top-0 left-0 w-full h-full  bg-[#4923a4] origin-left"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 1, ease: [0.22, 0.1, 0.36, 1] }}
        />
      </div>
    );
};

export default PageTransition;