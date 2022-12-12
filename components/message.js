import styles from '../styles/Message.module.css';

export default function Message({ message }) {
	return message.from === 'Chiddy' ? (
		<div className={styles.messageRowLeft}>
			<div className={styles.messageContainer}>
				<p className={styles.message}>{message.message}</p>
				<p className={styles.from}>{message.from}</p>
			</div>
		</div>
	) : (
		<div className={styles.messageRowRight}>
			<div className={styles.messageContainer}>
				<p className={styles.message}>{message.message}</p>
				<p className={styles.from}>{message.from}</p>
			</div>
		</div>
	);
}
