export interface Book {
  id: number;
  title: string;
  summary: string;
  author_id: number;
  created_at: string;
  updated_at: string;
}


export interface BookData {
  id?: number;
  title: string;
  summary: string;
  author_id: number | null;
  created_at?: string;
  updated_at?: string;
}
