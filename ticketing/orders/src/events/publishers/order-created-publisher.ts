import { Publisher, OrderCreatedEvent, Subjects } from '@shopsprintstickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}