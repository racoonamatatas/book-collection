import type { NonNullConcrete } from "../../types/types";

export interface BookData {
  id?: number;
  title: string;
  summary: string;
  author_id: number | null;
  created_at?: string;
  updated_at?: string;
}

// Properties cannot be optional nor nullable.
export type Book = NonNullConcrete<BookData>;