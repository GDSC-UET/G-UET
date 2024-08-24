export const ApplySuccessfully = (
  name: string,
  hiringProcessLink: string,
  fanpageLink: string,
  gdscLink: string
) => {
  return `
    <p>Dear ${name},</p>
    <p>Thank you for applying to the Google Developer Student Clubs - UET! We have <span style="color: #3b82f6;">received your application</span> and are <span style="color: #3b82f6;">currently in the process of reviewing it.</span></p>
    <p>We will carefully consider all the applications, including yours, to find the most suitable candidates. Those who pass the application round will proceed to the next stages as outlined in the <a style="color: #3b82f6;" href="${hiringProcessLink}">hiring process</a>.</p>
    <p>The results of the application round will be announced <span style="color: #3b82f6">via email</span> between <span style="color: #3b82f6">October 1, 2024</span>, and <span style="color: #3b82f6">October 4, 2024</span>. Please keep an eye on your email and don't miss this opportunity.</p>
    <p>If you have any questions, please feel free to contact us directly through our <a href="${fanpageLink}" style="color: #3b82f6">fanpage</a>. In the meantime, you can also follow the <a href="${gdscLink}" style="color: #3b82f6">Google Developer Student Clubs - UET website</a> for the latest updates.</p>
  `
}
