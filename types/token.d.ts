import { ProfilType, ProfilCode } from "./profil";

export type TokenType = "user" | "api" | "firm" | "b2c";

export interface UserToken {
  /**
   * Schema id.
   */
  member_group_id: number;
  pers_physique_id: number;

  profilType: ProfilType;
  profilId: string;
  profilCode: ProfilCode;
  profilName: string;
  isPlatformAdministrator?: boolean;

  iat?: number;
  exp?: number;
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
  t: string;

  /**
   * Society id.
   */
  s: string;

  iat?: number;
  exp?: number;
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
  p: string;

  /**
   * Third-Party id.
   */
  t: string;

  iat?: number;
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
   p: string;

   /**
    * Third-Party id.
    */
   t: string;

   iat?: number;
   exp?: number;
}

export interface BearerToken {
  token_type: "bearer";
  expire_in: string;
  access_token: string;
  refresh_token: string;
}
