const env = require('../.env')
const Telegram = require('telegraf/telegram')
const axios = require('axios')
const Markup = require('telegraf/markup') 

const enviarMensagem = msg => {
    axios.get(`${env.apiURL}/sendMessage?chat_id=${env.userID}&text=${encodeURI(msg)}`)
        .catch(e => console.log(e))
}

enviarMensagem('enviando a mensagem de forma assíncrona')

const teclado = Markup.keyboard([
    ['OK', 'Cancelar']
]).resize().oneTime().extra()

const telegram = new Telegram(env.token)
telegram.sendMessage(env.userID, 'Essa menssagem com teclado', teclado)