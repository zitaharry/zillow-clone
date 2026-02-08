import type { SchemaTypeDefinition } from "sanity";
import { agent } from "./agent";
import { amenity } from "./amenity";
import { property } from "./property";
import { lead } from "./lead";
import { user } from "./user";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [property, agent, lead, user, amenity],
};
