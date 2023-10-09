import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ListingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"listings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="locationType" source="locationType" />
        <TextField label="placeType" source="placeType" />
        <TextField label="mapData" source="mapData" />
        <TextField label="locationData" source="locationData" />
        <TextField label="placeSpace" source="placeSpace" />
        <TextField label="placeAmeneties" source="placeAmeneties" />
        <TextField label="photos" source="photos" />
        <ReferenceField
          label="listingCreatedBy"
          source="user.id"
          reference="User"
        >
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="title" source="title" />
        <TextField label="description" source="description" />
        <TextField label="price" source="price" />
      </Datagrid>
    </List>
  );
};
