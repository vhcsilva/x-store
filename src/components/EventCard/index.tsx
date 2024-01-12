import Image from "next/image";
import {Tag} from "@taikai/rocket-kit";

import {Event} from "@/types/event";
import styles from "@/components/EventCard/styles.module.css";
import {useAppContext} from "@/stores/app-store";

export default function EventCard (event: Event) {
  const { hasNft } = useAppContext();

  return (
    <div className={styles.wrapper}>
      { !hasNft && <Tag
          color="yellow500"
          txtColor="black"
          value="Exclusive Mx.X owners"
          variant="solid"
          className={styles.nftOwnersTag}
      />}
      <Image
        src={`/static/images/events/${event.image}`}
        alt={event.name}
        width={400}
        height={300}
      />

      <h4 className={styles.name}>
        {event.name}
      </h4>

      <div className={styles.prices}>
        <h5 className={styles.price}>
          {!!event.discount ? <Tag
            color="green500"
            txtColor="black"
            value={`${event.discount}% discount`}
            variant="solid"
          /> : <Tag
            color="blue500"
            txtColor="white"
            value="AIRDROP"
            variant="solid"
          />}
        </h5>
      </div>
    </div>
  );
}