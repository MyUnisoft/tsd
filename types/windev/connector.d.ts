export type Label = 
"OCR MyUnisoft" | "OCR Premium" | "Silae" | "EDOC" | "JEPILOTE" | "YOOZ" | "EBP" | "Tipisoft" | "Tiime" |
"Imbolc Systems" | "Quickbooks" | "IDOCUS" | "Qonto" | "Jenji" | "EMASPHERE" | "Agora" | "TransferBanque" | "Smartisi " |
"Skwarel " | "MYCOMPANYFILES" | "TBC Solutions" | "AXONAUT" | "AUCTAM" | "REGATE" | "EXACT" | "Evoliz" | "LEANPAY" |
"FACTOMOS" | "RCA" | "YTEMS" | "INTIA" | "GCOLLECT" | "NewLogUp" | "Dext" | "INFast";

export interface Connector {
  id_connector: number;
  id_society: number;
  nom_ste: string;
  id_third_party_api: number;
  code: string | null;
  complementary_information: string | null;
  label: Label;
  password: string | null;
}
