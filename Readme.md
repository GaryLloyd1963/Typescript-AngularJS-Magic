#Typescript-Angular-Magic
This is a small project which shows how Angular 1.x can be developed within a Typescript framework.
#Getting Started
###1) Get nodeJS installed
###2) Use npm to install typescript
###3) Use the following command line to watch ts files and compile changes (or just go to 4 to run the program).
Command line to watch file changes (assuming 1.7 installed but may vary):-

```
node "c:\Program files (x86)\Microsoft SDKs\Typescript\1.7\tsc" --watch
```


###4) Run web server by navigating to the main web folder of the project.
```
cd src\web
http-server
```

The http-server will be listening on port 8080. Use a browser to navigate to http://localhost:8080/app/index.html to view the simple index page. This is a hello world
display which is delayed by a timer and simulates a request to fetch message data. It uses
"promises" to give asynch functonality.
