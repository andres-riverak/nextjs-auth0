// @ts-nocheck
import { Auth0RequestCookies } from '../auth0-session/http';

export default class Auth0NextRequestCookies extends Auth0RequestCookies {
  public constructor() {
    super();
  }

  public getCookies(): Record<string, string> {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { cookies } = require('next/headers');
    return cookies().then((cookieStore) => {
      return cookieStore
        .getAll()
        .reduce((memo, { name, value }) => Object.assign(Object.assign({}, memo), { [name]: value }), {});
    });
  }
}
