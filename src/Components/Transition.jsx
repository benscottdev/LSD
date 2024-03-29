import { motion } from "framer-motion";

const Transition = (OgComponent) => {
  return (props) => (
    <>
      <OgComponent {...props} />
      <motion.div
        className="slideIn"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="slideOut"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </>
  );
};

export default Transition;
