import * as z from 'zod';

export const contactMessageCreate = z.object({
    firstName: z.string().min(2, { message: 'First Name field has to be filled.' }),
    lastName: z.string().min(2, { message: 'First Name field has to be filled.' }),
    email: z.string().min(4, { message: 'Email field has to be filled.' }).email('This is not a valid email.'),
    phone: z.string().min(6, { message: 'Phone field has to be filled.' }),
    message: z.string().min(4, { message: 'Message field has to be filled.' }),
});

export type ContactMessageCreateRequest = z.infer<typeof contactMessageCreate>;
