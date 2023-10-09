import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ListingListRelationFilter } from "../listing/ListingListRelationFilter";
import { WhishlistListRelationFilter } from "../whishlist/WhishlistListRelationFilter";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  listings?: ListingListRelationFilter;
  whishlists?: WhishlistListRelationFilter;
  trips?: TripListRelationFilter;
};
