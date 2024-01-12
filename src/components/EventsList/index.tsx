import styles from "@/components/EventsList/styles.module.css";

import { events } from "@/mocks/events";
import EventCard from "@/components/EventCard";

export default function EventsList () {
  return(
    <div className={styles.wrapper}>
      <div className={styles.featured}>
        <h3>Events and Workshops</h3>
        <div className={styles.line}></div>
      </div>

      <div className={styles.listContainer}>
        {events.map(event => <EventCard key={event.name} {...event} />)}
      </div>
    </div>
  );
}