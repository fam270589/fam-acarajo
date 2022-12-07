import Image from "next/image";
import { RiWhatsappLine, RiPriceTag3Line } from "react-icons/ri";
import homeImg from "../../public/assets/homeImg.png";
import styles from "./Home.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
};

//todo:-----Home component-----://
const Home = (props: Props) => {
	return (
		<div className={styles.container} id="home">
			<div className={styles.top}>
				<div>
					<h1 className={styles.header1}>Event Website Invitation</h1>
					<h2 className={styles.header2}>
						Hey, <span>Calon Nganten!</span>
					</h2>
					<h2 className={styles.header2}>Selamat Datang.</h2>
					<p className={styles.content}>
						Saatnya kalian harus tau banyaknya keuntungan menggunakan undangan
						online dari AcaraJo
					</p>
					<button className={styles.button}>
						<RiWhatsappLine className={styles.buttonIcon} />
						<span>Pesan Sekarang</span>
					</button>
				</div>
				<div>
					<Image className={styles.image} src={homeImg} alt="home Image" priority />
				</div>
			</div>

			<div className={styles.bottom}>
				<h2 className={styles.header2}>
					<span>Mengapa</span> AcaraJo?
				</h2>
				<p className={styles.contentBottom}>
					AcaraJo adalah penyedia layanan pembuatan undangan digital berbasis
					website. Kami memberikan sebuah layanan mudah, hemat, dan praktis
					kepada Anda dalam mengirimkan informasi undangan berupa link. Undangan
					online dari AcaraJo juga menawarkan berbagai macam fitur menarik.
				</p>
				<p className={styles.contentBottom}>
					AcaraJo adalah pilihan tepat untuk membuat acaramu menjadi lebih
					berkesan.
				</p>

				<div className={styles.bottomButtons}>
					<button className={styles.button}>
						<RiPriceTag3Line className={styles.buttonIcon} />
						Katalog Desain
					</button>
					<button className={styles.button}>
						<RiWhatsappLine className={styles.buttonIcon} />
						Hubungi Kami
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
