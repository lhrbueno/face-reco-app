# Face-reco-app

REST API for **[face-reco-app-ui](https://github.com/lhrbueno/face-reco-app-ui)**

### Technologies

- **_express_** as server
- **_knexjs_** for persistence and **_PostgreSQL_** as database
- **_morgan_** for logging

### Configuration

##### .env.development

- The server port
- Database connection
- Clarifai API Key

#### PS:

- You must add your own API key in the **_.env.development_** file to connect to Clarifai.
- You can grab Clarifai API key [here](https://clarifai.com/)
- It is expected to have **_docker_** and **_docker-compose_** installed

## How to run it

1. Clone this repo
1. Run `cat .env.${NODE_ENV} > .env && docker-compose up --build`¹
1. `curl http://localhost:3003/` and is expected to get at least one user of the Database

#### PS:

¹: `cat .env.${NODE_ENV} > .env`: **_docker-compose.yml_** file uses **_.env_** file to retrieve information. Using the **_env_file_** config I wasn't able to get these infos. In the moment using this workaround.
