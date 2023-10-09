import { User } from "../user/User";
import { Listing } from "../listing/Listing";
import { JsonValue } from "type-fest";

export type Trip = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User;
  listing?: Listing;
  tripInfo: JsonValue;
};
