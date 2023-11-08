export const baseDeck = {
  playerCount: {
    1: {
      tier1: Array(4).fill("Base (Tier 1)", 0, 1).fill("Unique (Tier 1)", 1, 4),
      tier2: Array(6).fill("Base", 0, 3).fill("Unique (Tier 2)", 3, 6),
      tier3: Array(10).fill("Base", 0, 7).fill("Unique (Tier 3)", 7, 10),
    },
    2: {
      tier1: Array(6).fill("Base (Tier 1)", 0, 3).fill("Unique (Tier 1)", 3, 6),
      tier2: Array(8).fill("Base (Tier 2)", 0, 5).fill("Unique (Tier 2)", 5, 8),
      tier3: Array(10).fill("Base (Tier 3)", 0, 7).fill("Unique (Tier 3)", 7, 10),
    },
    3: {
      tier1: Array(8).fill("Base (Tier 1)", 0, 5).fill("Unique (Tier 1)", 5, 8),
      tier2: Array(9).fill("Base (Tier 2)", 0, 6).fill("Unique (Tier 2)", 6, 9),
      tier3: Array(10).fill("Base (Tier 3)", 0, 7).fill("Unique (Tier 3)", 7, 10),
    },
    4: {
      tier1: Array(11).fill("Base (Tier 1)", 0, 8).fill("Unique (Tier 1)", 8, 11),
      tier2: Array(10).fill("Base (Tier 2)", 0, 7).fill("Unique (Tier 2)", 7, 10),
      tier3: Array(10).fill("Base (Tier 3)", 0, 7).fill("Unique (Tier 3)", 7, 10),
    },
  },
};

export const expeditionDeck = {
  battle2: {
    playerCount: {
      1: {
        tier1: [...baseDeck.playerCount[1].tier1].fill("Upgraded (Tier 1)", 0, 1),
        tier2: [...baseDeck.playerCount[1].tier2].fill("Upgraded (Tier 2)", 0, 3),
        tier3: [...baseDeck.playerCount[1].tier3].fill("Upgraded (Tier 3)", 0, 3),
      },
      2: {
        tier1: [...baseDeck.playerCount[2].tier1].fill("Upgraded (Tier 1)", 0, 1),
        tier2: [...baseDeck.playerCount[2].tier2].fill("Upgraded (Tier 2)", 0, 3),
        tier3: [...baseDeck.playerCount[2].tier3].fill("Upgraded (Tier 3)", 0, 3),
      },
      3: {
        tier1: [...baseDeck.playerCount[3].tier1].fill("Upgraded (Tier 1)", 0, 1),
        tier2: [...baseDeck.playerCount[3].tier2].fill("Upgraded (Tier 2)", 0, 3),
        tier3: [...baseDeck.playerCount[3].tier3].fill("Upgraded (Tier 3)", 0, 3),
      },
      4: {
        tier1: [...baseDeck.playerCount[4].tier1].fill("Upgraded (Tier 1)", 0, 1),
        tier2: [...baseDeck.playerCount[4].tier2].fill("Upgraded (Tier 2)", 0, 3),
        tier3: [...baseDeck.playerCount[4].tier3].fill("Upgraded (Tier 3)", 0, 3),
      },
    },
  },
  battle3: {
    playerCount: {
      1: {
        tier1: [...baseDeck.playerCount[1].tier1].fill("Upgraded (Tier 1)", 0, 1),
        tier2: [...baseDeck.playerCount[1].tier2].fill("Upgraded (Tier 2)", 0, 3),
        tier3: [...baseDeck.playerCount[1].tier3].fill("Upgraded (Tier 3)", 0, 5),
      },
      2: {
        tier1: [...baseDeck.playerCount[2].tier1].fill("Upgraded (Tier 1)", 0, 2),
        tier2: [...baseDeck.playerCount[2].tier2].fill("Upgraded (Tier 2)", 0, 4),
        tier3: [...baseDeck.playerCount[2].tier3].fill("Upgraded (Tier 3)", 0, 5),
      },
      3: {
        tier1: [...baseDeck.playerCount[3].tier1].fill("Upgraded (Tier 1)", 0, 2),
        tier2: [...baseDeck.playerCount[3].tier2].fill("Upgraded (Tier 2)", 0, 4),
        tier3: [...baseDeck.playerCount[3].tier3].fill("Upgraded (Tier 3)", 0, 5),
      },
      4: {
        tier1: [...baseDeck.playerCount[4].tier1].fill("Upgraded (Tier 1)", 0, 2),
        tier2: [...baseDeck.playerCount[4].tier2].fill("Upgraded (Tier 2)", 0, 4),
        tier3: [...baseDeck.playerCount[4].tier3].fill("Upgraded (Tier 3)", 0, 5),
      },
    },
  },
  battle4: {
    playerCount: {
      1: {
        tier1: [...baseDeck.playerCount[1].tier1].fill("Upgraded (Tier 1)", 0, 1),
        tier2: [...baseDeck.playerCount[1].tier2].fill("Upgraded (Tier 2)", 0, 3),
        tier3: [...baseDeck.playerCount[1].tier3].fill("Upgraded (Tier 3)", 0, 7),
      },
      2: {
        tier1: [...baseDeck.playerCount[2].tier1].fill("Upgraded (Tier 1)", 0, 3),
        tier2: [...baseDeck.playerCount[2].tier2].fill("Upgraded (Tier 2)", 0, 5),
        tier3: [...baseDeck.playerCount[2].tier3].fill("Upgraded (Tier 3)", 0, 7),
      },
      3: {
        tier1: [...baseDeck.playerCount[3].tier1].fill("Upgraded (Tier 1)", 0, 3),
        tier2: [...baseDeck.playerCount[3].tier2].fill("Upgraded (Tier 2)", 0, 5),
        tier3: [...baseDeck.playerCount[3].tier3].fill("Upgraded (Tier 3)", 0, 7),
      },
      4: {
        tier1: [...baseDeck.playerCount[4].tier1].fill("Upgraded (Tier 1)", 0, 3),
        tier2: [...baseDeck.playerCount[4].tier2].fill("Upgraded (Tier 2)", 0, 5),
        tier3: [...baseDeck.playerCount[4].tier3].fill("Upgraded (Tier 3)", 0, 7),
      },
    },
  },
};