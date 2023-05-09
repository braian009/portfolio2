import * as React from 'react'

import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from './ProfilePic.module.css';

const ProfilePic = () => {
  return (
    <motion.div
          className={styles.picture}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.4,
              type: "spring",
              stiffness: 400,
              damping: 75,
            },
          }}
        >
          <Image src="/./assets/profilepicture.jpg" alt={""} fill />
        </motion.div>
  )
}

export default ProfilePic;