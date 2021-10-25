// Import Internal Dependencies
import {
  Account,
  PaymentDeadline,
  PaymentType,
  RIB
} from "./account";

import {
  VatParam,
  VatType,
  VatExigility,
  VatRegime
} from "./vat";

export {
  Account,
  PaymentDeadline,
  PaymentType,
  VatParam,
  VatExigility,
  VatType,
  VatRegime,
  RIB
}

interface CommonField {
  id: number;
  label: string;
  value: string;
}

export interface SocietiesArray {  //  Companies ???
  row_numbers: number;
  pages_number: number | null;
  society_array: CompanyInfo[];
}

export type SimplifiedCompany = Pick<Company, "society_id" | "name" | "siret" | "capital" | "address">; 

export interface CompanyInfo {
  /**Code [APE](https://www.insee.fr/fr/information/2406147). */
  ape: string | null;

  city: string;
  name: string;

  /**??? */
  step: string;

  siret: string | null;

  /**??? */
  status: string;

  /**Adresse complète. */
  address: string;

  capital: number;
  country: string;

  /**Permet de savoir si la société possède un mot de passe. */
  secured: boolean;

  /**Permet de savoir s'il y a de l'analytique sur le projet. */
  analytics: boolean;

  member_id: number;
  road_type: string | null;

  /**Complément d'adresse. */
  complement: string | null;

  /**??? */
  coordonnee: any[];

  society_id: number;
  address_bis: string | null;

  /**??? */
  companyType: string;

  /**Adresse mail de contact pour les liasses. TYPE NULL ? Pas encore utile?
   * J'ai prit la liberté d'ajouter le type string...
   */
  mail_liasse: string | null;

  postal_code: string;

  /**Option coffre fort. */
  safe_status: boolean;

  /**Numéro d'adresse de la société. */
  street_name: string;

  address_number: number;
  id_type_company: number;

  /**https://docs.api.myunisoft.fr/#d3a15975-5b40-48d7-b4ea-1460fa34da50 ??? */
  folder_reference: string;

  /**Code [Insee](https://fr.wikipedia.org/wiki/Code_Insee). */
  insee: string;
}

export interface Company extends Omit<CompanyInfo, "ape" | "city" | "road_type" | "address_number" | "complement"> {

  /**Code [APE](https://www.insee.fr/fr/information/2406147). */
  ape: CommonField | null;

  register: CommonField | null;

  /**Statut juridique */
  legal_form: null | {
    id: number;
    label: string;
    code: string;
  };

  road_type: CommonField | null;
  owner_company: CommonField;

  /**??? */
  bilan: null;
  impot: null;

  /**Régime TVA */
  vat_regime: CommonField | null;

  /**Dans l'ancien fichier, footer a les même params que Logo ici... */
  footer: null;

  city: Omit<CommonField, "id">;
  comment: string;
  society_id: number;
  name: string;
  siret: string;
  activity: string;

  /**Code Référence d'Obligation Fiscale (ROF) de la TVA.  */
  rof_tva: string;

  /**Code Référence d'Obligation Fiscale (ROF) Transfert des Données Fiscales et Comptables (TDFC). */
  rof_tdfc: string;

  /**Code Référence d'Obligation Fiscale (ROF) de Cotisation Fonciere des Entreprise (CFE). */
  rof_cfe: string

  /**Code Référence d'Obligation Fiscale (ROF) de la Cotisation sur la Valeur Ajoutée des Entreprises (CVAE). */
  rof_cvae: string;

  address_number: string;

  /**Identifiant de l'expert comptable de la société. */
  id_accountant: PhysicalPersonEnFR | null;

  /**Identitfiant du responsable de mission de la société. */
  id_rm: PhysicalPersonEnFR | null;

  id_collab: PhysicalPersonEnFR | null;
  adherent_code: string;
  logo: Logo | null;

  /**Complément d'adresse. */
  complement: string;

  id_centre_gestion: number | null;

  /**Code du régime d'imposition. */
  code_sheet_group: string;

  /**Date d'immatriculation. */
  registration_date: string;

  /**Clotûre automatique des écritures lors de l'envoi de la TVA. */
  close_entries_VAT: boolean;
}

export interface PhysicalPersonEnFR { //  Nom temporaire.
  id_ex: number;
  prenom: string;
  nom: string;
}

