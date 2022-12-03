import React from 'react';
import styles from './Fitur.module.css'

type Props = {
  children?: React.ReactNode;
  // props....
};

//todo:-----Fitur component-----://
const Fitur = (props: Props) => {
  return (
    <div className={styles.container}>Fitur</div>
  )
}

export default Fitur;