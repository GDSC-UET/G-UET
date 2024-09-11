export const PassInterviewRound = (
  name: string,
  position: string,
  facebook: string,
  messenger: string,
  fanpageLink: string,
  gdscLink: string
) => {
  return `
    <p>Dear ${name},</p>
    <p>After evaluating all your professional and non-professional attributes through three rounds, we are pleased to inform you that <span style="color: #3b82f6;">You have officially become a member of the Google Developer Student Clubs - UET as ${position}</span>.</p>
    <p>Upon receiving this email, please join the club's chat group and Facebook group to stay updated with the latest information.</p>
    <ul>
      <li>Facebook group link: ${facebook}</li>
      <li>Messenger group link: ${messenger}</li>
    </ul>
    <p>Once again, <span style="color: #3b82f6;">Congratulations on becoming an official member of the Google Developer Student Clubs - UET</span>. We hope you have a productive and enjoyable time working and learning with us. <span style="color: #3b82f6;">Thank you!</span></p>
    <p>If you have any questions, please feel free to contact us directly through our <a style="color: #3b82f6;" href=${fanpageLink}>fanpage</a>. In the meantime, you can also follow the <a style="color: #3b82f6;" href=${gdscLink}>Google Developer Student Clubs - UET website</a> for the latest updates.</p>
  `
}