export interface Logo {
  id: number;
  token: string;
  label: string;
  link: string;
  thumbnail: string;
  download: string;
  baseURL: string;
}

export interface Establishment {  //  d'après l'exemple sur postman actuellement
  name: string;
  siret: string;
  address_number: string;
  road_type: CommonField;
  street_name: string;
  postal_code: string;
  country: string;
  id_parent_society: number;
  id_society: number;
}

export interface LegalForm {
  id: number;
  name: string;

  /**Nom simplifié de la forme juridique. */
  code: string;
}

export interface GestionCenter {  
  center_gestion_id: number;
  name: string;
  adress_number: string;
  repetition_indice: string;  //  voir ce param sur postman ...
  adress_complement: string;
  postal_code: string;
  city: string;
  siret: string;

  /**Numéro d'agrément du centre de gestion. */
  num_agrement: number;

  /**Identifiant */
  road_type_id: number;
}

export type GestionCenters = GestionCenter[];

// pour le sdk?
export type ListOfStatus = "En activité" | "Sans activité" | "Mise en sommeil" | "Redressement judiciaire" | "Liquidation amiable" | "Liquidation Judiciaire" | "Dissolution";

export interface Status { //  ReferenceOfSocietyStatus ???
  id: number;
  name: ListOfStatus;
}

// pour le sdk?
export type ListOfRegisterName =
"AGEN" | "AIX-EN-PROVENCE" | "AJACCIO" | "ALBI" | "ALENCON" | "AMIENS" | "ANGERS" | "ANGOULEME" | "ANNECY" |
"ANTIBES" | "ARRAS" | "AUBENAS" | "AUCH" | "AURILLAC" | "AUXERRE" | "AVIGNON" | "BAR-LE-DUC" | "BASSE-TERRE" |
"BASTIA" | "BAYONNE" | "BEAUVAIS" | "BELFORT" | "BERGERAC" | "BERNAY" | "BESANCON" | "BEZIERS" | "BLOIS" |
"BOBIGNY" | "BORDEAUX" | "BOULOGNE-SUR-MER" | "BOURG-EN-BRESSE" | "BOURGES" | "BREST" | "BRIEY" | "BRIVE" | "CAEN" |
"CAHORS" | "CANNES" | "CARCASSONNE" | "CASTRES" | "CAYENNE" | "CHALONS-EN-CHAMPAGNE" | "CHALON-SUR-SAONE" | "CHAMBERY" | "CHARTRES" |
"CHATEAUROUX" | "CHAUMONT" | "CHERBOURG" | "CLERMONT-FERRAND" | "COLMAR";

export interface Register {
  id: number;
  name: ListOfRegisterName;
}

export interface APE {  //  types\windev\account.d.ts
  id: number;
  name: string;

  /**Code [APE](https://www.insee.fr/fr/information/2406147). */
  code: string;
}

// GET/exercices et GET/society/exercice renvoient la même chose mais pas au même format. 
// GET/exercices n'est pas dans la doc.
// export interface Exercice {
//   // blocked: boolean; N'apparait pas sur Postman
//   exercice_id: number;
//   start_date: string;
//   end_date: string;

//   /**Label de l'exercice ( N-1, N, N+1 etc..). ??? */
//   label: string;

//   result: number;

//   /**Chiffre d'affaire sur l'exercice. */
//   ca: number;
//   closed: boolean;
//   duration: number;
//   closed_at: null | string;

//   /**ID de la personne qui a clotûré l'exercice. */
//   closed_by: null | number;
// }

// route: GET /society/exercice
export interface Exercice {
  // blocked: boolean; N'apparait pas sur Postman
  exercice_id: number;
  start_date: string;
  end_date: string;

  /**Label de l'exercice ( N-1, N, N+1 etc..). ??? */
  label: string;

  result: number;

  /**Chiffre d'affaire sur l'exercice. */
  ca: number;
  closed: boolean;
  duration: number;
  closed_at: null | string;

  /**ID de la personne qui a clotûré l'exercice. */
  closed_by: null | number;

  /**??? */
  review_model: {
    label: string;
    id_review_model: number;
  }
}

export type CurrentExercice = Omit<Exercice, "exercice_id" | "result" | "review_model"> & {
  id_exercice: number;

  /**Permet de savoir si les A-nouveaux ont été passé. */
  passage_an: boolean;
};

export type UpdatedExercice = CurrentExercice;

