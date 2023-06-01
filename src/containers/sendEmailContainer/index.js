import React, { useState } from "react";
import { SendEmail } from "../../components";
import { SendEmailToAllStudents, ShowToast } from "../../constants/api";
export default function SendEmailContainer() {
  const [recipientEmail, setRecipientEmail] = useState("");
  const [mailContent, setMailContent] = useState("");

  const handleRecipientEmailChange = (event) => {
    setRecipientEmail(event.target.value);
  };

  const handleMailContentChange = (event) => {
    setMailContent(event.target.value);
  };

  const handleSendEmail = () => {
    const options = {
      onSuccess: (response) => {
        ShowToast("Emails sent", { success: true });
      },
      onError: (err) => {
        ShowToast("There is an error", { success: false });
      },
    };

    SendEmailToAllStudents(recipientEmail, mailContent, options);

    // Clear the input fields after sending the email
    setRecipientEmail("");
    setMailContent("");
  };
  return (
    <SendEmail>
      <SendEmail.Text>Title :</SendEmail.Text>
      <SendEmail.Input
        value={recipientEmail}
        onChange={handleRecipientEmailChange}
      />

      <SendEmail.Text>Write your mail here :</SendEmail.Text>
      <SendEmail.Input2
        value={mailContent}
        onChange={handleMailContentChange}
      />

      <SendEmail.Button onClick={handleSendEmail}>Send</SendEmail.Button>
    </SendEmail>
  );
}
