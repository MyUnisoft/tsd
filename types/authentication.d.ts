// Import Internal
import { BearerToken } from "./token";
import { MemberGroup } from "./regular";

export type HttpResponse = {
  status: "authenticated";
  policy: "OAuth2" | "AD";
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
};

export type Status =
  "authenticated" | "multi-authenticated" | "firm-selection" | "update-password" | "require-otp" | "require-cgu-approval";

export interface Firm {
  id: number | string;
  label: string;
}

export interface Information {
  nom: string;
  prenom: string;
  isadmin: boolean;
  user_id: number;
  mail: {
      mail: string;
      id_coord_pers_physique: string;
  }[];
}
