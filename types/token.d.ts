export interface UserToken {
  member_group_id: number;
  pers_physique_id: number;
}

export interface ApiToken {
  type: "api";
  member_group_id: number;
  third_party_id: number;
  society_id: number;
}

export interface FirmToken {
  type: "firm";
  member_group_id: number;
  pers_physique_id: number;
  third_party_id: number;
}

export interface B2CToken {
  type: "b2c";
  member_group_id: number;
  pers_physique_id: number;
  third_party_id: number;
}

export interface BearerToken {
  token_type: "bearer";
  expire_in: string;
  access_token: string;
  refresh_token: string;
}
