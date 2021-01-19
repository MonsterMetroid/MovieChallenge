Start by installing the npm modules in both folders.

After that is done, in the terminal cd into the webservice directory and run "npm start". The webservice should be running at http://localhost:8081 and you can recieve JSON directly back from the service by using the route http://localhost:8081/search/<<query>>.

Next Navigate to the webapp folder and run "npm run serve". this should start a basic website at http://localhost:8080. Inputing into the search box and searching will return the JSON into a p tag I ran out of time to actually render the individual components.

Future changes would obviously be to finish the front end and make it look nice along wiht cleaning up a lot of files that came from the CLI project creation. I also would like to enable a dynamic return of results I already have the backend ready for this up to 20. I would also like to add some unit tests to check for null type errors that i know exist in my code base.

Overall I really enjoyed the project and learned a lot though 4 hours felt far to short with all the learning that had to be done.


