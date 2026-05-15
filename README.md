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
Remaining:-
- Signup New User
- Entire testing
Body
    NavBar
    Route=/ => feed
    Route=/login =>Login
    Route=/connections => Connections
    Router=Profile =>profile
