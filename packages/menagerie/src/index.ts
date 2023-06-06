import { cors } from "@elysiajs/cors";
import { Elysia, t, ws } from "elysia";

import { Device } from "./device.ts";

globalThis.deviceStore = {};

const app = new Elysia()
  .use(cors())
  .use(ws())
  .ws("/state", {
    open: (ws) => {
      const device = deviceStore[ws.data.query.device] || new Device(32, 32);
      deviceStore[ws.data.query.device] = device;
      ws.send({ message: device.serialize() });
      device.subscribe((device) => {
        ws.send({ message: device.serialize() });
      });
    },
    close: (ws) => {
      delete deviceStore[ws.data.query.device];
    },
    query: t.Object({ device: t.String() }),
    body: t.String(),
    response: t.Union([
      t.Object({
        message: t.String(),
      }),
    ]),
  })
  .get("/device/:id/white", ({ params }) => {
    deviceStore[params.id].data = deviceStore[params.id].data.fill(255);
  })
  .listen(3000);

export type App = typeof app;

// eslint-disable-next-line no-console
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
