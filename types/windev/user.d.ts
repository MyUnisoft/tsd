export interface PhysicalPerson {
  name: string;
  actif: boolean;
  civility: GenericField;
  firstname: string;
  coordonnee?: PhysicalPersonDetail[];
  company_number: number;
  pers_physique_id: number;
  physical_person_type?: GenericField;
  city?: string;
  address?: string;
  comment?: string;
  company?: Company[];
  road_type?: GenericField;
  city_birth?: string;
  maiden_name?: string;
  postal_code?: string;
  country_birth?: string;
  address_number?: string;
  country_address?: string;
  department_birth?: string;
  address_complement?: string;
  address_repetition?: string;
  social_security_number?: string;
  marital_situation?: GenericField;
  organism?: string;
  date_birth?: string;
  matrimonial_regime?: GenericField;
}

interface GenericField {
  id?: number;
  label?: string;
  value?: string;
}

interface PhysicalPersonDetail {
  id: number;
  type: GenericField;
  value: string;
  label?: string;
}

interface Company {
  society_id: number;
  society_name: string;
}

export interface UsersResponse {
  bdelete: number;
  user_array: User[];
}

interface User {
  tel: string | null;
  mail: UserPersonalDetail | null;
  name: string;
  badmin: boolean;
  tel_fix: UserPersonalDetail | null;
  user_id: number;
  civility: string | null;
  firstname: string;
  groupslst: Group[];
  id_profil: number;
  access_list: AccessList[];
  civility_id: number | null;
  maiden_name: string | null;
  safe_status: boolean;
  tel_portable: UserPersonalDetail | null;
  id_type_profil: number;
  libelle_profil: string;
  display_safe_choice: boolean;
  libelle_type_profil: string;
}

interface AccessList {
  label: string | null;
  siret: string | null;
  acces_id: number;
  profil_id: number;
  wallet_id: number | null;
  society_id: number | null;
  profil_name: string;
  wallet_label: string | null;
  id_type_profil: number;
  libelle_type_profil: string;
}

interface Group {
  fonctions: string;
  id_fonction: number;
  id_l_users_groups_pers_physique: number;
}

interface UserPersonalDetail {
  id: number;
  coordonnee: string;
}
