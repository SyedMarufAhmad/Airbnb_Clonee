import { SortOrder } from "../../util/SortOrder";

export type ListingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  locationType?: SortOrder;
  placeType?: SortOrder;
  mapData?: SortOrder;
  locationData?: SortOrder;
  placeSpace?: SortOrder;
  placeAmeneties?: SortOrder;
  photos?: SortOrder;
  listingCreatedById?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  price?: SortOrder;
};
