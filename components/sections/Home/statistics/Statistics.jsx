import React from 'react';
import styles from './Statistics.module.scss';
import { AiFillHtml5, AiOutlineAntDesign } from 'react-icons/ai';
import { FaSass } from 'react-icons/fa';
import {
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiMaterialUi,
  SiTypescript,
  SiTailwindcss,
  SiSass,
} from 'react-icons/si';

const Statistics = () => {
  return (
    <section className={styles.main}>
      <div className={styles.data}>
        <div>
          <h4>1Y+</h4>
          <p>Experience</p>
        </div>
        <div>
          <h4>25+</h4>
          <p>Projects</p>
        </div>
        <div>
          <h4>4</h4>
          <p>Internships</p>
        </div>
      </div>

      <ul>
        <li>
          <AiFillHtml5 className={styles.icon} />
        </li>
        <li>
          <SiCss3 className={styles.icon} />
        </li>
        <li>
          <SiJavascript className={styles.icon} />
        </li>
        <li>
          <SiBootstrap className={styles.icon} />
        </li>
        <li>
          <SiReact className={styles.icon} />
        </li>
        <li>
          <SiMaterialUi className={styles.icon} />
        </li>
        <li>
          <FaSass className={styles.icon} />
        </li>
        <li>
          <AiOutlineAntDesign className={styles.icon} />
        </li>
        <li>
          <SiTypescript className={styles.icon} />
        </li>
        <li>
          <SiTailwindcss className={styles.icon} />
        </li>
      </ul>
    </section>
  );
};

export default Statistics;
