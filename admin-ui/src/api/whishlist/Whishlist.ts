import { User } from "../user/User";
import { Listing } from "../listing/Listing";

export type Whishlist = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User;
  listing?: Listing;
};
