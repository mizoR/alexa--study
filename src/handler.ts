import * as Alexa from 'alexa-sdk'

module.exports.hello = (event: Alexa.RequestBody<any>, context: Alexa.Context) => {
  const alexa = Alexa.handler(event, context)

  alexa.appId = process.env.APP_ID

  alexa.registerHandlers({
    'LanuchRequest': function () {
      this.emit(':tell', 'すみません、よく分かりません')
    },
    'Unhandler': function () {
      this.emit(':tell', 'こんにちは')
    },
    'AMAZON.StopIntent': function () {
      this.emit(':tell', 'さようなら')
    },
  })

  alexa.execute()
};
