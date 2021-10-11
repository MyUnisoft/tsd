// Import Third-Party dependencies
import { Except, SetOptional } from "type-fest";

export interface MemberGroup {
  member_group_id: string;
  label: string;
}

export interface Account {
  /** Internal (postgres incremented) account id */
  account_id: number;

  /** Account number (or class). Example: 411FOOBAR */
  account_number: string;

  /** Account name */
  label: string;
  counterpart_account?: AccountNoCp | null;
}

export type AccountNoCp = Except<Account, "counterpart_account">;

export type MemberGroupHash = Record<string, SetOptional<MemberGroup, "member_group_id">>;
