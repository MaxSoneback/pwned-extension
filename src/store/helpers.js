const mergeByProperties = (a, b, prop) => {
  var reduced = a.filter(aitem => {
    return !b.find(bitem => {
      return aitem[prop] === bitem[prop];
    });
  });
  return reduced.concat(b);
};

const createBreachObject = data => {
  return {
    name: data["Name"],
    title: data["Title"],
    domain: data["Domain"],
    description: data["Description"],
    breach_date: new Date(data["BreachDate"]),
    added_date: new Date(data["AddedDate"]),
    modified_date: new Date(data["ModifiedDate"]),
    pwn_count: data["PwnCount"],
    logo_path: data["LogoPath"],
    data_classes: data["DataClasses"]
  };
};

const parseDate = (key, val) => {
  if (key.includes("date")) {
    return new Date(val);
  }
  return val;
};

export default {
  mergeByProperties,
  createBreachObject,
  parseDate
};
