import { Device } from "@unicorn-menagerie/menagerie/src/device.ts";
import { useMemo } from "react";

import { Display } from "./component/display.tsx";
import { Header } from "./component/header.tsx";
import { useStream } from "./hooks/use-stream.ts";

function App() {
  const stream = useStream("test");

  const device = useMemo(() => {
    if (!stream) {
      return;
    }
    return Device.deserialize(stream.message, { width: 32, height: 32 });
  }, [stream]);

  return (
    <div>
      <Header />
      {device && <Display device={device} />}
    </div>
  );
}

export default App;
