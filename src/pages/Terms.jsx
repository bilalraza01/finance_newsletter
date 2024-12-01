import React from 'react';
import { ContentPage } from '../components/ContentPage';
import { Typography, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const SubHeading = styled('h4')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  color: theme.common.black,
  margin: "40px 0 0 0 !important",
  fontWeight: "700",
  fontSize: "24px",
}));

export const Terms = () => {
  const theme = useTheme();

  return(
    <ContentPage heading="Terms of Use">
      <Typography
        sx={{
          "& a": {
            fontWeight: "600",
            color: theme.primary.main,
            textDecoration: "none",
            "&:hover": {
              color: theme.primary.link,
            }
          }
        }}
      >
        This website is operated by The Trends (collectively, “The Trends,” “our,” “we,” or “us”). The Website offers The Trends newsletter, financial education tools, and other products and services (collectively, “Products and Services”), and from time to time may offer additional products or services, subject to these Terms of Use (the “Terms”), which we may update periodically.
        <br /><br />
        By accessing our Website or using our Products and Services, you agree to comply with and be bound by these Terms. Additional guidelines may apply to certain Products and Services, and you agree to abide by them. If you object to these Terms or any subsequent changes, you should immediately discontinue your use of the Website and our Products and Services.
        <br /><br />
        These Terms remain in effect while you use the Website and/or are a registered user of our Products and Services. Termination of any membership, subscription, or feature does not relieve you of your obligations under these Terms, including indemnifications, warranties, and limitations of liability.
        <br /><br />
        We reserve the right to revise these Terms at any time by publishing updates on the Website. Continued use of the Website or purchase of Products and Services constitutes your acceptance of the modified Terms.
        <br /><br />
        IF YOU DO NOT AGREE TO THESE TERMS, DO NOT USE THIS WEBSITE. BY USING THE WEBSITE, YOU CONFIRM THAT YOU ARE AT LEAST 18 YEARS OLD AND LEGALLY COMPETENT TO ENTER INTO A CONTRACT.
        <br /><br />
        <strong>Access to the Website and Restrictions on Your Use</strong>
        <br /><br />

        We grant you a limited, nonexclusive, non-transferable license to access the Website and use our Products and Services for personal use only. You may not download, copy, or modify any portion of the Website without our explicit permission. Violation of these Terms may result in termination of your license and potential legal action.
        <br /><br />

        <strong>You agree not to do the following:</strong>

        <ol>
          <li>Use data mining, robots, spiders, or similar data-gathering tools on the Website.</li>
          <br />
          <li>Circumvent or disable the Website’s security features.</li>
          <br />
          <li>Copy, reproduce, or distribute any Materials without written permission.</li>
          <br />
          <li>Transmit software or materials with harmful elements (e.g., viruses, worms, Trojan horses).</li>
          <br />
          <li>Reverse-engineer, modify, or create derivative works from the Website.</li>
          <br />
          <li>Impose an unreasonable load on our infrastructure or interfere with Website functionality.</li>
          <br />
          <li>Use the Website for unlawful purposes or violate any applicable laws.</li>
        </ol>

        <br />
        <strong>Participation</strong>
        <br /><br />
        Our Products and Services aim to provide a positive experience for all participants. We may suspend or terminate your participation if you:
            <br /><br />
            • Become disruptive or difficult to work with.
            <br />
            • Fail to follow program guidelines.
            <br />
            • Impair the experience of instructors or other participants.

        <br /><br />
        <strong>Privacy Policy</strong>
        <br /><br />
        Our Privacy Policy, available <a href='/privacy'>here</a>, is part of these Terms. By using the Website, you agree to the terms outlined in our Privacy Policy.
        <br /><br />

        <strong>Purchasing Items Featured on Our Website</strong>
        <br /><br />

        We strive to ensure the accuracy of product descriptions and pricing but do not guarantee error-free listings. If a product or service is not as described, contact us at <a href="mail:hello@thetrends.co">hello@thetrends.co</a> for assistance.
        <br /><br />

        <strong>Pricing Errors and Omissions</strong>
        <br /><br />

        Prices, availability, and terms are subject to change without notice. We reserve the right to correct errors, inaccuracies, or omissions, even after an order is submitted or confirmed.
        <br /><br />

        <strong>Terms of Sale and Termination</strong>
        <br /><br />

            • Subscription services are billed monthly or annually.
            <br />
            • You may cancel your subscription for the following period at any time before the next billing cycle.
            <br />
            • Refunds are not provided for cancellations made during an active billing period.
            <br /><br />

        <strong>Modification or Suspension of the Website</strong>
        <br /><br />

        We reserve the right to modify, discontinue, or suspend any part of the Website or Products and Services without notice.
        <br /><br />

        <strong>Content Disclaimer</strong>
        <br /><br />

        The information on the Website is for informational purposes only. We make no guarantees regarding the accuracy or completeness of the content. Decisions based on Website content are solely your responsibility.
        <br /><br />

        <strong>Disclaimer of Warranties</strong>
        <br /><br />

        The Website and all Products and Services are provided “as is” and “as available.” We disclaim all warranties, express or implied, including warranties of merchantability and fitness for a particular purpose.
        <br /><br />

        <strong>Limitations of Liability</strong>
        <br /><br />

        Our liability is limited to the amount paid for the Products and Services. Under no circumstances are we liable for incidental, consequential, or punitive damages.
        <br /><br />

        <strong>Indemnity</strong>
        <br /><br />

        You agree to indemnify and hold harmless The Trends from any claims or damages arising from your use of the Website or violation of these Terms.
        <br /><br />

        <strong>Links to Third-Party Sites</strong>
        <br /><br />

        The Website may include links to third-party sites. We do not control or endorse these sites and are not responsible for their content or practices.
        <br /><br />

        <strong>Ownership of Content</strong>
        <br /><br />

        All content on the Website, including text, graphics, logos, and design, is owned by The Trends or its licensors. You may not copy, distribute, or reproduce any content without explicit permission.
        <br /><br />

        <strong>Enforcement of Rules and Policies</strong>
        <br /><br />
        We may investigate and take action against violations of these Terms, including termination of your access to the Website.
        <br /><br />

        <strong>Governing Law</strong>
        <br /><br />
        These Terms are governed by the laws of [your applicable state/country], without regard to conflict-of-law principles.
        <br /><br />

        <strong>Arbitration</strong>
        <br /><br />
        Disputes arising under these Terms may be subject to binding arbitration.
        <br /><br />

        <strong>Severability</strong>
        <br /><br />
        If any provision of these Terms is deemed invalid, the remaining provisions remain in effect.

        <br /><br />
        <strong>Contact Us</strong>
        <br /><br />
        For questions about these Terms, contact us at <a href="mail:hello@thetrends.co">hello@thetrends.co</a>.
      </Typography>
    </ContentPage>
  )
}
