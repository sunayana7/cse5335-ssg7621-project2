CSE 5335 Project 2 - Spring 2016
====================================================================

Name: Sunayana Suresh Gowda

UTA ID: 1001107621

NetID: ssg7621

Webdata Management and Xml project

Website: https://cse5335-ssg7621-project2.herokuapp.com/

--------------------------------------------------------------------

1. What aspect of the implementation did you find easy, if any, and why?

• It was easy to work with html. I have used bootstrap for styling the sheet and it was easy to use since it has a lot of built in functions. It was easy to understand node.js and it did not consume too much time. There were many tutorials and steps available to create simple node.js applications which helped me with my project. It was easy working with Heroku after using it in the first project as well.

2. What aspect of the implementation did you find hard, if any, and why?

• Working with MongoDB was hard initially because I had not worked a lot with it. I created my database on mongoLabs and used it in my project using the API key. Find datasets very easy but deploying them took a lot of time.

3. If you were to use these technologies professionally, what would be your biggest concern?
 
 • Handling data would be the biggest concern. 
 

I have used require dependency in my node.js and I had to install these by the following commands.

     npm install require --save
     
This adds to the node_modules folder to my project.

• Ubuntu commands required to deploy and run the server

Github

      git init
      git commit -m "First"
      git remote add origin "https://github.com/sunayana7/cse5335-ssg7621-project-2.git"
      git push -u origin master
      git clone https://github.com/sunayana7/cse5355-ssg7621-project-2.git
Heroku

     heroku login
     heroku create cse5335-ssg7621-project-2
     git push heroku master
 
     
References

1. https://nodejs.org/en/

2. https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction

3. https://devcenter.heroku.com/articles/github-integration

4. http://api.jquery.com/jquery.getjson/
