import { IChatService } from '../../types/chatTypes';
import { chatCreateRequest } from '../../api/v1/chat/requests';
import { OpenAI } from 'openai';

export class ChatService implements IChatService {
    constructor(private openAPIClient: OpenAI) {}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async createChat(payload: chatCreateRequest, _userIdentifier: string): Promise<string> {
        const completion = await this.openAPIClient.completions.create({
            prompt: payload.chatQuery,
            model: 'gpt-3.5-turbo-instruct',
            max_tokens: 200,
        });

        return completion.choices[0].text;
    }
}
