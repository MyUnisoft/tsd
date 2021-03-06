// Import Internal Dependencies
import { CloudDocument } from "./document";
import { Account } from "../regular";
import { DeepNullable } from "../utils";
import { 
  VatParam
} from "./vat";

// Import Third-Party dependencies
import { Except, RequireAtLeastOne } from "type-fest";

export {
  Account
};

export interface SimplifiedAccount extends Account {
  array_counterpart_account?: CounterpartAccountLine[] | null;
}

export interface CounterpartAccountLine extends Except<Account, "counterpart_account"> {
  num_ordre: string;
  vat_param: VatParam | null;
}

export interface DetailedAccounts {
  account_array: DetailedAccount[] | null;
}

export type DetailedAccount = SimplifiedAccount & DeepNullable<AccountDetails>;

export interface AccountDetails {
  solde: number;
  sens: string;
  comment: string;
  intraco: boolean;
  btp_autoliquidation: boolean;
  presta: boolean;
  exoneration: boolean;
  das_2: boolean;
  blocked: boolean;
  vat_param: VatParam;
  array_counterpart_account: CounterpartAccountLine[];
  complementary_informations: ComplementaryInformations;
  society_id: number;
  closed: boolean;
}

export interface ComplementaryInformations {
  id_info_compte_tiers: number;
  person_in_charge: string;
  address_number: string;
  indice_repetition: string;
  address: string;
  address_complement: string;
  postal_code: string;
  city: string;
  siren: string;
  name: string;
  contact_lastname: string;
  contact_firstname: string;
  function: string;
  tel: string;
  email: string;
  comment: string;
  profession: string;
  firstname: string;
  lastname: string;
  type_info_compte_tiers: number;
  iban_list: Iban[];
  way_type: WayType;
  amount_type_paid: AmountTypePaid;
  ape: Ape;
  id_payment_deadline: number;
  payment_deadline: PaymentDeadline;
  payment_type_id: number;
  payment_type: PaymentType;
}

export interface DetailedAccountV2 extends DetailedAccount {
  id_tva: null | number;
  quantities: Quantity[];
  param_vat_id: null | number;
  id_compte_contrepart: null | number;
}

export interface Quantity {
  quantity: {
    code: string;
    label: string;
    id_unit: number;
  };
  mandatory: boolean;
  occurrence: number;
  id_assignment: number;
}

export interface Iban {
  id_iban_compte_tiers: number;
  iban: string;
  bic: string;
  etablissement: string;
  rum_date_signature?: string;
}

export interface PaymentType {
  payment_type_id: number;
  label: string;
  code: string;
}

export interface PaymentDeadline {
  id_payment_deadline: number;
  label: string;
  number_of_days: number;
  end_month: boolean;
  day_number: number | null;
}

export interface Ape {
  id: number;
  value: string;
  label: string;
  info: string;
}

export interface WayType {
  way_type_id: number;
  label: string;
}

export interface AmountTypePaid {
  id_amount_type_paid: number;
  label: string;
}

export type UpdateAccountParams = RequireAtLeastOne<UpdateAccount, "account_number" | "label">

export interface UpdateAccount {
  account_id: number;
  account_number: string;
  label: string;
  provider?: boolean;
  intraco_account?: boolean;
  btp_autoliquidation?: boolean;
  exoneration?: boolean;
  society_id?: number;
  vat_param_id?: number;
  counterpart_account_id?: number;
  das_2?: boolean;
  complementary_info?: UpdateComplementaryInfo;
}

export interface UpdateComplementaryInfo {
  profession?: string;
  siren?: string;
  id_ape?: number;
  person_in_charge?: string;
  name?: string;
  contact_lastname?: string;
  contact_firstname?: string;
  function?: string;
  tel?: string;
  email?: string;
  iban_list?: Iban[];
  id_payment_deadline?: number;
  payment_type_id?: number;
  address_number?: string;
  repetition_index?: string;
  way_type_id?: number;
  address?: string;
  address_complement?: string;
  postal_code?: string;
  city?: string;
  country?: string;
}

export interface AccountEntryLine {
  diary_id: number;
  diary_code: string;
  entry_id: number;
  entry_line_id: number;
  date: string;
  piece: null | string;
  piece2: string;
  label: string;
  debit: null | number;
  credit: null | number;
  solde: number;
  lettrage: string;
  comment: boolean;
  pj_list: CloudDocument[];
  payment_type: null | {
    id_type_reglement: number;
    nom: string;
  };
  deadline: null | string;
  added_date: string;
  closed: boolean;
  flags: any | null;
  dotted: boolean;
  is_an: boolean;
  creator: {
    id: number;
    firstname: string;
    name: string;
  }
}

export interface AccountEntries {
  total_debit: number;
  total_credit: number;
  list_entries_line: AccountEntryLine[];
  thisAccount: {
    id: number;
    number: string;
    label: string;
  }
}

export interface RIB {
  rib_id: number;
  diary_id: number;
  diary_label: string;
  society_id: number;
  start_date: string;
  owner: string;
  iban: string;
  bic: string;
  is_default: boolean;
}

export interface NextLettering {
  next_lettering: string;
}

export interface AccountBalance {
  balance: number;
}

export interface UnbalancedLettering {
  id_compte: number;
  intitule: string;
  no_compte: string;
  value: number;
  lettrage: string;
}

export interface AccountRevision {
  hasComment: boolean;
  validation: {
    VRM: string;
    VCOL: string;
    VSUP: string;
  }
}
