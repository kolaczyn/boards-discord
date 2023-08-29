import { AppMessage } from '../types'
import { ISendMessage } from './sendMessage'

export const sendConsoleMessage: ISendMessage = (
  message: AppMessage[]
): Promise<void> => {
  console.table(message)
  return Promise.resolve()
}
