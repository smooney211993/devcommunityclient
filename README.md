This is the client side of a social network for developers. It is a MERN STACK application that uses redux for state management.
The functionality of this application includes :
Sign up and sign in,
All profiles publicaly available,
Dashboard and post forum privatley avialable with protected routes,
The ability to add experiences, educations whilst being able to edit them.

Problems that encountered whilst buidling and solutions :
Any component that was rendered via mapping through an array in the global state would often times say that the map was not a function,
this was due to the fact that it was mapping through arrays that were not populated yet. A simple conditional statement would allow the component to only map once there was an array length over 0 (array > 0 && do something).

None of my previous apps ive made had ever needed state management so learning redux whilsts building the front end at times was proven to be quite difficult.
The initial set up of redux involves alot of boilerplate code - Might learn the useContext and useReducer from react.

The CSS and layout was provided through Brad traversy's Udemy course, However all the code is my own.
