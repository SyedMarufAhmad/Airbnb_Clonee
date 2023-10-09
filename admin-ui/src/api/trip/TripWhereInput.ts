import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";

export type TripWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  listing?: ListingWhereUniqueInput;
  tripInfo?: JsonFilter;
};
