// Import Third-Party dependencies
import { Except } from "type-fest";

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
  counterpart_account?: Except<Account, "counterpart_account"> | null;
}
