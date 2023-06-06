export const isHTMLElement = (el: unknown): el is HTMLElement => {
  return el instanceof HTMLElement;
};
