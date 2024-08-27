import Prompt from '@models/prompt';
import { connectDB } from '@utils/database';

export const GET = async (request) => {
	try {
		await connectDB();

		const prompts = await Prompt.find({}).populate('creator');

		const responseBody = JSON.stringify(prompts);
		const headers = {
			'Content-Type': 'application/json',
			'Cache-Control': 'no-store',
			Pragma: 'no-cache',
		};

		return new Response(responseBody, { status: 200, headers });
	} catch (error) {
		return new Response('Failed to fetch all prompts', { status: 500 });
	}
};