export interface CompteEDI {
  mail: string;
  libelle: string;
  id_compte_edi: number;
}

export type ResultRule = CommonField;
export type ComptabilityType = CommonField;
export type ComptabilityHeld = CommonField;

export interface RedirectMails {
  /**Adresse mail de collecte pour les ventes. */
  sales: string;

  /**Adresse mail de collecte pour les achats. */
  purchases: string;

  /**Adresse mail pour les notes de frais. */
  expense_report: string;

  /**Adresse mail de collecte pour les messages et les pièces jointes. */
  message_and_pj: string;
}

export interface AuthorizedEmail {
  id: number;
  society_id: number;
  authorized_email: string;
}

export type WhiteList = AuthorizedEmail[];

export interface HistoryOfSocietyStatus {
  history_status_id: number;
  effective_date: string;
  society_status: {
    society_status_id: number;
    label: ListOfStatus;
  }
}

export interface Users {
  row_numbers: number;
  pages_number: number;
  array_users: User[];
}

export interface User {
  /**Nom et prénom de l'utilisateur. */
  user: string;

  profil: string;
  profil_type: string;
  group_society: Omit<CommonField, "value">;
  id_pers_physique: number;
}

export interface Comptability {
  customer_waiting_account: string;
  accounting_firm_waiting_account: string;
  
  /**Identifiant créancier Sepa. */
  ics: string;

  /**Identifiant du plan comptable de la société. */
  accounting_plan_id: number;

  /**Nombre de caractère max des comptes tiers. */
  max_car_third_p_account: number;

  /**Nombre de caractère max des comptes généraux. */
  max_car_general_account: number;

  auto_complete_account: boolean;

  /**Permet de gérer l'affichage du retard pour rapprochement bancaire. */
  bank_reconciliation_state: boolean;

  /**Délai de règlement client. */
  customer_payment_deadline_id: number;

  /**Délai de règlement fournisseur. */
  provider_payment_deadline_id: number;

  /**Identifiant du type de règlement du client. */
  customer_reglement_type_id: number;

  /**Identifiant du type de règlement du fournisseur. */
  provider_reglement_type_id: number;

  /**Identifiant du journal d'achat par défaut. */
  diary_purchases_id: number;

  /**Identifiant du type de comptabilité. */
  comptability_type_id: number;

  /**Identifiant du journal de vente par défaut. */
  diary_sales_id: number;

  /**Identifiant du journal de note de frais par défaut. */
  expense_report_id: number;

  /**Permet de gérer le lettrage automatique. */
  enable_autolettering: boolean;

  /**Permet de gérer les intégrations bancaire en écriture automatique. */
  enable_RB_autoentries: boolean;

  /**Durée annuelle pour le calcul de l'amortissement. */
  annual_depreciation_period: number;

  /**Identifiant du journal OD par défaut. OD ??? */
  diary_dotation_id: number | null;

  /**Référence Comptabilité en DB. */
  compatbility_type: Omit<CommonField, "value"> & {code: string};

  /**Référence Plan Comptable en DB. */
  accounting_plan: Omit<CommonField, "value">;

  customer_payment_deadline: PaymentDeadline;
  provider_payment_deadline: PaymentDeadline;
  customer_reglement_type: Omit<CommonField, "value">;
  provider_reglement_type: Omit<CommonField, "value">;
  diary_purchases: Omit<CommonField, "value">;
  diary_sales: Omit<CommonField, "value">;

  /**Journal OD. ???*/
  diary_dotation: Omit<CommonField, "value"> | null;

  expense_report: Omit<CommonField, "value">;
  diary_situation_id: Omit<CommonField, "value">;
  account_purchases: Omit<CommonField, "value">;
  account_sales: Omit<CommonField, "value">;
  account_expense_report: Omit<CommonField, "value">;
  wallets: Omit<CommonField, "value">[];
}

export interface Capital {
  historical_id: number;
  date: string;
  capital: number;
  social_part: number;
  social_part_value: number;
}

/**Personne morale. */
export interface SocietyListEntity { //  LegalEntityAsAssociate ???
  society_link_id: number;
  society: SimplifiedCompany;
  signatory_function: Omit<CommonField, "value"> | null;
  start_date: string;
  end_date: string;
  social_part: SocialPart;
}

