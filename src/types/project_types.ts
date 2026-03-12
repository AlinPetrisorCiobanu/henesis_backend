export interface Project {
  id_project?: number;
  nombre: string;
  data: string;
  direction: string;
  details: string;
  id_user: number;

  created_at?: Date;
  modified_at?: Date;
  deleted_at?: Date | null;
}