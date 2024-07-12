const { getRedisConnection } = require("./redis");

const fetchUsersList = async () => {
  const client = getRedisConnection();
  const users = await client.get("users");
  if (!users) {
    return [];
  }
  return JSON.parse(users);
};

const saveUser = async (data) => {
  if (!data.name || !data.lastname || !data.age) {
    throw Error("validation Error");
  }
  const newData = { name: data.name, lastname: data.lastname, age: data.age };
  const client = getRedisConnection();
  let users = await client.get("users");
  if (!users) {
    users = [newData];
  } else {
    const pa = JSON.parse(users);
    users = [...pa, newData];
  }
  await client.set("users", JSON.stringify(users));
  return users;
};

module.exports = {
  fetchUsersList,
  saveUser,
};
