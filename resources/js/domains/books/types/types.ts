import type { NonNullConcrete } from "../../types/types";

export interface BookData {
  id?: number;
  title: string;
  summary: string;
  author_id: number | null;
  created_at?: string;
  updated_at?: string;
}

export type Book = NonNullConcrete<BookData>;