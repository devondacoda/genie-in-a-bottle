# CODE REVIEW 1

## Workflow
	- What's in a good Readme?
	- Establish equitable commit ratio, sometimes pair programming will skew this
	- Work back to front. Robustly test your API before moving to front end
	- Good (Semantic) Commit messages
		 - Type of commit (feature, test, refractor, style)
		 - The subject of the committed code (model, route, auth etc)
		 - present tense description of what commit does

	-MVP 
		- What routes are necessary?
		- Unit vs acceptance
		- Conventional stati : 200 for Get, 201 for PUT/POST, 204 for DELETE

	-Tickets
		- Specific description
		- Encompass 15- 120 mins of work
		- GET Single user vs User Routes

	- Models
		- Great job writing tests 
		- Nice job avoiding Sequelize.ARRAY
		- No associations
		- Sequelize.FLOAT vs Decimal for price	





