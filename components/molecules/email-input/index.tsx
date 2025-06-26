import React from 'react';
import Link from 'next/link';
import styles from './EmailInput.module.css';

function EmailInput() {
  return (
    <div className={styles.wrapper}>
      <Link href="/" passHref>
        <a className={styles.link}>
          Book Consultation
        </a>
      </Link>
    </div>
  );
}

export default EmailInput;

