import Head from 'next/head';
import styles from '../styles/Header.module.css';
import { useState } from 'react';

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<header className={styles.header}>
			<Head>
				<title>OpenAI chatbot</title>
				<meta
					name='description'
					content='An openAI chat bot created by Denis Inghelbrecht'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<h1>OpenAI Chatbot</h1>
			<nav className={styles.navLinkContainer}>
				<a href='https://denisinghelbrecht.com' target='__blank'>
					Denis Inghelbrecht
				</a>
				<a href='https://github.com/YKdenis' target='__blank'>
					Github
				</a>
				<a href='https://github.com/YKdenis/openAI-chatbot' target='__blank'>
					Source Code
				</a>
			</nav>
			<button
				className={styles.hamburgerButton}
				onClick={() => setIsOpen(true)}
			>
				☰
			</button>
			<aside
				className={styles.navLinkAside}
				style={{ transform: isOpen ? 'translate(0)' : 'translate(100%)' }}
			>
				<button className={styles.closeButton} onClick={() => setIsOpen(false)}>
					X
				</button>
				<a href='https://denisinghelbrecht.com' target='__blank'>
					Denis I.
				</a>
				<a href='https://github.com/YKdenis' target='__blank'>
					Github
				</a>
				<a href='https://github.com/YKdenis/openAI-chatbot' target='__blank'>
					Source Code
				</a>
			</aside>
		</header>
	);
}
