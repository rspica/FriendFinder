# FriendFinder
#### "FriendFinder" application -- a compatibility app.

The app administers a 10 question survey. The app will take in results from a user and compare the answers from the current user's survey with those from other users that have been posted. The app will then display the name and picture of the user with the best overall match. This app use Express to handle routing and deployed to Heroku so other users can help populate the database.

## Installation

To install the FriendFinder application locally follow the instructions below:

With the command line:

* 1 `git clone https://github.com/rspica/FriendFinder.git`
* 2 `cd FriendFinder`
* 3 `npm install`
* 4 Run the FriendFinder server via the comand line locally: `node server.js`

The FriendFinder app will now be running locally, note the command line log `listening on port 3000`

Now access the FriendFinder app webpages from your browser url: `localhost:PORT`, the default port is set to 3000. The URL will look like this: `localhost:3000`. 

##### FriendFinder is a two page app

#### The landing page:

<img width="715" alt="Friend Finder home page" src="https://github.com/rspica/FriendFinder/blob/master/app/public/images/ff-landingPage.png">

#### The survey page:

<img width="715" alt="Friend Finder home page" src="https://github.com/rspica/FriendFinder/blob/master/app/public/images/ff-surveyPage.png">



## Technical details

#### This project utilizes the following:
1. Node.js
2. Express
3. HTML
4. CSS
5. JavaScript
6. jQuery

* Express handles routing and the `server.js` file requires the following npm packages: 
* express
* body-parser (middleware handler)
* path


---
directory organization for this repository matches the following:

  ```
  FriendFinder
    - app
      - data
        - friends.js
      - public
        - home.html
        - survey.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - node_modules
    - package.json
    - server.js
  ```

The survey questions are on a scale of 1-5.

```
	*5 😁 | Strongly agree
	*4 😌 | Agree
	*3 😐 | Neutral
	*2 😕 | Slightly disagree
	*1 😖 | Strongly disagree
```

* The html-routes.js file includes the following two routes:
	* A GET Route to `/survey` which displays the survey page.
	* A USE route that leads to `home.html` which displays the home page. 

* The `api-routes.js` file includes the following two routes:
	* A GET route with the url `/api/friends`. This will be used to display JSON data of all possible friends

Each of these objects follow the format below:

```json
{
  "firstName": "Ahmed",
  "lastName": "H.",
  "email": "ahmed@example.com",
  "photo": "https://avatars3.githubusercontent.com/u/5855843?v=4&s=400",
  "scores":[
    "5",
    "1",
    "4",
    "4",
    "5",
    "1",
    "2",
    "5",
    "4",
    "1"
  ]
}
```

	* A POST route `/api/friends` will be used to handle the current incoming survey results. In addition this route hold the compatibility logic for the friend match. 

   		
* Compatibility matching is determined based on the following.
	* User's results is capture in a simple array of numbers (ex: scores: Array(10) [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
	* Compare the difference between the user's scores against other users' scores, question by question. Add up the differences to calculate the `totalDifference`.
		* Example: 
			* User 1: [5, 1, 4, 4, 5, 1, 2, 5, 1, 1]
			* User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
			* Total Difference: 2 + 1 + 2 + 3 = 8

	* The person with the closest match will be the one with the "least" amount of total difference.

* Once the closest match has been determined, the match will display the result back to the user in the form of a modal pop-up. 

* The result will display both the name, email, and picture of the closest match. 
