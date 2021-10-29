var express = require("express");
var router = express.Router();

const {
  getUserInfo,
  getAllUsers,
  getUserById,
  getUserByUsername,
  getUserByFirstName,
  getUserByLastName,
  getUserByEmail,
  getUserIdByEmail,
  getUserByShortlisted,
  postUser,
  patchUser,
  deleteUser,
} = require("../models/users");

// GET requests - all generic requests with no specific id
router.get("/", async (req, res) => {
  const { email } = req.query;

  // GET by email
  if (email) {
    const data = await getUserIdByEmail(email);
    res.json({
      success: true,
      message: `Search by email: ${email}`,
      payload: data,
    });
    return;
  }

  const data = await getAllUsers();

  res.json({
    success: true,
    message: "Here are all the Users",
    payload: data,
  });
});

// GET by id - this contains all paths for any id params.
// ex GET backend.co.uk/30 would be a request for all details of a user with the id 30
// for a user that we need a specific column, we give the id and the column  under a query, see lines 48-55
// ex GET backend.co.uk/30?column=email would return the email for our user 30
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const { column } = req.query;
  if (column) {
    const data = await getUserInfo(id, column);
    res.json({
      success: true,
      message: `Search result for user with id: ${id} and column: ${column}`,
      payload: data,
    });
  } else {
    const data = await getUserById(id);
    res.json({
      success: true,
      message: `Search result for user with id: ${id}`,
      payload: data,
    });
  }
});

//   POST request - this is used to create a new user
router.post("/", async (req, res) => {
  const { body } = req;
  const data = await postUser(body);
  res.json({
    success: true,
    message: `New user added`,
    payload: data,
  });
});

// PATCH request - this is used to update a column in the user`s details
// ex ex PATCH backend.co.uk/30?column=email would update the column email of the user with the id 30, with whatever you have in the body of the req
router.patch("/:id", async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const { column } = req.query;
  const data = await patchUser(id, column, body);
  res.json({
    success: true,
    message: `${id} updated`,
    payload: data,
  });
});

//   DELETE request - this deletes any user using their id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await deleteUser(id);
  res.json({
    success: true,
    message: `User ${id} deleted`,
    payload: data,
  });
});

module.exports = router;
