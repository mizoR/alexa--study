import * as Alexa from 'alexa-sdk'

const APP_ID = process.env.APP_ID

const SKILL_NAME = '豆知識'

const GET_FACT_MESSAGE = '知っていましたか？'

const HELP_MESSAGE = '豆知識を聞きたいときは「豆知識」と、終わりたいときは「おしまい」と言ってください。どうしますか？'

const HELP_REPROMPT = 'どうしますか？'

const STOP_MESSAGE = 'さようなら'

const data = [
  '水星の一年はたった88日です。',
  '金星は水星と比べて太陽より遠くにありますが、気温は水星よりも高いです。',
  '金星は反時計回りに自転しています。過去に起こった隕石の衝突が原因と言われています。',
  '火星上から見ると、太陽の大きさは地球から見た場合の約半分に見えます。',
  '木星の<sub alias="いちにち">1日</sub>は全惑星の中で一番短いです。',
  '天の川銀河は約50億年後にアンドロメダ星雲と衝突します。',
  '太陽の質量は全太陽系の質量の99.86%を占めます。',
  '太陽はほぼ完璧な円形です。',
  '皆既日食は一年から二年に一度しか発生しない珍しい出来事です。',
  '土星は自身が太陽から受けるエネルギーの2.5倍のエネルギーを宇宙に放出しています。',
  '太陽の内部温度は摂氏1500万度にも達します。',
  '月は毎年3.8cm地球から離れていっています。'
]

exports.handler = (event: Alexa.RequestBody<any>, context: Alexa.Context) => {
  const alexa = Alexa.handler(event, context)

  alexa.appId = APP_ID

  alexa.registerHandlers(
    {
      'LaunchRequest': function () {
        this.emit('GetNewFactIntent')
      },
      'GetNewFactIntent': function () {
        var factArr = data
        var factIndex = Math.floor(Math.random() * factArr.length)
        var randomFact = factArr[factIndex]
        var speechOutput = GET_FACT_MESSAGE + randomFact
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
      },
      'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE
        var reprompt = HELP_REPROMPT
        this.emit(':ask', speechOutput, reprompt)
      },
      'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE)
      },
      'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE)
      }
    }
  )

  alexa.execute()
}
