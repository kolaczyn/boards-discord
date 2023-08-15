import { AppMessage } from '../../types'

export type ISendMessage = (games: AppMessage) => Promise<void>
