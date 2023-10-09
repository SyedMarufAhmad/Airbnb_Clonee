import { InputJsonValue } from "../../types";
import { ListingUpdateManyWithoutUsersInput } from "./ListingUpdateManyWithoutUsersInput";
import { WhishlistUpdateManyWithoutUsersInput } from "./WhishlistUpdateManyWithoutUsersInput";
import { TripUpdateManyWithoutUsersInput } from "./TripUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  password?: string;
  roles?: InputJsonValue;
  listings?: ListingUpdateManyWithoutUsersInput;
  whishlists?: WhishlistUpdateManyWithoutUsersInput;
  trips?: TripUpdateManyWithoutUsersInput;
};
