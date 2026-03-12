import { ProjectRepository } from "../repositories/project_repository.js";
import type { Project } from "../types/project_types.js";

export const ProjectService = {

  async createProject(project: Project): Promise<Project> {

    return ProjectRepository.create(project);

  },

  async getProjects(): Promise<Project[]> {

    return ProjectRepository.findAll();

  },

  async getProjectById(id_project: number): Promise<Project | null> {

    return ProjectRepository.findById(id_project);

  },

  async updateProject(id_project: number, data: Partial<Project>) {

    return ProjectRepository.update(id_project, data);

  },

  async deleteProject(id_project: number): Promise<void> {

    await ProjectRepository.softDelete(id_project);

  }

};