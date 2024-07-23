import * as z from 'zod';

export const userDetailsRequestSchema = z.object({
    email: z.string().min(1, { message: 'Email field has to be filled.' }).email('This is not a valid email.'),
});

export const userSignupRequestSchema = z.object({
    firstName: z.string().min(2, { message: 'First Name field has to be filled.' }),
    lastName: z.string().min(2, { message: 'First Name field has to be filled.' }),
    email: z.string().min(4, { message: 'Email field has to be filled.' }).email('This is not a valid email.'),
    password: z.string().min(8, { message: 'Password field has to be filled.' }),
    phone: z.string().min(6, { message: 'Phone field has to be filled.' }).optional(),
    age: z.string().min(2, { message: 'Age field has to be filled.' }).optional(),
    lastTZ: z.string().min(3, { message: 'lastTZ field has to be filled.' }),
});

export const userEditRequestSchema = z.object({
    firstName: z.string().min(2, { message: 'First Name field has to be filled.' }).optional(),
    lastName: z.string().min(2, { message: 'First Name field has to be filled.' }).optional(),
    password: z.string().min(8, { message: 'Password field has to be filled.' }).optional(),
    phone: z.string().min(6, { message: 'Phone field has to be filled.' }).optional(),
    age: z.string().min(2, { message: 'Age field has to be filled.' }).optional(),
});

export const userSigninSchema = z.object({
    email: z.string().min(4, { message: 'Email field has to be filled.' }).email('This is not a valid email.'),
    password: z.string().min(8, { message: 'Password field has to be filled.' }),
});

export type UserDetailsRequest = z.infer<typeof userDetailsRequestSchema>;
export type UserSignupRequest = z.infer<typeof userSignupRequestSchema>;
export type UserEditRequest = z.infer<typeof userEditRequestSchema>;
export type UserSigninRequest = z.infer<typeof userSigninSchema>;
