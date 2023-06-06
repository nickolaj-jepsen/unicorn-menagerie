/* eslint-disable no-var */

import { Device } from "./device.ts";

declare global {
  var deviceStore: { [key: string]: Device };
}
