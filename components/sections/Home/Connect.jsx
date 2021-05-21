import React from 'react';
import styles from '../../../styles/modules/Connect.module.scss';
import Lottie from 'react-lottie';
import animationData from '../../../Lottie Animations/riding.json';
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiFillMail,
} from 'react-icons/ai';
const Connect = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <section>
      <div className={styles.animation}>
        <Lottie options={defaultOptions} className={styles.animation} />
      </div>
      <div className={styles.content}>
        <div>
          <h2>
            <span>Work Hard</span>
            <br />
            Play Hard
          </h2>
          <p>
            I am excited to discuss your next project and develope your idea.
          </p>
          <button>Hire Me!</button>
          <button>Freelance Work!</button>
          <ul className={styles.socialmedia}>
            <li>
              <AiFillLinkedin className={styles.icon} />
            </li>
            <li>
              <AiFillGithub className={styles.icon} />
            </li>
            <li>
              <AiFillMail className={styles.icon} />
            </li>
            <li>
              <AiFillInstagram className={styles.icon} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Connect;
