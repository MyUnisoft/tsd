import { Except } from "type-fest";

//
// AXES

export interface Axe {
  id_axe: number;
  code: string;
  label: string;
  id_societe: number;
  id_section_default?: number;
}

export interface InfoFromDefaultSectionFromOneAxe {
  id_section_analytique: number;
  code: string;
  label: string;
  id_axe: number;
}

//
// SECTIONS

export interface Section {
  id_section_analytique: number;
  code: string;
  label: string;
  id_axe: number;
  account: string;
  closed: boolean;
  isdefault: boolean;
}

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

export type RepartitionKeys = RepartitionKey[];

export interface RateOfRepartitionKey {
  id_section_from_key: number;
  id_section: number;
  id_repartition_key: number;
  rate: number;
}

export type RateOfRepartitionKeyArray = RateOfRepartitionKey[];

export interface RepartitionInfo {
  code: string;
  rate: number;
  label: string;
  amount: number;
  id_section: number;
  id_reparition: null;  //  ???
}

export interface Repartition {
  id_axe: number;
  code: string;
  label: string;
  repartition : RepartitionInfo[];
}

export type Repartitions = Repartition;
