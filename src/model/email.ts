export class Email{
    id: number;
    subject: string;
    email : string;
    name: string;
    message: string;
}
export interface IEmail
{
    id: number;
    subject: string;
    email : string;
    name: string;
    message: string;
}
export function CreateEmail(data):IEmail
{
    return {
        id : data.id,
        subject : data.subject,
        email:data.email,
        name:data.name,
        message:data.message
    };
}