export interface PhysicalPersonListEntity {  //  PhysicalPerson ???
  physical_person_link_id: number;  // c'est l'id de quoi? Pcq physical_person donne déjà l'id ???
  physical_person: {
    id: number;
    firstname: string;
    name: string;
  };
  function: Omit<CommonField, "value">;
  start_date: string;
  end_date: string | null;  // à voir pour le type null
  social_part: SocialPart;
}

export interface AssociateList {
  physical_person_list: PhysicalPersonListEntity[];
  society_list: SocietyListEntity[];
}

export interface SocietyAssociate {  //  AssociateAndCapital ???
  capital: Capital;
  associate_list: AssociateList;
}

export interface SocialPart {
  PP: number;
  NP: number;
  US: number;
  percent: number;
}

interface SocietyListEntityInFiliale extends Omit<SocietyListEntity, "society"> {
  society: Omit<SimplifiedCompany, "society_id"> & { id: number };
}

export interface Filiale {
  filiale_associate_list: SocietyListEntityInFiliale[];
  // Ou bien:
  // filiale_associate_list: Array<Omit<SocietyListEntity, "society"> & {
  //   society: Omit<SimplifiedCompany, "society_id"> & { id: number };
  // }>;
}

export interface SocietyFromGouvAPI { //  Mélange de Company et CompanyInfo...
  name: string;
  address_number: string;
  address_bis: string;
  street_name: string;
  postal_code: string;
  city: Omit<CommonField, "id">;
  
  /**Numéro de TVA Intracommunautaire (caluclable depuis SIREN/SIRET). */
  tva_intraco: string;

  country: string;

  /**Forme juridique de la société. */
  form: string;

  registration_date: string;
  road_type: CommonField;

  /**Code [APE](https://www.insee.fr/fr/information/2406147). */
  ape: CommonField;

  activity: string;
}

export interface Employee extends Omit<PhysicalPersonListEntity, "social_part"> {
  signatory_function: Omit<CommonField, "value">;
}

interface FiscalFileGenericField extends CommonField {
  /**Date du dernier changement de statut de la société. */
  effective_date: string;
}

export interface FiscalFile {
  /**Code Référence d'Obligation Fiscale (ROF) de la TVA */
  rof_tva: string;

  /**Code Référence d'Obligation Fiscale (ROF) Transfert des Données Fiscales et Comptables (TDFC). */
  rof_tdfc: string;

  /**Code Référence d'Obligation Fiscale (ROF) de Cotisation Fonciere des Entreprise (CFE). */
  rof_cfe: string;

  /**Code Référence d'Obligation Fiscale (ROF) de la Cotisation sur la Valeur Ajoutée des Entreprises (CVAE). */
  rof_cvae: string;

  /**Numéro de TVA intracommunautaire (calculable via SIREN/SIRET + pays). */
  tva_intraco: string;

  /**Jour d'échéance de la TVA. */
  due_date_tva: number;

  adherent_code: string;

  /**Indique si c'est un mono établissement au sens de la CVAE. */
  mono_etab: boolean;

  /**Cloture automatique lors de l'envoi EDI TVA. */
  close_entries_VAT: boolean;

  /**Adresse mail de contact pour les liasses fiscales. */
  mail_liasse: string;

  /**Référence régime d'imposition. */
  sheet_group: CommonField;

  /**Référence bilan société. */
  bilan: CommonField;

  /**??? */
  regime_impot: CommonField;

  /**Régime TVA. */
  vat_regime: CommonField;

  gestion_center: CommonField;

  /**??? */
  info_bnc: {
    info_bnc_id: number;
    membership_year: string | null;
    activity_code_pm: string | null;
  };

  society_status: FiscalFileGenericField;
}

export interface RegimeImpot {
  id: number;
  name: string;
  code: string;
}

export interface DiaryType {
  ACH: 1,
  VTE: 2,
  BQ: 3,
  CAISSE: 4,
  OD: 5,
  OD_AUDIT: 7,
  A_EXT: 8,
  EXT: 9,
  AN: 10,
  OD_PAIE: 11,
  OD_LET: 12,
  NDF: 13,
  OD_DECL_FISCALE: 14,
  OD_EXC: 15
}

export interface Diary<T = DiaryType> {
  code: string;
  name: string;
  closed: boolean;
  account: null | {
    id: number;
    label: string;
    number: string;
  };
  blocked: boolean;
  diary_id: number;
  diary_type_id: T[keyof T];
  diary_type_code: keyof T;
  diary_type_name: string;
}
