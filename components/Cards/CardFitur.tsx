import React from "react";
import styles from "./CardFitur.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
  icon: JSX.Element;
	title: string;
	content: string;
};

//todo:-----CardFitur component-----://
const CardFitur = (props: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.icon}>
				{props.icon}
			</div>
			<div>
				<h3 className={styles.header}>{props.title}</h3>
				<p className={styles.content}>
					{props.content}
				</p>
			</div>
		</div>
	);
};

export default CardFitur;
