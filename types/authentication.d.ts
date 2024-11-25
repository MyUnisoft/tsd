// Import Internal
import { BearerToken } from "./token";
import { MemberGroup } from "./regular";

export type HttpResponse = {
  status: "authenticated";
  policy: "OAuth2";
  firm: Firm;
  details: BearerToken;
} | {
  status: "update-password";
  details: MemberGroup;
} | {
  status: "firm-selection";
  details: MemberGroup[];
} | {
  status: "require-cgu-approval";
  details: null;
} | {
  status: "require-otp";
  details: null;
};

export type Status =
  "authenticated" |
  "firm-selection" |
  "update-password" |
  "require-otp" |
  "require-cgu-approval";

export interface Firm {
  id: number | string;
  label: string;
}

export interface Information {
  nom: string;
  prenom: string;
  isadmin: boolean;
  "2fa": boolean;
  user_id: number;
  profil: string;
  id_profil: number;
  id_type_profil: number;
  mail: {
      mail: string;
      id_coord_pers_physique: string;
  }[];
}
