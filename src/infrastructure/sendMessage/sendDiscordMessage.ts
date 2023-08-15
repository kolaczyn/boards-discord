import { WebhookClient } from 'discord.js'
import { createMessage } from '../../domain/createMessage/createMessage'
import { AppMessage } from '../../types'
import { ISendMessage } from './sendMessage'

/** @throws {Error} if env vars are not defined */
export const sendDiscordMessage: ISendMessage = async (message: AppMessage) => {
  const { ID: id, TOKEN: token } = process.env
  if (id === undefined || token === undefined)
    // I hate throwing errors, but this is one of a few good use cases for it :p
    throw new Error(`id and/or token not defined. Can't send a message`)

  const webhookClient = new WebhookClient({ id, token })

  await webhookClient.send({
    content: 'Promocje wjechały',
    embeds: [createMessage(message)],
  })
}
