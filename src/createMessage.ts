import { EmbedBuilder } from 'discord.js'
import { AppMessage } from './types'

export const createMessage = ({ message, color, url }: AppMessage) =>
  new EmbedBuilder().setTitle(message).setURL(url).setColor(color)
