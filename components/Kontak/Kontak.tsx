import { RiWhatsappLine } from "react-icons/ri";
import styles from "./Kontak.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
};

//todo:-----Kontak component-----://
const Kontak = (props: Props) => {
	return (
		<div className={styles.container} id="kontak">
			<video autoPlay muted loop className={styles.video}>
				<source src={"./party.mp4"} type="video/mp4" />
			</video>
			<div className={styles.contents}>
				<h2 className={styles.header}>Pesan Sekarang Juga</h2>
				<p className={styles.text}>
					Terima kasih untuk kamu yang sudah membaca isi dari website ini.
					Semoga kita dapat berbincang lebih lanjut.
				</p>
				<button className={styles.button}>
					<RiWhatsappLine className={styles.buttonIcon} />
					Hubungi Kami
				</button>
			</div>
		</div>
	);
};

export default Kontak;
