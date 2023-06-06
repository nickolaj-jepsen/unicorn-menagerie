import { FixedLengthArray } from "type-fest";

type Color = FixedLengthArray<number, 4>;

export class Device {
  #data: Uint8Array;
  #subscribers: ((device: Device) => void)[] = [];

  constructor(public width: number, public height: number) {
    this.#data = new Uint8Array(width * height * 4);

    // Set the opacity of all pixels to 255
    for (let i = 3; i < this.#data.length; i += 4) {
      this.#data[i] = 255;
    }
  }

  get data(): Uint8Array {
    return this.#data;
  }

  set data(data: Uint8Array) {
    this.#data = data;
    this.#subscribers.forEach((cb) => cb(this));
  }

  subscribe(callback: (device: Device) => void) {
    this.#subscribers.push(callback);
  }

  unsubscribe(callback: (device: Device) => void) {
    this.#subscribers = this.#subscribers.filter((cb) => cb !== callback);
  }

  getPixel(x: number, y: number): Color {
    const index = (y * this.width + x) * 4;
    return [
      this.data[index],
      this.data[index + 1],
      this.data[index + 2],
      this.data[index + 3],
    ];
  }

  setPixel(x: number, y: number, color: Color): void {
    const index = (y * this.width + x) * 4;
    this.data[index] = color[0];
    this.data[index + 1] = color[1];
    this.data[index + 2] = color[2];
    this.data[index + 3] = color[3];
  }

  toMatrix(): Color[][] {
    const matrix: Color[][] = [];
    for (let y = 0; y < this.height; y++) {
      matrix[y] = [];
      for (let x = 0; x < this.width; x++) {
        matrix[y][x] = this.getPixel(x, y);
      }
    }
    return matrix;
  }

  serialize(): string {
    return Buffer.from(this.data).toString("base64");
  }

  static deserialize(data: string, options: { width: number; height: number }) {
    const device = new Device(options.width, options.height);
    device.data = Uint8Array.from(atob(data), (c) => c.charCodeAt(0));
    return device;
  }
}
