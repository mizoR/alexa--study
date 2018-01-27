import * as Alexa from 'alexa-app'

const alexa = require('alexa')

const app = new alexa.app()

app.launch(function (request: Alexa.Request, response: any) {
  // TODO: Should say something with async
  response.say("OK").send();

  return false;
})

exports.handler = app.lambda()
