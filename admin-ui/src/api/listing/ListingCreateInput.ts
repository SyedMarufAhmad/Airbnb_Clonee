import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WhishlistCreateNestedManyWithoutListingsInput } from "./WhishlistCreateNestedManyWithoutListingsInput";
import { TripCreateNestedManyWithoutListingsInput } from "./TripCreateNestedManyWithoutListingsInput";

export type ListingCreateInput = {
  locationType: string;
  placeType: string;
  mapData: InputJsonValue;
  locationData: InputJsonValue;
  placeSpace: InputJsonValue;
  placeAmeneties: InputJsonValue;
  photos?: InputJsonValue;
  listingCreatedBy: UserWhereUniqueInput;
  title: string;
  description: string;
  price: number;
  whishlists?: WhishlistCreateNestedManyWithoutListingsInput;
  trips?: TripCreateNestedManyWithoutListingsInput;
};
