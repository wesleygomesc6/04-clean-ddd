import { NotificationsRepository } from '@/domain/notification/appliclation/repositories/notifications-repository'
import { Notification } from '@/domain/notification/enterprise/entities/notificacao'

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public items: Notification[] = []

  async create(notification: Notification) {
    this.items.push(notification)
  }
}
