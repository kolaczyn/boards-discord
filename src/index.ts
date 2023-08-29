import dotenv from 'dotenv'

dotenv.config()

import { program } from 'commander'
import { sendDiscordMessage } from './sendMessage/sendDiscordMessage'
import { sendConsoleMessage } from './sendMessage/sendConsoleMessage'
import { AppArgs, AppMessage } from './types'
import { ColorResolvable } from 'discord.js'

program
  .name('Bot release discord bot')
  .description(
    'A bot that sends a message about a new GitHub release to a Discord channel'
  )
  .requiredOption('-r, --repo-url <string>', 'URL of the repo')
  .requiredOption('-m, --message <string>', 'Message to send')
  .requiredOption('-c, --color <string>', ' Color of the message', 'Random')
  .requiredOption(
    '-d, --dry-run <bool>',
    'If enabled, a message will be printed to console instead of sending it to Discord',
    false
  )

program.parse()

const main = async () => {
  const { message, color, dryRun: isDryRun, repoUrl } = program.opts<AppArgs>()
  const appMessage: AppMessage = {
    message,
    color: color as ColorResolvable,
    repoUrl: repoUrl,
  }

  const sendMessage = isDryRun ? sendConsoleMessage : sendDiscordMessage
  await sendMessage(appMessage)
}

main()
