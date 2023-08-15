import dotenv from 'dotenv'
dotenv.config()

import { program } from 'commander'
import { sendDiscordMessage } from './infrastructure/sendMessage/sendDiscordMessage'
import { sendConsoleMessage } from './infrastructure/sendMessage/sendConsoleMessage'
import { AppMessage } from './types'

program
  .name('Bot release discord bot')
  .description(
    'A bot that sends a message about a new GitHub release to a Discord channel'
  )
  .option(
    '--dry-run',
    "If enabled, a list of games will be printed to the terminal and a Discord message won't be sent",
    false
  )

program.parse()

const main = async () => {
  const options = program.opts()
  const isDryRun = !!options.dryRun
  const sendMessage = isDryRun ? sendConsoleMessage : sendDiscordMessage

  const message: AppMessage = {
    message: 'Hello world,',
    color: '#FF0000',
  }
  await sendMessage(message)
}

main()
