import type { Concrete } from "../../types/types";

export interface AuthorData {
  id?: number;
  name: string;
  created_at?: string;
  updated_at?: string;
}

export type Author = Concrete<AuthorData>;