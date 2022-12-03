import React from 'react';
import styles from './Kontak.module.css';

type Props = {
  children?: React.ReactNode;
  // props....
};

//todo:-----Kontak component-----://
const Kontak = (props: Props) => {
  return (
    <div className={styles.container}>Kontak</div>
  )
}

export default Kontak;