import React from 'react';

export const withRichText = (story: Function) => <div className="c-content">{story()}</div>;
