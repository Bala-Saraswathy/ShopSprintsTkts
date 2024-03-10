import { Subjects, Publisher, OrderCancelledEvent } from '@shopsprintstickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}