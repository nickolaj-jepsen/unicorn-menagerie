import { useEffect, useState } from "react";

import { menagerieClient } from "../http/menagerie-client.ts";

export const useStream = (device: string) => {
  const [stream, setStream] = useState<{ message: string }>();
  useEffect(() => {
    const subscription = menagerieClient.state.subscribe({
      $query: { device },
    });

    subscription.subscribe((x) => setStream(x?.data));
  }, [device]);

  return stream;
};
