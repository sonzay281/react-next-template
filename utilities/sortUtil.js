export const sortThis = (key, order = "asc") => {
  return function(nodeA, nodeB) {
    if (!nodeA.hasOwnProperty(key) || !nodeB.hasOwnProperty(key)) {
      return 0;
    }

    const varA =
      typeof nodeA[key] === "string" ? nodeA[key].toUpperCase() : nodeA[key];
    const varB =
      typeof nodeB[key] === "string" ? nodeB[key].toUpperCase() : nodeB[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === "desc" ? comparison * -1 : comparison;
  };
};
