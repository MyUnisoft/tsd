// Import Internal
import { PJ } from "./document";
import { VatParam } from "./society";
import { DeepNullable } from "../utils";

// Import Third-Party dependencies
import { Except, RequireAtLeastOne } from "type-fest";

export interface Account {
  /** Internal (postgres incremented) account id */
  account_id: number;

  /** Account number (or class). Example: 411FOOBAR */
  account_number: string;

  /** Account name */
  label: string;
  counterpart_account?: Except<Account, "counterpart_account"> | null;
}

export interface SimplifiedAccount extends Account {
  array_counterpart_account?: CounterpartAccountLine[] | null;
}

interface CounterpartAccountLine extends Except<Account, "counterpart_account"> {
  num_ordre: string;
  vat_param: VatParam | null;
}

export interface DetailedAccounts {
  account_array: DetailedAccount[] | null;
}

export type DetailedAccount = SimplifiedAccount & DeepNullable<AccountDetails>;

interface AccountDetails {
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
}

interface ComplementaryInformations {
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
  typevoie: TypeVoie;
  amount_type_paid: AmountTypePaid;
  ape: Ape;
  id_payment_deadline: number;
  payment_deadline: PaymentDeadline;
  payment_type_id: number;
  payment_type: PaymentType;
}

interface Iban {
  id_iban_compte_tiers: number;
  iban: string;
  bic: string;
  etablissement: string;
  rum_date_signature?: string;
}

interface PaymentType {
  payment_type_id: number;
  label: string;
  code: string;
}

interface PaymentDeadline {
  id_payment_deadline: number;
  label: string;
  number_of_days: number;
  end_month: boolean;
  day_number: number;
}

interface Ape {
  id: number;
  value: string;
  label: string;
  info: string;
}

interface TypeVoie {
  id_type_voie: number;
  lib: string;
}

interface AmountTypePaid {
  id_amount_type_paid: number;
  label: string;
}

export type OrderedAccounts = Map<AccountClass, DetailedAccount[]>;

export enum AccountClass {
  // Class 1, EQUITY
  EQUITY = "1",

  // Class 2, CAPITAL_ASSET
  CAPITAL_ASSET = "2",
  INTANGIBLE_ASSET = "20",
  TANGIBLE_ASSET = "21",
  UNDER_CONCESSION_ASSET = "22",
  UNDER_CONSTRUCTION_ASSET = "23",
  ASSIGNED_LEASED_AVAILABLE_ASSET = "24",
  AFFILIATED_SHARE_LOAN = "25",
  INVESTMENT = "26",
  OTHER_FINANCIAL_ASSET = "27",
  ASSET_AMORTIZATION = "28",
  ASSET_DEPRECIATION = "29",

  // Class 3, INVENTORIES AND STOCKS
  INVENTORIES_AND_STOCKS = "3",

  // Class 4, THIRD PARTY
  THIRD_PARTY = "4",
  SUPPLIER = "40",
  CUSTOMER = "41",
  PERSONNEL_AND_RELATED = "42",
  SOCIAL_ORGANISATION = "43",
  STATE_AND_PUBLIC_AUTHORITIES = "44",
  GROUP_AND_PARTNERS = "45",
  MISC_DEBTORS_AND_CREDITORS = "46",
  SUSPENSE = "47",
  ACCRUAL_AND_DEFERRED = "48",
  THIRD_PARTY_DEPRECIATION = "49",

  // Class 5, FINANCIAL_ACCOUNT
  FINANCIAL = "5",

  // Class 6, EXPENSE ACCOUNTS
  EXPENSE = "6",
  PURCHASE_AND_INVENTORY_CHANGES = "60",
  EXTERNAL_SERVICES = "61",
  OTHER_EXTERNAL_SERVICES = "62",
  TAXE_AND_DUTY_EXPENSE = "63",
  GROSS_REMUNERATION_AND_EMPLOYER_CONTRIBUTION = "64",
  OTHER_CURRENT_MANAGEMENT_EXPENSES = "65",
  FINANCIAL_EXPENSES = "66",
  EXCEPTIONAL_EXPENSES = "67",
  DEPRECIATION_AMORTIZATION_PROVISION_ENDOWMENTS = "68",
  INCOME_TAX_AND_EMPLOYEE_PROFIT_SHARING = "69",

  // Class 7, PRODUCT ACCOUNTS
  PRODUCT = "7",
  SALES_AND_SERVICES = "70",
  PRODUCTION_IN_STOCK = "71",
  CAPITALISED_PRODUCTION = "72",
  TAXE_AND_DUTY_INCOME = "73",
  OPERATING_SUBSIDIES = "74",
  OTHER_CURRENT_MANAGEMENT_INCOME = "75",
  FINANCIAL_INCOME = "76",
  EXCEPTIONAL_INCOME = "77",
  DEPRECIATION_AMORTIZATION_PROVISION_WRITEBACKS = "78",
  EXPENSE_TRANSFER = "79",

  // Class 8, SPECIAL ACCOUNTS
  SPECIAL = "8"
}

export type UpdateAccountParams = RequireAtLeastOne<UpdateAccount, "account_number"|"label">

interface UpdateAccount {
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

interface UpdateComplementaryInfo {
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
  lettrage: any;
  comment: boolean;
  pj_list: PJ[];
  payment_type: null | number;
  deadline: null | string;
  added_date: string;
  period_from: null | string;
  period_to: null | string;
  closed: boolean;
  flags: any;
}

export interface AccountEntries {
  rows_number: number;
  pages_number: number;
  total_debit: number;
  total_credit: number;
  list_entries_line: AccountEntryLine[];
  thisAccount: {
    id: number;
    number: string;
    label: string;
  }
}
