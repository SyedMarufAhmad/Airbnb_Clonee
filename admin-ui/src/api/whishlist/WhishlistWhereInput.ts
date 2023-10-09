import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";

export type WhishlistWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  listing?: ListingWhereUniqueInput;
};
