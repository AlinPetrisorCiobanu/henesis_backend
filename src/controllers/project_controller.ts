import type { Request, Response } from 'express';
import { ProjectService } from "../services/project_services.js";

export const createProject = async (req: Request, res: Response) => {

  try {

    const project = await ProjectService.createProject(req.body);

    res.status(201).json(project);

  } catch (error) {

    res.status(500).json({ error: "Error creating project" });

  }

};

export const getProjects = async (req: Request, res: Response) => {

  const projects = await ProjectService.getProjects();

  res.json(projects);

};

export const getProjectById = async (req: Request, res: Response) => {

  const project = await ProjectService.getProjectById(Number(req.params.id));

  if (!project) {
    return res.status(404).json({ error: "Project not found" });
  }

  res.json(project);

};

export const updateProject = async (req: Request, res: Response) => {

  const project = await ProjectService.updateProject(
    Number(req.params.id),
    req.body
  );

  res.json(project);

};

export const deleteProject = async (req: Request, res: Response) => {

  await ProjectService.deleteProject(Number(req.params.id));

  res.status(204).send();

};