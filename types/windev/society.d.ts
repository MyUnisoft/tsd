// Import Internal Dependencies
import { Account } from "./account";

// Import Third-party Dependencies
import { Except } from "type-fest";

export interface CompanyField {
  id: number;
  label: string;
  value: string;
}

export interface CompanyInfo {
  ape: CompanyField | null;
  register: CompanyField | null;
  legal_form: CompanyField | null;
  road_type: CompanyField | null;
  owner_company: CompanyField | null;
  bilan: CompanyField | null;
  impot: CompanyField | null;
  vat_regime: CompanyField | null;
  coordonnee: any;
  footer: {
    id: number;
    token: string;
    label: string;
    link: string;
    thumbnail: string;
    download: string;
    baseURL: string;
  };
  city: Pick<CompanyField, "label" | "value">;
  comment: string;
  society_id: number;
  name: string;
  siret: string;
  activity: string;
  rof_tva: string;
  rof_tdfc: string;
  rof_cfe: string;
  address_number: string;
  id_accountant: null | number;
  id_rm: null | number;
  id_collab: null | number;
  secured: boolean;
  analytics: boolean;
  folder_reference: string;
  logo: any;
  address_bis: any;
  street_name: string;
  complement: string;
  postal_code: string;
  country: string;
  registration_date: string;
  close_entries_VAT: boolean;
}

export interface SocietiesArray {
  row_numbers: number;
  pages_number: null;
  society_array: CompanyInfo[];
}

export interface Exercice {
  exercice_id: number;
  start_date: string;
  label: string;
  end_date: string;
  closed: boolean;
  blocked: boolean;
  duration: number;
  result: number;
  ca: number;
  closed_at: null | string;
  closed_by: null | number;
}

export enum DiaryType {
  ACH = 1,
  VTE = 2,
  BQ = 3,
  CAISSE = 4,
  OD = 5,
  OD_SIMUL = 7,
  A_EXT = 8,
  EXT = 9,
  AN = 10,
  OD_PAIE = 11,
  OD_LET = 12,
  NDF = 13,
  OD_DECL_FISCALE = 14,
  OD_EXC = 15
}

export interface Diary<T = DiaryType> {
  code: string;
  name: string;
  account: null | string;
  blocked: boolean;
  diary_id: number;
  diary_type_id: null | T[keyof T];
  diary_type_code: keyof T;
  diary_type_name: string;
}

export interface PaymentType {
  payment_type_id: number;
  name: string;
  code: string;
}

export interface VatParam {
  vat_param_id: number;
  code: string;
  account_ded: Except<Account, "counterpart_account">;
  account_coll: Except<Account, "counterpart_account">;
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
  label_vat_type: string;
  code: string;
}

export interface VatExigility {
  id: number;
  label: string;
  code: string;
}

export interface RIB {
  rib_id: number;
  diary_id: number;
  diary_label: string;
  society_id: number;
  start_date: string;
  iban: string;
  bic: string;
  is_default: boolean;
}

interface FiscalFileGenericField {
  id: number;
  label?: string;
  value: string;
  effective_date?: string;
}

export interface FiscalFile {
  rof_tva: string;
  rof_tdfc: string;
  rof_cfe: string;
  rof_cvae: string;
  tva_intraco: string;
  adherent_code: string;
  due_date_tva: number;
  mono_etab: boolean;
  close_entries_VAT: boolean;
  sheet_group?: FiscalFileGenericField;
  bilan?: FiscalFileGenericField;
  regime_impot?: FiscalFileGenericField;
  vat_regime?: FiscalFileGenericField;
  gestion_center?: FiscalFileGenericField;
  society_status?: FiscalFileGenericField;
  account_edi?: FiscalFileGenericField;
  info_bnc: {
    info_bnc_id: number;
    comptability_type: FiscalFileGenericField;
    comptability_held: FiscalFileGenericField;
    result_rule: FiscalFileGenericField;
    activity_code_pm: string;
    membership_year: string;
  };
}

export interface Axe {
  id_axe: number;
  code: string;
  label: string;
  id_societe: number;
  id_section_default?: number;
}

export interface ComptesEDI {
  mail: string;
  libelle: string;
  id_compte_edi: number;
}

export interface Section {
  id_section_analytique: number;
  code: string;
  label: string;
  id_axe: number;
  account: string;
  isdefault: boolean;
}

export interface SocietyAssociate {
  capital: Capital | null;
  associate_list: AssociateList;
}

export interface Capital {
  historical_id: number;
  date: string;
  capital: number;
  social_part: number;
  social_part_value: number;
}

export interface AssociateList {
  physical_person_list?: PhysicalPersonListEntity[] | null;
  society_list?: SocietyListEntity[] | null;
}

export interface PhysicalPersonListEntity {
  physical_person_link_id: number;
  physical_person: PhysicalPerson;
  signatory_function: SignatoryFunctionOrFunction;
  function: SignatoryFunctionOrFunction;
  start_date: string;
  end_date: string;
  social_part: SocialPart;
}

export interface PhysicalPerson {
  id: number;
  firstname: string;
  name: string;
}

export interface SignatoryFunctionOrFunction {
  id: number;
  label: string;
}

export interface SocialPart {
  PP: number;
  NP: number;
  US: number;
  percent: number;
}

export interface SocietyListEntity {
  society_link_id: number;
  society: Society;
  signatory_function: SignatoryFunctionOrFunction;
  start_date: string;
  end_date: string;
  social_part: SocialPart;
}

export interface Society {
  id: number;
  name: string;
  siret: string;
  capital: number;
  address: string;
}
