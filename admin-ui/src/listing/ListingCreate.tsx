import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { WhishlistTitle } from "../whishlist/WhishlistTitle";
import { TripTitle } from "../trip/TripTitle";

export const ListingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="locationType" source="locationType" />
        <TextInput label="placeType" source="placeType" />
        <div />
        <div />
        <div />
        <div />
        <div />
        <ReferenceInput
          source="listingCreatedBy.id"
          reference="User"
          label="listingCreatedBy"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="title" source="title" />
        <TextInput label="description" multiline source="description" />
        <NumberInput label="price" source="price" />
        <ReferenceArrayInput
          source="whishlists"
          reference="Whishlist"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WhishlistTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="trips"
          reference="Trip"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TripTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
