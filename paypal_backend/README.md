##  PayPal Integration with Django Rest Framework
This project demonstrates the backend integration of PayPal payments using Django and Django Rest Framework. The backend receives the payment details from the frontend (React) and verifies the transaction using PayPal’s REST API. Once verified, the backend can process and store the payment details securely.

1. Setting Up PayPal Credentials
First, you’ll need the Client ID and Secret from your PayPal Developer account, which you can retrieve by following these steps:

# Go to the PayPal Developer Dashboard. 
https://developer.paypal.com/api/rest/
1. Log in and create a new application in the Sandbox environment.
2. Retrieve your Client ID and Secret.
3. Store them securely in your Django project, preferably in environment variables.

4. create *.env* file and replace this variable with yours credentials.

PAYPAL_ID=ASJv0B------------------OtsW-3
PAYPAL_SECRET=EM-Qaq-------------------ZDdy
PAYPAL_BASE_URL=https://api.sandbox.paypal.com
PAYPAL_WEBHOOK_ID=8---------240K

# 2. Install Required Dependencies
# 3. Setup Django Settings