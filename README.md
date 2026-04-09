<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/6d97ed87-ad42-4756-8ef9-9f8e7ddbca9b

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the required keys in `.env.local`:
   - `GEMINI_API_KEY` for Gemini features
   - `VITE_WEB3FORMS_ACCESS_KEY` for contact form delivery
   - `VITE_CONTACT_RECIPIENT_EMAIL` for temporary recipient override (optional)
3. Run the app:
   `npm run dev`

## Contact Form Setup (Web3Forms)

1. Create a form at https://web3forms.com/ and get your access key.
2. Set recipient email to `info@thinkverge.in` in Web3Forms dashboard.
3. Complete recipient email verification in Web3Forms.
4. Add the key to `.env.local`:

   `VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here`

5. To temporarily route contact form messages to your own inbox:

   `VITE_CONTACT_RECIPIENT_EMAIL=you@example.com`
