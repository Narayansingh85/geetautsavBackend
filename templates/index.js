const registrationMail = ({name, email, contact, uuid}) => `<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title></title>
  <meta name="author" content="">
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">

</head>

<body style="font-family:Poppins; font-weight: 200">

  <div style="text-align: center;">
    <div>
      <img style="width: 100%; max-width: 500px;"
        src="https://res.cloudinary.com/dnuq1lgqs/image/upload/v1627280854/Career_counselling_1_puzxr5.jpg" />
    </div>
    <div>
      <div style="font-weight: 500; padding: 20px; font-size: 21px;">You're registered for UMANG 2021</div>
      <div>Please note the following details.</div>
      <div style="border: 1px solid #888; padding: 20px; margin: 20px; border-radius: 4px;">
        <div>Ticket ID: <span style="font-weight: 500;">${uuid}</span></div>
        <div>Name: <span style="font-weight: 500;">${name}</span></div>
        <div>Email: <span style="font-weight: 500; color: black;">${email}</span></div>
        <div>Contact: <span style="font-weight: 500;">${contact}</span></div>
        <div>Event location: <a style="font-weight: 500;" target="_blank" href="https://goo.gl/maps/aJEqoaFb3gkvdsku5">ISKCON Ghaziabad, Raj nagar, Ghaziabad</a></div>
      </div>
    </div>
    <div style="padding: 30px 20px; text-align: left; margin: 20px 0; background-color: #87CEEB;">
      <div style="font-weight: 500; font-size: 21px;">Guidelines</div>
      <ul style="list-style: none; padding: 0;">
        <li>It is compulsory to show your Entry Ticket before entering into the venue hall.
        </li>
        <li>Mask is mandatory for everyone. No one is permitted inside the campus without mask and proper sanitization.
        </li>
        <li>Entry will start from 2:00 PM till 3:30 PM and seats will be available only on "First Come First Serve
          Basis" only.
        </li>
        <li>Entry will be prohibited for anyone under any kind of intoxication or on drugs.
        </li>
        <li>This entry Ticket is Non-Transferable. Only the registered individual will be allowed to enter through the
          ticket.
        </li>
      </ul>
    </div>
    <div>For any assistance related to event details, <span style="font-weight: 500;">Call/Whatsapp Purushottam: 9560310225</span></div>
    <div>For any assistance related to ticketing, <span style="font-weight: 500;">Call/Whatsapp Raghav Kripa Das: 9953522058</span></div>
  </div>
</body>

</html>`

module.exports = {
  registrationMail
}