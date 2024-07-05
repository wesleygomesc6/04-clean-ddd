import { Notification } from '../../enterprise/entities/notificacao'

export interface NotificationsRepository {
  create(notification: Notification): Promise<void>
}
