import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const useScale = () => {
  const componentRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 2", "0.9 1"],
  });
  const scaleValues = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  return { scaleValues, componentRef };
};

export default useScale;
