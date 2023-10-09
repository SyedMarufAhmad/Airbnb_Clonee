import { InputJsonValue } from "../../types";
import { ListingCreateNestedManyWithoutUsersInput } from "./ListingCreateNestedManyWithoutUsersInput";
import { WhishlistCreateNestedManyWithoutUsersInput } from "./WhishlistCreateNestedManyWithoutUsersInput";
import { TripCreateNestedManyWithoutUsersInput } from "./TripCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  password: string;
  roles: InputJsonValue;
  listings?: ListingCreateNestedManyWithoutUsersInput;
  whishlists?: WhishlistCreateNestedManyWithoutUsersInput;
  trips?: TripCreateNestedManyWithoutUsersInput;
};
