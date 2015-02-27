# jarvis

Chrome Extension for Voice Recognition.

[Submission](http://challengepost.com/software/jarvis-z2lhh) for [Treehacks](http://treehacks.com)

Built in approximately 20 hours from 2/20/2015 11PM to 2/22/2015 11AM

Won Best Use of SmartThings

We believe that voice command is the future. Therefore, we have created Jarvis, a chrome extension that allows you to control basically everything through voice. 
To start, we have hardcoded several commands that most people would find useful, such as opening any website (open facebook), playing a song (youtube all of me), and opening any drive documents (document psych).
On top of that, we allow users to create their own commands that link to a specific url, such as a command to compose a new email (create new email), or command to take you to your bank website (create show me the money).
Finally, for the programmers out there, we have included a script field that would allow you to map a command to any code you want to execute. The possibilities are endless. WIth more and more application having Restful API, you can do things from launching a drone to conducting a remote surgery. 
As an example, we can post on a friend’s wall like this. Or we can do something more useful such as turn this light on/off with whatever commands we like. 
We are excited to see what commands you will create because with Jarvis, anyone can be Ironman. 

[Youtube](https://www.youtube.com/watch?v=tYwndoL8l0I)

# Status

This has yet to be worked on after the hackathon and thus is somewhat clunky. We welcome pull requests.

# Setup

After initiating the app you have to go to the options page. This is so the chrome app can get permissions to use the microphone. The options page is a basic page that just displays your own video and audio back to you.
After getting permissions you can watch the background page console for logging information about the voice recognition.
The TMP: logs are partial completes of the voice recognition, and when you stop talking the TMP will become FINAL: and will attempt to execute the command listed under FINAL.
