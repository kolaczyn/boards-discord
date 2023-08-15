import { EmbedBuilder } from 'discord.js'
import { AppMessage } from '../../types'

export const createMessage = ({ message, color, repoUrl }: AppMessage) =>
  new EmbedBuilder()
    .setTitle(message)
    .setDescription('Hello world')
    .setURL(repoUrl)
    .setColor(color)
