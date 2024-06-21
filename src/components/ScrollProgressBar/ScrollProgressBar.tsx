import classes from './ScrollProgressBar.module.css';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 20, restDelta: 0.001 });

  return <motion.div className={classes.ScrollProgressBar} style={{ scaleY }} />;
};

export default ScrollProgressBar;
