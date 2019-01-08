# Diabolic Chat

First of all, this app is intended as an experiment and for educational purposes only!

Diabolic chat is an example of an implementation of ActionCable & Webpacker with react, *it permits you to chat and inject javascript on someone else computer!* by just chatting with them.

For example you can write `/rickrollit()`and everyone who sees the message will execute the function rickrollit, which creates a new rick roll video for every DOM element available on the page

Every text sent with an `/` at the beginning is inmediatly interpreted as Javascript code. Take care of remote infinite loops!

# History

When I was at RedmintLabs, i did an example of how a socket.io app works with a really simple chat, and shared it with my coworkers. After a few minutes they discovered that if you sent things like `<img src='path/to/an/emoji.jpg'></img>`, so we started playing with that. When our productivity went totally down because of people playing remotely with your computer, i decided to shut it down.

A year or two after that, a friend and I decided to create that chat again, but this time with the explotaibility in mind, and by the way we were able to explore some new tools for the task

# Don't use this for evil!!! If you are going to use this with someone ensure that he/she is aware of this! 
