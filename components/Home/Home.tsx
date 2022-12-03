import React from "react";
import styles from "./Home.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
};

//todo:-----Home component-----://
const Home = (props: Props) => {
	return <div className={styles.container}>Home</div>;
};

export default Home;
