/* ==========================================
   HeroSection Component

   Displays the initial surprise with animated
   banner and cake GIF.
   ========================================== */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./HeroSection.module.css";
import { config } from "../config";
import bannerImg from "../assets/banner.gif";
import cakeImg from "../assets/cake.gif";

interface HeroSectionProps {
  /** Callback when user clicks "Next Surprise" button */
  onNextSection: () => void;
}

export default function HeroSection({ onNextSection }: HeroSectionProps) {
  // State to show the button after animations complete (5 seconds)
  const [showButton, setShowButton] = useState(false);

  // Show button after 5 seconds after that page is opened
  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Banner Image */}
      <motion.img
        src={bannerImg}
        alt="Banner"
        className={styles.banner}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
      />

      {/* Birthday Cake GIF */}
      <motion.img
        src={cakeImg}
        alt="Birthday Cake"
        className={styles.cakeGif}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      />

      {/* Next Surprise Button */}
      <AnimatePresence>
        {showButton && (
          <motion.button
            className={`btn-primary ${styles.nextButton}`}
            onClick={onNextSection}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              marginTop: "4rem",
            }}
          >
            {config.buttons.hero}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className={styles.decorativeCircle1} />
      <div className={styles.decorativeCircle2} />
    </section>
  );
}
