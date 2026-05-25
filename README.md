# React + Vite
- Create a Vite +React application
- Remove unneccessary code and create a Hello world Application
- http://localhost:5173/
- install tailwind css
- install Daisy UI
- Add NavBar component to App.jsx

- Create a navbar separate component file
- install react-router-dom
- Create BrowserRouter > Routes > Route=/Body>RoutChildren
- Create an outlet in your body component
- Create a footer

- Create a login page
- install axios

- Ors-install cors in backend => add middleware with configuration: origin,credentials:true
- Whenever making API call so pass axios =>{with credentials true} 
- install Redux Toolkit - https://redux-toolkit.js.org/tutorials/quick-start
- install react-redux +@reduxjs/toolkit => configureStore => Provider => createSlice => add reducer to store
- Ad redux devtool in chrome
- Login and see if your data is coming properly in the store
- Navbar should update as soon as logs in
- Refactore our code to add constants file + create a components folder

- you should not be access other route without login
- if token is not present, redirect user to login page
- Logout
- Get the feed and add the feed in the store
- Build the user card feed
- Profile
- Make Gender Dropdown
- Use toast Message
- Make Text to textarea

- See all my connection
- Showing Reived connection requests
- Accept or reject the connection requests
- Send/Ignore the user card from feed
- Signup New User
- Entire testing

Deployment
- Signup AWS
- Lunch Instance
- Download Pem File
- Give permission to the downloaded .pem file
- Using ssh Command login in to the AWS EC2 instance.
- install node of v22.14.0 
- git clone
- Front-end
    -npm install (Install Dependence)
    -npm run build 
    -sudo apt update
    -sudo apt install nginx
    -sudo systemctl statrt nginx
    -sudo systemctl enable nginx
    -copy files from dist(buid files) to /var/www/html/
    -sudo scp -r dist/* /var/www/html/
    -Enable port 80 on your aws ec2 instance
-Backend
    - update DB password
    - allowed ec2 instance public IP on mongodb server
    - installed pm2 -g
    - pm2 start npm --name "devtinder-backend" -- start 
    - for checking log pm2 logs
    - pm2 list
    - pm2 flush devtinder-backend
    - pm2 stop npm
    - pm2 delete devtinder-backend
    - restart nginx sudo systemctl restart nginx
    - Modify the base_url path "/api"

# Adding Custom Domain Name
- purchase domain from godaddy
- Signup on cloudflare
- Change the name server on godaddy and point it to cloudflare
- Wait for sometime till your nameserver (15minutes)
- DNS record: A devtinder.in and add your ec2 instance public ip4
- Enable ssl   for website

 Combine front-end and Backend
 Frontend = http://43.204.96.49
 Backend = https://43.204.96.49:3000

 nginx config:
 server-name 43:204.96.49;
 location /api/{
    proxy_pass http://127.0.0.1:777/; # Pass the request to the Node.js app
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header host $host;
    proxy_cache_bypass $http_upgrade;
 }
# Restart ngins
 sudo systemctl restart nginx
 Frontend = devtinder.com
 Backend = devtinder.com/api

Body
    NavBar
    Route=/ => feed
    Route=/login =>Login
    Route=/connections => Connections
    Router=Profile =>profile
# Sending Email via ses
- Create a IAM user
- Give Access to AmazonSESFullAccess
- Amazon SES : Create an Identity
- Verify your domain name
- Verify an email address as an identity
- Verify an Email address
- Install AWS SDK - v3
- Code Example 
- Setup SesClient
- Access Credentials should be created in IAM under security credentials Tab.
- Add the credentials to the env file
- Write code for sesClient
- Write code for sending email address
- Make the email dynamic by passing more param.

# Schedule cron job in nodeJs
- Installing node-cron
- Learning about cron expression syntax - crontab.guru
- Schedule a job
- date-fns
- Find all the unique email ID who have got connection Request in previous day
- Explore queue mechanism and send bulk email
- Amazon SES Bluk Emails
- Make sendEmail function dynamic
- bee-queue & byll npm packages

# Razorpay payment Gateway Integration
- Sign Up Razorpay account
- created an UI for premium page
- Creating an API for create order in backend
- Added Razor Key and Secret in env file
- Initialize Razorpay in util
- Creating Order in Razor pay
- Create Schema and Model
- Save the order in payment collection
- Pass data properly dynamically to API
- Setup Rozarpay webhook on your live API
- ref https://razorpay.com/docs/payments/server-integration/nodejs/integration-steps/

