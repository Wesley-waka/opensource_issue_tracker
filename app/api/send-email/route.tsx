import WelcomeTemplate from '@/emails/WelcomeTemplate';
import { NextResponse } from 'next/server';
import {Resend} from 'resend';

const resend = new Resend(process.env.NEXTAUTH_URL);


export async function POST(){
    resend.emails.send({
        from: '',
        to: 'wesleywaka72@gmail.com',
        subject: '.',
        react: <WelcomeTemplate name='Mosh'></WelcomeTemplate>
    })

    return NextResponse.json({})
}

