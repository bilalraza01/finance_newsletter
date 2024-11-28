import React from 'react';
import { ContentPage } from '../components/ContentPage';
import { Typography, Box } from '@mui/material';

export const Faq = () => {
  return(
    <ContentPage heading="FAQs">
      <Typography>
        Hello Briefers!
        <br /><br />
        Traditional financial news & education has long been defined by Wall Street Suits - at Briefs Media, we’re ditching the suits, but leaving the Briefs.
        <br /><br />
        Briefs Media is a <strong>Detroit-based financial media company</strong> and the team behind <strong>Market Briefs, Briefs Academy and Market Briefs Pro</strong>.
        <br /><br />
        Market Briefs is our free daily newsletter built for regular investors! Our motto is that you should read less news, not more. We aim to provide you a brief summary of the financial news in 5 minutes or less Sunday through Friday.
        <br /><br />
      </Typography>
        <Box sx={{width: {xs: "350px", md: "500px", margin: "0 auto"}, maxWidth: "80%"}}>
          <img style={{ display: "block", margin: "0 auto", maxWidth: "80%" }} width="80%" src="https://briefs.gumlet.io/wp-content/uploads/2023/11/Briefs-Media-About-Us.png" alt="Briefs Media" />
        </Box>
      <Typography>
        Market Briefs Pro is our paid premium stock market research who want to stay ahead of market shifts. These newsletters will give you deep dives & analysis into important financial stories. Plus, our custom charts and graphs will help you feel what’s happening in the business and financial world and not just read about it.
        <br /><br />
        Briefs Academy is our paid financial education platform. When you subscribe, you'll get access to multiple Journeys (what we call classes) on subjects including building wealth, real estate investing, stock market investing, and more! This is a one-stop-shop to accelerate your financial education.
        <br /><br />
        Our team of Money Nerds at Briefs Media is dedicated to bringing you top financial news & education in the only way we know how: from the comfort of our briefs.
        <br /><br />
        We want to share what we love. So put on your Briefs and read along with us.
      </Typography>
    </ContentPage>
  )
}
