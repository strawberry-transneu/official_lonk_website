module.exports = () => {
  const items = [];
  for (let i = 1; i <= 83; i++) { //83
    items.push({
      pageid: String(i),
      name: `name${i}`
    });
  }
  return items;
};