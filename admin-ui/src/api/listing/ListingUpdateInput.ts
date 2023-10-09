import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WhishlistUpdateManyWithoutListingsInput } from "./WhishlistUpdateManyWithoutListingsInput";
import { TripUpdateManyWithoutListingsInput } from "./TripUpdateManyWithoutListingsInput";

export type ListingUpdateInput = {
  locationType?: string;
  placeType?: string;
  mapData?: InputJsonValue;
  locationData?: InputJsonValue;
  placeSpace?: InputJsonValue;
  placeAmeneties?: InputJsonValue;
  photos?: InputJsonValue;
  listingCreatedBy?: UserWhereUniqueInput;
  title?: string;
  description?: string;
  price?: number;
  whishlists?: WhishlistUpdateManyWithoutListingsInput;
  trips?: TripUpdateManyWithoutListingsInput;
};
