export const countSlot = (ls, slots) => {
  let count = 0;
  for (const name of ls) {
    if (name in slots) count++;
  }
  return count;
};

let lastId;
export const generateId = () => {
  let currentId = +new Date() * 1000;

  if (currentId < lastId) currentId = lastId + 1;

  while (currentId === lastId) {
    currentId++;
  }

  lastId = currentId;

  return currentId;
};
