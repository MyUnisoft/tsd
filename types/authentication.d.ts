import { BearerToken } from "./token";

export {
  Firm,
  HttpResponse,
  Status,
  Policy,
  MemberGroup,
  Information
}

type HttpResponse = {
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

interface Policy {
  policy: "OAuth2" | "AD";
  firmId: number;
  firm: Firm;
  details: BearerToken;
  userData?: Information;
}

type Status =
  "authenticated" | "multi-authenticated" | "firm-selection" | "update-password";

interface Firm {
  id: number | string;
  label: string;
}

interface MemberGroup {
  member_group_id: string;
  label: string;
}

interface Information {
  nom: string;
  prenom: string;
  isadmin: boolean;
  user_id: number;
  mail: {
      mail: string;
      id_coord_pers_physique: string;
  }[];
}
