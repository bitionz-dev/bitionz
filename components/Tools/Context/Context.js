import React from 'react';

export const LayoutContext = React.createContext({
    showLowerSearchSection: false,
    showDrawerMenu: false,
    showFilters: false,
    setShowFilters: () => {},
    setShowDrawerMenu: () => {},
    setShowLowerSearchSection: () => {},
    filters: {
        blockchains: [],
        setBlockchains: () => {},
        types: [],
        setTypes: () => {},
        nft: false,
        setNft: () => {},
    },
    tokens: []
});