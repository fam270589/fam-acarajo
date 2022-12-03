import { useState } from "react";
import Image from "next/image";
import { RiMenu5Line, RiCloseLine } from "react-icons/ri";
import styles from "./Navbar.module.css";

import Logo from "../../public/assets/AcaraJo.png";

type Props = {
	children?: React.ReactNode;
	// props....
};

//todo:-----Navbar component-----://
const Navbar = (props: Props) => {
	const [isMenuOpened, setisMenuOpened] = useState(false);

	const closeMobileMenu = () => {
		setisMenuOpened(false);
	};

	return (
		<div className={styles.container}>
			<div className={styles.menuDesktop}>
				<Image alt="logo" src={Logo} height={50} />
				<ul className={styles.menuItems}>
					<a className={styles.link} href="#home">
						Home
					</a>
					<a className={styles.link} href="#fitur">
						Fitur
					</a>
					<a className={styles.link} href="#kontak">
						Kontak
					</a>
				</ul>{" "}
				<RiMenu5Line
					onClick={() => setisMenuOpened(true)}
					className={isMenuOpened ? styles.menuIconHidden : styles.menuIconShow}
				/>
				<RiCloseLine
					onClick={closeMobileMenu}
					className={isMenuOpened ? styles.menuIconShow : styles.menuIconHidden}
				/>
			</div>
			<div className={styles.menuMobile}>
				<ul
					className={
						isMenuOpened ? styles.menuMobileShow : styles.menuMobileHidden
					}
				>
					<a onClick={closeMobileMenu} className={styles.link} href="#home">
						Home
					</a>
					<a onClick={closeMobileMenu} className={styles.link} href="#fitur">
						Fitur
					</a>
					<a onClick={closeMobileMenu} className={styles.link} href="#kontak">
						Kontak
					</a>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
