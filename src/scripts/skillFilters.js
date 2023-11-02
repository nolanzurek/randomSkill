export let skillFilters = {
  forwardOnly: (list) => list.filter((el) => el.direction === "forward"),
  backwardOnly: (list) => list.filter((el) => el.direction === "backward"),
  noBlind: (list) => list.filter((el) => !el.blind),
  noAlternate: (list) => list.filter((el) => el.type === "regular"),
};
