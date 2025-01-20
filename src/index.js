import { model } from "./model";
import { renderProjects } from "./view/project";
import "./index.css";




renderProjects({projects: model.projects,activeProject: model.projects[model.activeProject]} );