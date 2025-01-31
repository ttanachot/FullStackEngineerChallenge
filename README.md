FullStackEngineerChallenge:
-
This is the web-application for employee performance review.

The original repo is [Pay-Baymax/FullStackEngineerChallenge](https://github.com/Pay-Baymax/FullStackEngineerChallenge)

You need to install Docker first on your machine.
`cd FullStackEngineerChallenge`
then `docker-compose up`

There are URLs of container
- Frontend: `localhost:7001`
	- `/`
		- login page
		- 	Provide 3 accounts for login (employee10 - 12)
			- username: `employee10@test.com`
			- password: `employee10`
	- `/profile`
		- Employee profile page
		- List of `topic` to review
	- `/topic/:id/review`
		- Employee review page by topic e.g. `2019 End Year Review`
		- Add review by each employee
		- See detail of reviewed employee
		- - Seed data for login
- Backend: `localhost:7000`
- Database: `localhost:7010`
	- username: `api`
	- password: `api`
	- schema: `db`
---
**API Specification:**

    POST: /login
    - body: { username, password }
    - response: { accessToken: 'xY8apkK2190aAKmsqlWaKQ'}

    GET: /profile
    - headers: { authorization: 'Bearer {accessToken}' }
    - response: { employee }

    GET: /review/:id
    - headers: { authorization: 'Bearer {accessToken}' }
    - response: { review }
    
    POST: /review
    - headers: { authorization: 'Bearer {accessToken}' }
    - body: { reviewPayload }
    - response: { review }
	
	GET: /topic
	- headers: { authorization: 'Bearer {accessToken}' }
	- response: [topics & questions]

---
**Architecture & Technologies:**
- Frontend (Pages component / Pure components & functions -- for testablility)
	- React
	- Javascript
	- Webpack
- Backend (3 Layers & Domain Driven Design - Controller - Service - Model)
	- NodeJS with ES6+
	- Sequelize (ORM Rails like + migration + seed + raw query)
	- PostgreSQL
	- Webpack, Nodemon, Babel, ESLint (Build, Hot-Reload, Transpile, CodeStandard)
- Misc
	- Docker (Images, Containers for CICD)
	- Jest: Unit testing
	- DOTENV - config injection with JENKINS or CICD pipeline
- Future improvements
	- Jest & Enzyme
	- Supertest
	- SCSS