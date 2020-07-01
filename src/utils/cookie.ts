import { get, remove, set } from 'js-cookie';

const cookieKey = 'fastH5Cookie';

export function getCookie(name?: string) {
  return get(name || cookieKey);
}

export function setCookie(name: string, value: string | object) {
  set(name || cookieKey, value);
}

export function removeCookie(name?: string) {
  remove(name || cookieKey);
}
