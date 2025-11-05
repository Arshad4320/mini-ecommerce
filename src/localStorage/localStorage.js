const getDataFromDb = () => {
  const item = localStorage.getItem("phoneId");
  if (item) {
    return JSON.parse(item);
  }
  return [];
};
const setPhoneIdIntoDb = (id) => {
  const storedId = getDataFromDb();
  if (!storedId.includes(id)) {
    storedId.push(id);
    localStorage.setItem("phoneId", JSON.stringify(storedId));
  }
};

const removeIdFromDb = (id) => {
  const getItem = getDataFromDb();
  const update = getItem.filter((item) => item !== id);
  localStorage.setItem("phoneId", JSON.stringify(update));
};
