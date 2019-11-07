export const getDepartments = () =>
  new Promise(resolve => {
    const data = require("../data/department.json");
    resolve(data);
  });
