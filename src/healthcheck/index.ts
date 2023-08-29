import { SITES_TO_CHECK } from './config'
import { checkAllUrls } from './checkAllUrls'
import { sendConsoleMessage } from '../sendMessage/sendConsoleMessage'
import { sendDiscordMessage } from '../sendMessage/sendDiscordMessage'
import { AppMessage } from '../types'
import dotenv from 'dotenv'

dotenv.config()

const main = async () => {
  const urlsHealth = await checkAllUrls(SITES_TO_CHECK)

  const notHealthyMessages: AppMessage[] = urlsHealth
    .filter(({ status }) => status === 'no-healthy')
    .map(({ url }) => ({
      message: `Site ${url} is not healthy`,
      color: '#ff0000',
      url: url,
    }))

  const isDryRun = false
  const sendMessage = isDryRun ? sendConsoleMessage : sendDiscordMessage
  await sendMessage(notHealthyMessages)
}

main()
