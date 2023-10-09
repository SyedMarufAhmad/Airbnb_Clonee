import { SortOrder } from "../../util/SortOrder";

export type WhishlistOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  listingId?: SortOrder;
};
