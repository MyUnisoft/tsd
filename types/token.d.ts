export interface UserToken {
  /**
   * Schema id.
   */
  member_group_id: number;
  pers_physique_id: number;
}

export interface ApiToken {
  type: "api";

  /**
   * Schema id.
   */
  m: number;

  /**
   * Third-Party id.
   */
  t: number;

  /**
   * Society id.
   */
  s: number;
}

export interface FirmToken {
  type: "firm";

  /**
   * Schema id.
   */
  m: number;

  /**
   * Physical person id.
   */
  p: number;

  /**
   * Third-Party id.
   */
  t: number;

  /**
   * Expiration date.
   */
  exp?: number;
}

export interface B2CToken {
  type: "b2c";

  /**
   * Schema id.
   */
  m: number;

  /**
  * Physical person id.
  */
  p: number;

  /**
  * Third-Party id.
  */
  t: number;

  /**
   * Expiration date.
   */
  exp?: number;
}

export interface BearerToken {
  token_type: "bearer";
  expire_in: string;
  access_token: string;
  refresh_token: string;
}
