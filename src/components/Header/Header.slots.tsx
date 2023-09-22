import React, { FC, ReactNode } from 'react';

/**
 * @deprecated use HeaderTopRowLeft instead
 */
export const HeaderTags: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>;

/**
 * @deprecated use HeaderMiddleRowLeft instead
 */
export const HeaderRow: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>;

/**
 * @deprecated use HeaderMiddleRowRight instead
 */
export const HeaderButtons: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>;

/**
 * @deprecated use HeaderBottomRowLeft instead
 */
export const HeaderAvatar: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>;

export const HeaderTopRowLeft: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>;
export const HeaderTopRowRight: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>;
export const HeaderMiddleRowLeft: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>;
export const HeaderMiddleRowRight: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>;
export const HeaderBottomRowLeft: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>;
export const HeaderBottomRowRight: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>;
