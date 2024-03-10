import { Publisher, Subjects, TicketCreatedEvent } from '@shopsprintstickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}