import { times } from 'lodash-es';

import { KeyValuePairs } from './KeyValueEditor';
import translations from './nl.json';

export const DATA_ARRAY_MOCK: KeyValuePairs = times(200).map((index) => [
	`path-to-file___key ${index}`,
	`value${index}`,
]);

export const DATA_OBJ_MOCK = translations as { [key: string]: string };
