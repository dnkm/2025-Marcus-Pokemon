import { GameClient } from "pokenode-ts";

export const load = async () => {
  const api = new GameClient(); // create a GameClient
  const generations = await api.listGenerations(); // fetch list of generations
  const versionGroups = await api.listVersionGroups(); // fetch list of version groups
  const versions = await api.listVersions(); // fetch list of versions

  return {
    generations,
    versionGroups,
    versions,
  };
};
