import { ColorResolvable } from 'discord.js'

export type AppArgs = {
  message: string
  color: string
  dryRun: boolean
  repoUrl: string
}

export type AppMessage = {
  message: string
  color: ColorResolvable
  repoUrl: string
}
