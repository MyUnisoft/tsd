export {
  Information
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
