# Getting Started with Create React App

## I am a Fullstack Developer, but major in Nodejs for the backend
This is the frontend part of the task.

1. What informed your choice of technologies for this task?
    I made use of React and React redux for the application development. I use react because it also allows me to create reusable UI components. It is possible to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. 
    I used Node js for the backend because it is easily employed as a server-side proxy where it can handle a large amount of simultaneous connections in a non-blocking manner. 

2. What is a messaging queue?
    This is a service used in used in serverless and microservices architectures. It allow different parts of a system to communicate and process operations asynchronously.

3. A user complained that your app takes 3 seconds to come up when they launch it, what are the possible causes to look into?   
    The major cause for this issue is adding too many components into a single bundle file, so the loading of that bundle    file might take more time. To avoid this kind of issue, we need to structure our components in an optimized way. To solve this react itself has a native solution, which is code-splitting and lazy loading. Which allows splitting bundle files into a smaller size.

Link to deployed site https://pensive-yalow-97db03.netlify.app/

We have one admin set for this application with Fullname: "Admin" and Email: "admin@gmail.com" and Two workers Fullname: "Worker1" and Email: "worker1@gmail.com" and the other one Fullname: "Worker3" and Email: "Worker3@gmail.com"
