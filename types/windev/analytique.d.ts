import { Except, RequireAtLeastOne } from "type-fest";

//
// AXES

export interface Axe {  //  types\windev\society.d.ts - L:187
  id_axe: number;
  code: string;
  label: string;
  id_societe: number;
  id_section_default?: number;
}

export interface ParamsToCreateAxe {
  code: string;
  label: string;
  id_section_default?: number;
}

export type ParamsToUpdateAxe = RequireAtLeastOne<Partial<ParamsToCreateAxe>>;

export interface InfoFromDefaultSectionFromOneAxe { //  Route sur Postman uniquement.
  id_section_analytique: number;
  code: string;
  label: string;
  id_axe: number;
}

//
// SECTIONS

export interface Section {  // types\windev\society.d.ts - L:201 (Updated: add Section.closed)
  id_section_analytique: number;
  code: string;
  label: string;
  id_axe: number;
  account: string;
  closed: boolean;
  isdefault: boolean;
}

export interface ParamsToCreateSection {
  code: string;
  label?: string;
  id_section_default?: number;
}

interface UpdateSection {
  code?: string;
  label?: string;
  account?: string;
  closed?: boolean;
}

export type ParamsToUpdateSection = RequireAtLeastOne<UpdateSection>;

/**
 * Retourné après la création d'une Section ou la modification d'une Section existante.
 */
export type UpdatedSection = Except<Section, "isdefault">;

//
// REPARTITION KEYS

export interface RepartitionKey {
  id_repartition_key: number;
  key: string;
  condition: string;
  id_axe: number;
}

//  Param identique pour créer et modifier: https://myunisoft.atlassian.net/wiki/spaces/MYUNISOFT/pages/1160544295/Cle+de+repartition
export interface ParamsToCreateOrUpdateRepartionKey {
  key?: string;
  condition?: string;
}

export interface ParamsRepartitionAuto {
  id_section: number;
  rate: number;
}
