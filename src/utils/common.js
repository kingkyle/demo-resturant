export const groupBy = (key) => (array) =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

export const storeStatus = (o, c) => {
  const now = new Date().getHours() + new Date().getMinutes() / 100;
  const openTime = Number(o.split(":")[0]) + Number(o.split(":")[1]) / 100;
  const closeTime = Number(c.split(":")[0]) + Number(c.split(":")[1]) / 100;
  if (now >= openTime && now <= closeTime) {
    return "OPEN";
  } else {
    return "CLOSE";
  }
};
