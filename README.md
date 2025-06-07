# Learner Report Card - PRD

## Project setup

Installing the node_modules:
```bash
npm install --force
```

Create `.env` file with following content but change the link to backend:
```bash
REACT_APP_API_BASE_URL=http://localhost:3001
```

## Build Steps

Building the docker image. React application is running at port 3000 inside the container and is exposed at port 80 in host machine.

```
docker build -f Dockerfile -t frontend-lrccapstone .
docker run -it -p 80:3000 frontend-lrccapstone
```

View the project at http://127.0.0.1

# Testing

All unit and component tests use **Jest** together with **React Testing Library**.
Run the suite in non-interactive mode with:

```bash
CI=true npm test -- --watchAll=false
```

Axios is mocked via `__mocks__/axios.js` so tests don't load the real ESM package.

# Reference

https://github.com/minimal-ui-kit/material-kit-react
https://minimal-kit-react.vercel.app/dashboard/app
https://github.com/UnpredictablePrashant/learnerReportCS_frontend
https://lrccapstone.atlassian.net/jira/your-work
https://github.com/UnpredictablePrashant/learnerReportCS_frontend/pull/1
