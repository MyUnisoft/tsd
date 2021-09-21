import { PJ } from "./document";
import { Account } from "./account";

export interface NewEntryLine {
  /**
  Tableau contenant une ou plusieurs pièces jointes à attacher à la ligne.
  */
  pj_list?: PJ[];

  /**
  Il n'y a pas de règle prédéfini pour ce champ. Il peut contenir ce que vous voulez (numéro de chèque, numéro de virement etc.).
  Contient uniquement des caractères alphanumériques et avoir une longueur maximum de 15.
  */
  piece?: string;

  /**
  Numéro d'identification de la facture.
  Contient uniquement des caractères alphanumériques et avoir une longueur maximum de 10.
  */
  piece2: string;

  /**
  Doit être supérieur ou égale a la propriété date_piece, format AAAA-MM-JJ
  */
  deadline: string;

  /**
  Credit et Debit de la ligne (l'un des deux doit toujours être à zéro).
  */
  credit: number;
  debit: number;

  /**
  ID du type de paiement pour la ligne. Peut-être égal à -1 si vous n'avez pas l'information.
  Les différents moyens de paiement disponibles pour la société sont récupérables avec la route GET paiement_type.
  */
  payment_type_id?: number;

  /**
  Id du compte à associé à la ligne (attention ce n'est pas l'account number).
  Il est possible de récupérer l'id avec la route POST account (qui s'occupera aussi de créer le compte s'il n'existe pas).
  */
  account_id: number;

  /**
  Label de la ligne (aussi appelé Intitulé).
  */
  label: string;

  /**
  Configuration du lettrage pour la ligne. Longueur maximum de 3 caractères au fomat [a-zA-Z]{1,3}
  */
  lettrage?: string;

  /**
  Configuration rapprochement bancaire, aa (année) - mm (mois) - jj (jour)
  */
  pointage_aa?: string;
  pointage_mm?: string;
  pointage_jj?: string;
}

export interface NewEntry {
  /**
  Tableau contenant une ou plusieurs pièces jointes à attacher à l'entrée comptable.
  */
  pj_list?: PJ[];

  /**
  Ligne de l'entrée comptable.
  */
  entry_list: NewEntryLine[];

  /**
  Date de l'entrée comptable au format AAAA-MM-JJ.
  */
  date_piece: string;

  /**
  Période from et to au format AAAA-MM-JJ.
  */
  period_from?: string;
  period_to?: string;

  /**
  Id de la société d'appartenance.
  */
  etablissement_id: number;

  /**
  Id du journal en lien avec l'entrée comptable. Les journaux en lien avec la société sont récupérables avec la route GET diary.
  */
  diary_id: number;

  /**
  ID partenaire de l'entrée comptable. Il se doit d'être strictement unique et de préférence avoir un préfixe identifiant le partenaire.
  L'entrée comptable sera récupérable avec la route GET entry/id?id_origin=ID

  @example
  QB-dd661851-022a-44ae-8205-f3f4449eb891
  */
  entry_origin_partner_id?: string;

  /**
  Structure JSON personnalisée attachée a l'entrée comptable.
  Pratique pour conserver des informations complémentaires qui pourront être récupérées plus tard!
  */
  json?: string;

  /**
  Commentaire attaché a l'entrée comptable.
  */
  comment?: { content: string };

  /**
  Id pour identifier la source (provenance) de l'entrée comptable.
  */
  id_source?: number;

  /**
  Id de la transaction qonto.
  */
  id_transaction_qonto?: number;
}

export type Entries = {
  type: "E";
  debit_total: number;
  credit_total: number;
  entry_array: EntryE[];
} | {
  type: "O";
  debit_total: number;
  credit_total: number;
  entry_array: EntryO[];
}

interface BaseEntry<DiaryType, EntryLineType> {
  comment: boolean;
  entry_id: number;
  date_piece: string;
  etablissement_id: number;
  diary: DiaryType;
  entry_list: EntryLineType[];
}

export interface EntryE extends BaseEntry<DiaryE, EntryLineE>{
  blocked: boolean;
  entry_date: string;
}

export interface EntryO extends BaseEntry<DiaryO, EntryLineO>{
  alerte: string;
  doublon: boolean;
  period_to?: string;
  period_from?: string;
  last_comment?: string | LastComment;
  account_base_id?: string;
  transaction_qonto_id: string;
  entry_origin_partner_id: string;
  pj_list: EntryOPJ[];
}

export interface LastComment {
  id: number;
  name: string;
  comment: string;
  date_time: string;
}

export interface DiaryE {
  id: number;
  code: string;
  label: string;
  account?: {
    id: number;
    label: string;
    number: string;
  };
  diary_type_code?: string;
}

export interface DiaryO {
  id: number;
  code: string;
  label: string;
}

interface BaseEntryLine {
  credit?: number;
  debit?: number;
  label: string;
  piece?: string;
  piece2?: string;
  account: Account;
  deadline?: string;
  line_entry_id: number;
}

export interface EntryLineE extends BaseEntryLine{
  currency: string;
  flags?: {
    leasing: {
      company: {
        value: number;
      };
      leasing: {
        id: number;
        title: string;
        comment: string;
        period_id: number;
        is_expired: boolean;
        payment_count: number;
        bank_account_id: number;
        contract_number: string;
        payment_type_id: number;
        contract_type_id: number;
        is_tax_deduction: boolean;
        is_deductible_vat: boolean;
        personal_account_id: number;
        tax_deduction_value: number;
      };
      property_cost: {
        actual: number;
        original: number;
      };
      payments?: Payment[];
    }
  };
}

export interface Payment {
  date: string;
  amount: number;
  insurance: number;
}

export interface EntryLineO extends BaseEntryLine{
  payment_type: {
    code: string;
    name: string;
    payment_type_id?: number;
  };
  pj_list: EntryOPJ[];
}

export interface EntryOPJ {
  name: string;
  token: string;
  etat: boolean;
  link?: string;
  baseUrl?: string;
  download?: string;
  date_time?: string;
  thumbnail?: string;
  document_id?: number;
}

export interface PartnersEntryMetadata {
  id_entry: number;
  type: "ENTRIES" | "ENTRIES_TEMP";
  json_metadata_partners?: string;
}
