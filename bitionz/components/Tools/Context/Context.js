import React from 'react';

export const LayoutContext = React.createContext({
    showLowerNavBar: false,
    showDrawerMenu: false,
    setShowDrawerMenu: () => {},
    setShowLowerNavBar: () => {},
    tokens: []
});