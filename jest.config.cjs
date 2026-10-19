module.exports = {
	preset: 'ts-jest',
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
	moduleNameMapper: {
		'^lodash-es$': '<rootDir>/node_modules/lodash/index.js',
		'\\.(jpg|jpeg|png|svg)$': '<rootDir>/src/__mocks__/fileMock.js',
		'\\.(css|scss)$': '<rootDir>/src/__mocks__/styleMock.js',
	},
	testEnvironment: 'jsdom',
};
