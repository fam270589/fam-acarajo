import { FaRegImages, FaCompressArrowsAlt, FaRocketchat, FaVideo, FaGift, FaStream } from "react-icons/fa";
import { IFitur } from "../../models/Types";
import CardFitur from "../Cards/CardFitur";
import styles from "./Fitur.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
};

const fitur: IFitur[] = [
	{
		id: 1,
		icon: <FaRegImages />,
		title: "Galeri Foto",
		content: "Tampilkan moment foto kamu dalam undangan",
	},
	{
		id: 2,
		icon: <FaCompressArrowsAlt />,
		title: "Navigasi Lokasi",
		content: "Tidak ada kata tersesat untuk tamu menemukan lokasi",
	},
	{
		id: 3,
		icon: <FaRocketchat />,
		title: "Kolom Ucapan",
		content: "Salam dari teman dalam ucapan/doa",
	},
	{
		id: 4,
		icon: <FaVideo />,
		title: "Video Pre-Event",
		content: "Tampilkan moment bahagia dalam versi transisi",
	},
	{
		id: 5,
		icon: <FaGift />,
		title: "Event Gift",
		content: "Berbagi kebahagiaan dengan kemudahan tanpa batasan",
	},
	{
		id: 6,
		icon: <FaStream />,
		title: "Event Story",
		content: "Tuangkan langkah perjalanan kisah kalian dalam tulisan",
	},
];

//todo:-----Fitur component-----://
const Fitur = (props: Props) => {
	return (
		<div className={styles.container} id="fitur">
			<h2 className={styles.header}>
				<span>Fitur Undangan</span> AcaraJo
			</h2>
			<div className={styles.cards}>
				{fitur.map((fitur) => (
					<CardFitur
						key={fitur.id}
						icon={fitur.icon}
						title={fitur.title}
						content={fitur.content}
					/>
				))}
			</div>
		</div>
	);
};

export default Fitur;
