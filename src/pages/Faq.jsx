import React from 'react';
import { ContentPage } from '../components/ContentPage';
import { Typography, Box } from '@mui/material';
import { fontWeight, styled } from '@mui/system';

const Question = styled('h4')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  color: theme.common.black,
  margin: "40px 0 0 0 !important",
  fontWeight: "700",
  fontSize: "20px",
}));

const Answer = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  color: theme.common.black,
  margin: "10px 0 !important",
  fontSize: "16px",
  "& a": {
    fontWeight: "600",
    color: theme.primary.main,
    textDecoration: "none",
    "&:hover": {
      color: theme.primary.link,
    }
  }
}));

export const Faq = () => {
  return(
    <ContentPage heading="Frequently Asked Questions">
      <Answer sx={{ textAlign: "center" }}>
        We’re here to answer any questions you have about The Trends and what we do.
      </Answer>
      <Question>Q: How can I sign up for your newsletter?</Question>
      <Answer><strong>A:</strong> Signing up is easy! The Trends is a free, bi-weekly newsletter designed for anyone interested in modern investing and finance. Just visit our homepage, enter your email, and you’re all set.</Answer>
      <Question>Q: Do you sell products?</Question>
      <Answer><strong>A:</strong> Our newsletter is completely free! We focus on delivering valuable insights into the latest finance and investing trends directly to your inbox.</Answer>
      <Question>Q: How do I unsubscribe?</Question>
      <Answer><strong>A:</strong> While we’d be sad to see you go, unsubscribing is simple. You’ll find an unsubscribe link at the bottom of every newsletter.</Answer>
      <Question>Q: How does The Trends make money?</Question>
      <Answer><strong>A:</strong> We keep our newsletter free by partnering with trusted sponsors and affiliates who align with our values. Rest assured, we only work with brands we believe in.</Answer>
      <Question>Q: How can I submit feedback to The Trends team?</Question>
      <Answer><strong>A:</strong> We’d love to hear from you! Use the contact form on our website or email us at <a href="mail:hello@thetrends.co">hello@thetrends.co</a>.</Answer>
      <Question>Q: Are you neutral in your reporting?</Question>
      <Answer><strong>A:</strong> Absolutely! We prioritize unbiased, fact-based financial reporting with no political or sensationalist slant.</Answer>
      <Question>Q: Are you expanding to other regions?</Question>
      <Answer><strong>A:</strong> Yes! Currently, The Trends is in English, but we’re exploring ways to reach global audiences. Let us know if there’s a market we should prioritize!</Answer>
      <Question>Q: Can I access past editions of The Trends?</Question>
      <Answer><strong>A:</strong> Of course! Email us at <a href="mail:hello@thetrends.co">hello@thetrends.co</a>, and we’ll send you what you’re looking for.</Answer>
      <Question>Q: Can I sponsor The Trends?</Question>
      <Answer><strong>A:</strong> Yes! Reach out through our contact form or email <a href="mail:hello@thetrends.co">hello@thetrends.co</a> to connect with our team.</Answer>
      <Question>Q: I have a suggestion for a sponsor.</Question>
      <Answer><strong>A:</strong> We’d love your input! Let us know at <a href="mail:hello@thetrends.co">hello@thetrends.co</a>.</Answer>
      <Question>Q: I’m not receiving emails from The Trends.</Question>
      <Answer><strong>A:</strong> Check your spam or junk folder. If you find us there, mark us as a contact to ensure future emails land in your inbox. Need help? Email us at <a href="mail:hello@thetrends.co">hello@thetrends.co</a>.</Answer>
      <Question>Q: Can I update my email address?</Question>
      <Answer><strong>A:</strong> Yes! Use the “Preferences” link at the bottom of our newsletter or email us at <a href="mail:hello@thetrends.co">hello@thetrends.co</a>.</Answer>
      <Question>Q: I’m getting duplicate newsletters.</Question>
      <Answer><strong>A:</strong> This may happen if you’re subscribed under multiple email addresses. Contact us at <a href="mail:hello@thetrends.co">hello@thetrends.co</a>, and we’ll fix it.</Answer>
    </ContentPage>
  )
}
