import { useState } from 'react';

import Layout from '../components/layout';
import Message from '../components/message';
import styles from '../styles/Home.module.css';

export default function Home() {
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState([
		{
			message:
				"Hi, my name is Chiddy! I'm an AI chatbot. You can ask me anything. So what can I do for you? :)",
			from: 'Chiddy',
		},
	]);

	const submitMessage = (event) => {
		event.preventDefault();
		if (message === '') return;
		setIsLoading(true);
		setMessages((messages) => [
			...messages,
			{ from: 'Denis', message: message },
		]);
		processMessage(message);
		setMessage('');
	};

	const processMessage = async (message) => {
		const options = {
			method: 'POST',
			body: JSON.stringify({ message }),
			headers: {
				'Content-Type': 'application/json',
			},
		};
		fetch('/api/question', options)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setMessages((messages) => [
					...messages,
					{ from: 'Chiddy', message: res.message },
				]);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<Layout>
			<main className={styles.main}>
				<section className={styles.messages}>
					{messages.map((message, i) => (
						<Message key={i} message={message} />
					))}
					{isLoading && (
						<Message message={{ message: '...', from: 'Chiddy' }} />
					)}
				</section>
				<section className={styles.form}>
					<form onSubmit={submitMessage}>
						<input
							value={message}
							onChange={({ target }) => setMessage(target.value)}
							type='text'
							name='message'
							placeholder='Enter your message.'
						/>
						<button type='submit'>Send</button>
					</form>
				</section>
			</main>
		</Layout>
	);
}
