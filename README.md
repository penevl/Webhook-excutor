# Webhook executor

Webhook executor is a nodejs application where you can define webhook URLs in a json file and webhook executor will listen on those URLs and execute a bash script if something hits whose URLs.

## Getting started

### Editing the hooks.json file

You can edit the [`hooks.json`](https://git.penevl.org/elduko/webhook-executor/-/blob/master/hooks/hooks.json) file located in the `hooks` directory to add more webhooks. Each hook requires three fields to be filled out.

1. name - can be whatever you want.
2. url - needs to start with "/" and inside you can put only letters and numbers.
3. script - needs to be one whole word

### Adding scripts to be executed

Once you have filled out all the fields you can place the script which you want to be executed in the `scripts` folder and you also need to make sure that the script name matches exactly what is in the `hooks.json` script field field.
