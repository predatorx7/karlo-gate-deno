import dinosaur from "./dinosaur/resolvers.ts";

export const resolvers = {
  Query: {
    dinosaurs: dinosaur.dinosaurs,
    dinosaur: dinosaur.dinosaur,
  },
};
