import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type TripCreateInput = {
  user: UserWhereUniqueInput;
  listing: ListingWhereUniqueInput;
  tripInfo: InputJsonValue;
};
