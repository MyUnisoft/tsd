// Import Internal
import { BearerToken } from "./token";
import { MemberGroup } from "./regular";

export type HttpResponse = {
  status: "authenticated";
  policy: "OAuth2" | "AD";
  firmId: number;
  firm: Firm;
  details: BearerToken;
  userData?: Information;
} | {
  status: "authenticated";
  details: Policy[];
} | {
  status: "update-password";
  details: MemberGroup;
} | {
  status: "firm-selection";
  details: MemberGroup[];
};

export interface Policy {
  policy: "OAuth2" | "AD";
  firmId: number;
  firm: Firm;
  details: BearerToken;
  userData?: Information;
}

export type Status =
  "authenticated" | "multi-authenticated" | "firm-selection" | "update-password";

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
