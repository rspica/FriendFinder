# FriendFinder
#### "FriendFinder" application -- basically a compatibility app.

The app administers a 10 question survey. The app will take in results from a user and compare the answers from the current user's survey with those from other users that have been posted. The app will then display the name and picture of the user with the best overall match. This app use Express to handle routing and deployed to Heroku so other users can help populate the database.

## Technical details

#### This project utilizes the following:
1. Node.js
2. Express
3. HTML
4. CSS
5. JavaScript
6. Jquery

* Express handles routing and the `server.js` file requires the following npm packages: 
* express
* body-parser (middleware handler)
* path


//============================
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
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}
```

	* A POST route `/api/friends` will be used to handle the current incoming survey results. In addition this route hold the compatibility logic for the friend match. 

   		
* Compatibility matching is determined based on the following.
	* User's results is capture in a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
	* Then will compare the difference between the user's scores against other users' scores, question by question. Then will add up the differences to calculate the `totalDifference`.
		* Example: 
			* User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
			* User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
			* Total Difference: 2 + 1 + 2 = 5

	* The person with the closest match will be the one with the "least" amount of difference.

* Once the closest match has been determined, it will display the result back to the user in the form of a modal pop-up. 

* The result will display both the name and picture of the closest match. 