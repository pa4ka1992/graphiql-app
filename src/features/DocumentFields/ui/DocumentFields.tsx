import { FC } from 'react';
import { uid } from 'uid';
import { IntrospectionType } from 'graphql';
import { Box, Divider } from '@mui/material';
import { DocumentTypeHeader, DocumentTypeRow } from 'entities';
import { isIntrospectionInterfaceType, isIntrospectionObjectType, sortAlphabetArray } from 'shared';

export const DocumentFields: FC<{ currentType?: IntrospectionType }> = ({ currentType }) => {
  if (isIntrospectionObjectType(currentType) || isIntrospectionInterfaceType(currentType)) {
    return (
      <Box>
        <DocumentTypeHeader>Fields</DocumentTypeHeader>

        {sortAlphabetArray(currentType.fields).map((field) => (
          <DocumentTypeRow key={uid()} name={field.name} type={field.type} />
        ))}

        <Divider variant="middle" sx={{ marginTop: 1 }} />
      </Box>
    );
  }

  return null;
};
