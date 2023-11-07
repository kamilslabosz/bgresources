export const baseDeck = {
  playerCount: {
    1: {
      tier1: Array(4).fill("base", 0, 1).fill("unique", 1, 4),
      tier2: Array(6).fill("base", 0, 3).fill("unique", 3, 6),
      tier3: Array(10).fill("base", 0, 7).fill("unique", 7, 10),
    },
    2: {
      tier1: Array(6).fill("base", 0, 3).fill("unique", 3, 6),
      tier2: Array(8).fill("base", 0, 5).fill("unique", 5, 8),
      tier3: Array(10).fill("base", 0, 7).fill("unique", 7, 10),
    },
    3: {
      tier1: Array(8).fill("base", 0, 5).fill("unique", 5, 8),
      tier2: Array(9).fill("base", 0, 6).fill("unique", 6, 9),
      tier3: Array(10).fill("base", 0, 7).fill("unique", 7, 10),
    },
    4: {
      tier1: Array(11).fill("base", 0, 8).fill("unique", 8, 11),
      tier2: Array(10).fill("base", 0, 7).fill("unique", 7, 10),
      tier3: Array(10).fill("base", 0, 7).fill("unique", 7, 10),
    },
  },
};

export const expeditionDeck = {
  battle2: {
    playerCount: {
      1: {
        tier1: [...baseDeck.playerCount[1].tier1].fill("upgraded", 0, 1),
        tier2: [...baseDeck.playerCount[1].tier2].fill("upgraded", 0, 3),
        tier3: [...baseDeck.playerCount[1].tier3].fill("upgraded", 0, 3),
      },
      2: {
        tier1: [...baseDeck.playerCount[2].tier1].fill("upgraded", 0, 1),
        tier2: [...baseDeck.playerCount[2].tier2].fill("upgraded", 0, 3),
        tier3: [...baseDeck.playerCount[2].tier3].fill("upgraded", 0, 3),
      },
      3: {
        tier1: [...baseDeck.playerCount[3].tier1].fill("upgraded", 0, 1),
        tier2: [...baseDeck.playerCount[3].tier2].fill("upgraded", 0, 3),
        tier3: [...baseDeck.playerCount[3].tier3].fill("upgraded", 0, 3),
      },
      4: {
        tier1: [...baseDeck.playerCount[4].tier1].fill("upgraded", 0, 1),
        tier2: [...baseDeck.playerCount[4].tier2].fill("upgraded", 0, 3),
        tier3: [...baseDeck.playerCount[4].tier3].fill("upgraded", 0, 3),
      },
    },
  },
  battle3: {
    playerCount: {
      1: {
        tier1: [...baseDeck.playerCount[1].tier1].fill("upgraded", 0, 1),
        tier2: [...baseDeck.playerCount[1].tier2].fill("upgraded", 0, 3),
        tier3: [...baseDeck.playerCount[1].tier3].fill("upgraded", 0, 5),
      },
      2: {
        tier1: [...baseDeck.playerCount[2].tier1].fill("upgraded", 0, 2),
        tier2: [...baseDeck.playerCount[2].tier2].fill("upgraded", 0, 4),
        tier3: [...baseDeck.playerCount[2].tier3].fill("upgraded", 0, 5),
      },
      3: {
        tier1: [...baseDeck.playerCount[3].tier1].fill("upgraded", 0, 2),
        tier2: [...baseDeck.playerCount[3].tier2].fill("upgraded", 0, 4),
        tier3: [...baseDeck.playerCount[3].tier3].fill("upgraded", 0, 5),
      },
      4: {
        tier1: [...baseDeck.playerCount[4].tier1].fill("upgraded", 0, 2),
        tier2: [...baseDeck.playerCount[4].tier2].fill("upgraded", 0, 4),
        tier3: [...baseDeck.playerCount[4].tier3].fill("upgraded", 0, 5),
      },
    },
  },
  battle4: {
    playerCount: {
      1: {
        tier1: [...baseDeck.playerCount[1].tier1].fill("upgraded", 0, 1),
        tier2: [...baseDeck.playerCount[1].tier2].fill("upgraded", 0, 3),
        tier3: [...baseDeck.playerCount[1].tier3].fill("upgraded", 0, 7),
      },
      2: {
        tier1: [...baseDeck.playerCount[2].tier1].fill("upgraded", 0, 3),
        tier2: [...baseDeck.playerCount[2].tier2].fill("upgraded", 0, 5),
        tier3: [...baseDeck.playerCount[2].tier3].fill("upgraded", 0, 7),
      },
      3: {
        tier1: [...baseDeck.playerCount[3].tier1].fill("upgraded", 0, 3),
        tier2: [...baseDeck.playerCount[3].tier2].fill("upgraded", 0, 5),
        tier3: [...baseDeck.playerCount[3].tier3].fill("upgraded", 0, 7),
      },
      4: {
        tier1: [...baseDeck.playerCount[4].tier1].fill("upgraded", 0, 3),
        tier2: [...baseDeck.playerCount[4].tier2].fill("upgraded", 0, 5),
        tier3: [...baseDeck.playerCount[4].tier3].fill("upgraded", 0, 7),
      },
    },
  },
};

console.log("works");
