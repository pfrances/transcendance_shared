import {HttpMethod, HttpEndPointBase} from '../enum';

export namespace HttpAuth42 {
  export const method = HttpMethod.GET;
  export const endPoint = '/42';
  export const endPointFull = `${HttpEndPointBase.AUTH}${endPoint}`;
  export const endPoint_CB = '/42/cb';
  export const endPointFull_CB = `${HttpEndPointBase.AUTH}${endPoint_CB}`;

  export class reqTemplate {}

  /* /auth/42 -(redirect)-> API42 -(redirect)-> /auth/42/cb ⇩ response */
  export class resTemplate {
    public readonly authToken: string;
    constructor(authToken: string) {
      this.authToken = authToken;
    }
  }
}
