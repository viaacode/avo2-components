import { Avo } from '@viaa/avo2-types';
import { IconNameSchema } from '../../Icon/Icon.types.js';
import { MetaData } from '../MetaData.js';
import { MetaDataItem } from './MetaDataItem.js';

export default {
  title: 'components/MetaDataItem',

  parameters: {
    jest: ['MetaDataItem'],
  },
};

export const _MetaDataItem = () => (
  <MetaData category={Avo.ContentType.English.VIDEO}>
    <MetaDataItem label="VRT" />
  </MetaData>
);

_MetaDataItem.story = {
  name: 'Meta data item',
};

export const MetaDataItemWithIcon = () => (
  <MetaData category={Avo.ContentType.English.AUDIO}>
    <MetaDataItem icon={IconNameSchema.headphone} label="768" />
  </MetaData>
);

MetaDataItemWithIcon.story = {
  name: 'Meta data item with icon',
};
