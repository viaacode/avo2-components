export interface Colors {
	[key: string]: ColorCategory;
}

export interface ColorCategory {
	[key: string]: string;
}

export const COLORS: Colors = {
	GRAYSCALE: {
		50: '#EDEFF2',
		100: '#D6DEE3',
		150: '#BAC7D1',
		200: '#9CAFBD',
		300: '#7894A7',
		400: '#557891',
		500: '#45647B',
		600: '#385265',
		700: '#2B414F',
		800: '#1D2B35',
		900: '#0F171D',
	},
	PRIMARY: {
		ORANGE: '#F96830',
		BLUE: '#3A586F',
		LIGHT_GRAY: '#DBDBDB',
		SKY_BLUE: '#3FB1D6',
	},
	SECONDARY: {
		GREEN_200: '#5AD6BB',
		GREEN_500: '#1FC5A0',
		RED_200: '#FF5B7A',
		RED_500: '#FF1744',
		ORANGE: '#D03F06',
		OCEAN_GREEN: '#57C2A0',
		JUNIPER: '#678588',
		SOFT_BLUE: '#7CAACF',
	},
};
