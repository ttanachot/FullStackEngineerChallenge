FullStackEngineerChallenge:
-
This is the web-application for employee performance review.
The original repo is [Pay-Baymax/FullStackEngineerChallenge](https://github.com/Pay-Baymax/FullStackEngineerChallenge)

You need to install Docker.
`docker-compose up`
There are URLs of container
- Frontend: `localhost:7001`
- Backend: `localhost:7000`
- Database: `localhost:7010`
	- username: `api`
	- password: `api`
	- schema: `db`
---
**Architecture & Technologies:**
- Frontend
	- React
	- Javascript
	- Webpack
- Backend
	- NodeJS
	- Sequelize (ORM + migration)
	- PostgreSQL
	- Webpack, Babel, ESLint (Build, Hot-Reload, Transpile, CodeStandard)
- Misc
	- Docker (Images, Containers for CICD)
	- Jest: Unit testing