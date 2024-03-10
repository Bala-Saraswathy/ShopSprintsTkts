import { Publisher, Subjects, TicketUpdatedEvent } from '@shopsprintstickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}

