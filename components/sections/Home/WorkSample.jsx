import React from 'react';
import styles from '../../../styles/modules/WorkSample.module.scss';
import Image from 'next/image';

import { BsArrowUpRight, BsArrowRightShort } from 'react-icons/bs';
const WorkSample = () => {
  return (
    <section className={styles.main}>
      <div className={styles.head}>
        <h2>Work Samples</h2>
        <p>Practical Implementation of things i have learned</p>
      </div>
      <div className={styles.gridWrap}>
        <div className={styles.firstProject}>
          <p>Figma Design + Code</p>
          <h3>A Modern Learning Platform</h3>
          <button>Learn More</button>
          <div className={styles.mobileMockup}>
            <Image
              src='/ui-elements/thesocialcomment.png'
              alt='Educational Website Mockup'
              width={790}
              height={611}
            />
          </div>
        </div>
        <div className={styles.secondProject}>
          <p>Educational Club</p>
          <h3>
            Ginnovation Club,
            <br />
            Ed-Platfrom
          </h3>
          <button>Learn More</button>
          <div className={styles.pcMockup}>
            <Image
              src='/ui-elements/ginnovation.png'
              alt='Ashutosh Bisoyi Image'
              width={353}
              height={251}
            />
          </div>
        </div>
        <div className={styles.thirdProject}>
          <p>Personal Project</p>
          <h3>
            Google Keep <br /> Clone
          </h3>
          <button>Learn More</button>
          <button className={styles.moreBtn}>
            <BsArrowUpRight className={styles.icon} />
          </button>
        </div>
        <div className={styles.fourthProject}>
          <p>Game Development</p>
          <h3>
            Tic Tac Toe <br />
            Javascript
          </h3>
          <button>Learn More</button>
          <button className={styles.moreBtn}>
            <BsArrowUpRight className={styles.icon} />
          </button>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <div>
          <span>30 more projects to show</span>
          <button>
            View All Works <BsArrowRightShort className='ml-2' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkSample;
