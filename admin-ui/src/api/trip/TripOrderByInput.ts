import { SortOrder } from "../../util/SortOrder";

export type TripOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  listingId?: SortOrder;
  tripInfo?: SortOrder;
};
