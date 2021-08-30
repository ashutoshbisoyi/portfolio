import React from 'react';
import styles from './WorkSample.module.scss';
import Image from 'next/image';
import Link from 'next/link';
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
          <a href='https://thesocialcomment.vercel.app/' target='_blank'>
            <button>Learn More</button>
          </a>
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
          <a href='https://ginnovation.club/' target='_blank'>
            <button>Learn More</button>
          </a>
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
          <a href='https://googlekeep-app.herokuapp.com/' target='_blank'>
            <button>Learn More</button>
          </a>
          <a href='https://googlekeep-app.herokuapp.com/' target='_blank'>
            <button className={styles.moreBtn}>
              <BsArrowUpRight className={styles.icon} />
            </button>
          </a>
        </div>
        <div className={styles.fourthProject}>
          <p>Game Development</p>
          <h3>
            Tic Tac Toe <br />
            Javascript
          </h3>
          <a
            href='https://ashutoshbisoyi.github.io/tic-tac-toe/'
            target='_blank'
          >
            <button>Learn More</button>
          </a>
          <a
            href='https://ashutoshbisoyi.github.io/tic-tac-toe/'
            target='_blank'
          >
            <button className={styles.moreBtn}>
              <BsArrowUpRight className={styles.icon} />
            </button>
          </a>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <div>
          <span>30 more projects to show</span>
          <Link href='/worksample'>
            <button>
              View All Works <BsArrowRightShort className='ml-2' />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkSample;
