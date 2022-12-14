import { Notification } from '../../src/application/entities/notifications';
import { NotificationRepository } from '../../src/application/repositories/notifications-repository';

export class InMemoryNotificationsRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
