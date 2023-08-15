import { EmbedBuilder } from 'discord.js'
import { AppMessage } from '../../types'

export const createMessage = ({ message, color }: AppMessage) => {
  return new EmbedBuilder()
    .setTitle(message)
    .setDescription('Hello world')
    .setURL('https://boards.kolaczyn.com')
    .setColor(color)
}
