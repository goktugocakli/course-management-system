import React, { useState } from "react";
import { SendEmail } from "../../components";
export default function SendEmailContainer() {

    const [recipientEmail, setRecipientEmail] = useState('');
    const [mailContent, setMailContent] = useState('');


    const handleRecipientEmailChange = (event) => {
        setRecipientEmail(event.target.value);
      };
    
    const handleMailContentChange = (event) => {
        setMailContent(event.target.value);
      };
    
    const handleSendEmail = () => {
        console.log('Sending email...');
        console.log('Recipient Email:', recipientEmail);
        console.log('Mail Content:', mailContent);

        // Clear the input fields after sending the email
        setRecipientEmail('');
        setMailContent('');
      };
    return(
        <SendEmail>
            <SendEmail.Text>Recipient E-Mail :</SendEmail.Text>
            <SendEmail.Input value={recipientEmail} onChange={handleRecipientEmailChange} />

            <SendEmail.Text>Write your mail here :</SendEmail.Text>
            <SendEmail.Input2 value={mailContent} onChange={handleMailContentChange} />

            <SendEmail.Button onClick={handleSendEmail}>Send</SendEmail.Button>
        </SendEmail>
    );

}