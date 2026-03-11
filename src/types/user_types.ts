export interface User {
  id_user?: number; // Opcional al crear
  nombre: string;
  apellidos: string;
  telefono?: string | null;
  email: string;
  user: string;
  password: string;
  created_at?: Date;
  modified_at?: Date;
  deleted_at?: Date | null;
}