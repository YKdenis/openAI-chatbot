import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
	const completion = await openai.createCompletion({
		model: 'text-davinci-002',
		prompt:
			'The following is a conversation with an AI assistant named Chiddy. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: Hello, who are you?\nAI: My name is Chiddy, I am an AI created by OpenAI. How can I help you today?\nHuman: ' +
			req.body.message +
			'\nAI: ',
		temperature: 0.7,
		max_tokens: 400,
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0.6,
		stop: ['Human: ', 'AI: '],
	});
	if (completion.statusText === 'OK') {
		res.status(200).json({ message: completion.data.choices[0].text });
	} else {
		res.status(500).json({ message: 'AI error' });
	}
}
