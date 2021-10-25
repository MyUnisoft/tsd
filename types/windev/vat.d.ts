//  regular.d.ts ?

// Import Internal Dependencies
import { Account } from "../regular";

// Import Third-Party dependencies
import { Except } from "type-fest";


// Utilisé dans ./account.d.ts uniquement.
// Pas trouvé de modèle sur Postman.
// Pas trouvé de référence sur Confluence ni sur la doc partenaires.
// vérifier que vat_type === VatType (GET/vat_param/vat_type)
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
  label: string;
}

export interface VatExigility {
  id: number;
  label: string;
}

export interface VatRegime {
  id: number;
  name: string;
  code: string;
}
