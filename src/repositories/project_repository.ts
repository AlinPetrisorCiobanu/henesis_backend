import db from "../config/db.js";
import type { Project } from "../types/project_types.js";

export const ProjectRepository = {

  async create(project: Project): Promise<Project> {

    const [id] = await db<Project>("projects").insert(project);

    const newProject = await db<Project>("projects")
      .where({ id_project: id! })
      .first();

    return newProject!;
  },

  async findAll(): Promise<Project[]> {

    return db<Project>("projects")
      .whereNull("deleted_at")
      .select("*");

  },

  async findById(id_project: number): Promise<Project | null> {

    const project = await db<Project>("projects")
      .where({ id_project })
      .whereNull("deleted_at")
      .first();

    return project || null;

  },

  async update(id_project: number, data: Partial<Project>): Promise<Project | null> {

    await db<Project>("projects")
      .where({ id_project })
      .update({
        ...data,
        modified_at: db.fn.now()
      });

    const updatedProject = await db<Project>("projects")
      .where({ id_project })
      .first();

    return updatedProject || null;

  },

  async softDelete(id_project: number): Promise<void> {

    await db<Project>("projects")
      .where({ id_project })
      .update({
        deleted_at: db.fn.now()
      });

  }

};