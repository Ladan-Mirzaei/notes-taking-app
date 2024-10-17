import db from "../util/db-connect.js";
// export async function getUsers(_, res) {
//   try {
//     const users = await db("users");
//     return res.json(users);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ msg: "error" });
//   }
// }
export async function login(req, res) {
  try {
    const users = await db("users").where({
      name: req.body.name,
    });

    if (users.length === 0) {
      return res.status(404).json({ msg: "User not found" });
    }
    const user = users[0];

    return res.status(200).json({ msg: "User exists", users });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Server error" });
  }
}
