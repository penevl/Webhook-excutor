# Webhook executor

Webhook executor is a nodejs application where you can define webhook URLs in a json file and webhook executor will listen on those URLs and execute a bash script if something hits whose URLs.

## Getting started

### Editing the hooks.json file

You can edit the `hooks.json` file located in the `hooks` directory to add more webhooks. Each hook requires three fields to be filled out. You can also find an example for the file [here](https://git.penevl.org/elduko/webhook-executor/-/blob/master/hooks/hooks.json.example)

1. name - can be whatever you want.
2. url - needs to start with "/" and inside you can put only letters and numbers.
3. script - needs to be one whole word
4. arguments - an array. You need to seperate each argument from one another;

### Adding scripts to be executed

Once you have filled out all the fields you can place the script which you want to be executed in the `scripts` folder and you also need to make sure that the script name matches exactly what is in the `hooks.json` script field field.

## Running the application

### On bare metal

If you want to run the application on bare metal first you must insure you have both nodejs and npm installed. Then you can go in to the app base direcotry and run

```sh
npm install
```

which will install all the needed dependencies. Once you have done that you can run

```sh
node src/index.js
```

which will start the application on port 3000

### With Docker

It is recommended to run the application in a Docker container in order to avoid any issues. To do that you first need to build the image by going to the root of the project and running

```sh
docker build -t IMAGE_NAME .
```

which will build the webhook-executor Docker image. To run it you can either use standard Docker or Docker compose.

#### Run using standard Docker

To run the image using docker you need to use the command.

```sh
docker run -d --restart unless-stopped -v HOST_DIR/hooks:/app/hooks -v HOST_DIR/scripts:/app/scripts -p 3000:3000 IMAGE_NAME
```

This will start up the docker container on port 3000.

#### Run using Docker compose

Here is an example `docker-compose.yml` file you can use if you want to use docker compose.

```yml
version: "3.8"

services:

  webhook-executor:
    container_name: webhook-executor
    image: IMAGE_NAME
    restart: unless-stopped
    volumes:
      - HOST_DIR/hooks:/app/hooks
      - HOST_DIR/scripts:/app/scripts
    ports:
      - 3000:3000
```
