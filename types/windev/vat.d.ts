// Import Internal Dependencies
import { Account } from "../regular";

// Import Third-Party dependencies
import { Except } from "type-fest";

export interface VatParam { 
  vat_param_id: number;
  code: string;
  account_ded: null | Except<Account, "counterpart_account">;
  account_coll: null | Except<Account, "counterpart_account">;
  vat: {
    id: number;
    rate: number;
  };
  vat_type: VatType;
  vat_exigility: VatExigility;
  blocked: boolean;
}

export interface VatType {
  id: number;
  label: string;
  code: string;
}

export interface VatExigility {
  id: number;
  label: string;
  code: string;
}

export interface VatRegime {
  id: number;
  name: string;
  code: string;
}
