import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";

export type WhishlistCreateInput = {
  user: UserWhereUniqueInput;
  listing: ListingWhereUniqueInput;
};
