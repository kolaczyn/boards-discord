import { WebhookClient } from 'discord.js'
import { createMessage } from '../createMessage'
import { AppMessage } from '../types'
import { ISendMessage } from './sendMessage'

const getEnvVars = () => {
  const { ID: id, TOKEN: token } = process.env
  if (id === undefined || token === undefined)
    // I hate throwing errors, but this is one of a few good use cases for it :p
    throw new Error(`id and/or token not defined. Can't send a message`)

  return {
    id,
    token,
  }
}

/** @throws {Error} if env vars are not defined */
export const sendDiscordMessage: ISendMessage = async (message: AppMessage) => {
  const { id, token } = getEnvVars()

  const webhookClient = new WebhookClient({ id, token })

  await webhookClient.send({
    embeds: [createMessage(message)],
  })
}
