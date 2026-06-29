import type { Dictionary } from "./types";

/** UI dictionary sent to the browser — CMS overlays stay server-only. */
export type ClientDictionary = Omit<Dictionary, "cms">;

export function toClientDictionary(dict: Dictionary): ClientDictionary {
  const { cms: _cms, ...clientDict } = dict;
  return clientDict;
}
