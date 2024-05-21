import { v4 } from "uuid";

export const idGenerator = (project_name) => {
  if (!project_name) return false;
  let projectName = project_name.split(" ");
  let firstSection = projectName[0].trim().toLowerCase();
  let secondSection = v4().substr(0, 4);
  let combinedID = firstSection + "_" + secondSection;

  return combinedID;
};
