import * as z from 'zod';

export const ChatCreate = z.object({
    chatQuery: z.string().min(2, { message: 'Chat query field has to be filled.' }),
});

export type chatCreateRequest = z.infer<typeof ChatCreate>;
