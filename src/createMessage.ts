import { EmbedBuilder } from 'discord.js'
import { AppMessage } from './types'

export const createMessage = ({ message, color, repoUrl }: AppMessage) =>
  new EmbedBuilder().setTitle(message).setURL(repoUrl).setColor(color)
