import React from 'react';
import styles from './NavBar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillInstagram, AiFillGithub, AiFillMail } from 'react-icons/ai';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftList}>
        <Link href='/'>
          <div className={styles.logo}>
            <Image
              src='/logo.png'
              alt='Ashutosh Bisoyi Logo'
              width={20}
              height={20}
            />
          </div>
        </Link>
        <ul>
          <Link href='/worksample'>
            <li>Works</li>
          </Link>
        </ul>
      </div>
      <ul className={styles.rightList}>
        <a href='https://www.instagram.com/ashutoshbisoyi/' target='_null'>
          <li>
            <AiFillInstagram className={styles.icon} />
            Instagram
          </li>
        </a>
        <a href='https://github.com/ashutoshbisoyi' target='_null'>
          <li>
            <AiFillGithub className={styles.icon} />
            Github
          </li>
        </a>
        <a href='mailto:ashutoshbisoyi205@gmail.com' target='_null'>
          <li>
            <div className={styles.mail}>
              <AiFillMail className={styles.icon} />
            </div>
          </li>
        </a>
      </ul>
    </nav>
  );
};

export default NavBar;
