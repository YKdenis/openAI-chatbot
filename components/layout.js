import Header from './header';

export default function Layout({ children }) {
	const siteTitle = 'NextJS + OpenAI Chat';
	return (
		<div>
			<Header />
			<main>{children}</main>
		</div>
	);
}
