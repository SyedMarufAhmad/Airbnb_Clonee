import { JsonValue } from "type-fest";
import { Listing } from "../listing/Listing";
import { Whishlist } from "../whishlist/Whishlist";
import { Trip } from "../trip/Trip";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  roles: JsonValue;
  listings?: Array<Listing>;
  whishlists?: Array<Whishlist>;
  trips?: Array<Trip>;
};
