# PayPal Integration with React

This project demonstrates a simple PayPal integration in a React application. Users can make payments via PayPal, and the payment details are captured on the frontend. The integration uses the **PayPal JavaScript SDK** to render the PayPal button, and the transactions are processed via PayPal's **sandbox environment** for testing purposes.

## 1. Setting Up a PayPal Developer Account

Before starting, you'll need to set up a PayPal Developer account and create a sandbox app to get the required **Client ID** and **Secret** for the integration:

1. Go to the [PayPal Developer Dashboard](https://developer.paypal.com/).
2. Log in with your PayPal account (or sign up if you don't have one).
3. Navigate to **My Apps & Credentials** and create an app in the **Sandbox** environment.
4. Once the app is created, you will receive your **Client ID** and **Secret**. These credentials will be used for the PayPal integration in your React application.

## 2. Install PayPal SDK

In the frontend, you will use the PayPal JavaScript SDK to render a PayPal button and handle payments. To include the PayPal SDK in your React project, run the following command:

```bash
npm install @paypal/react-paypal-js

## 3.  Render the PayPal Button
In the component where you want to display the PayPal button, import the PayPalScriptProvider and PayPalButtons components from the PayPal SDK. You can then render the PayPal button and handle payments.

## 4. Handle Payment Approval

Once the payment is successfully completed, the onApprove function will capture the payment details, such as the transaction ID and payer information. You can then send these details to your backend (e.g., Django) for verification or further processing.

# Example Workflow:
Step 1: The user clicks the PayPal button.
Step 2: PayPal creates the order with the specified amount.
Step 3: The user approves the payment via PayPal.
Step 4: The onApprove function captures the payment details and completes the transaction.
Step 5: The frontend sends the payment details to the backend for verification.
