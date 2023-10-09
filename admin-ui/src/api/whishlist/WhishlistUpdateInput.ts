import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";

export type WhishlistUpdateInput = {
  user?: UserWhereUniqueInput;
  listing?: ListingWhereUniqueInput;
};
