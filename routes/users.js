var express = require("express");
var router = express.Router();

const {
  getAllUsers,
  getUserById,
  getUserByCityName,
  postUser,
  putUser,
  patchUser,
  deleteUser,
} = require("../models/Users");

// GET requests
router.get("/", async (req, res) => {
  const { cityName } = req.query;

  // GET by cityName
  if (cityName) {
    const data = await getUserByCityName(cityName);
    res.json({
      success: true,
      message: `Search by cityName: ${cityName}`,
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

//   GET by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await getUserById(id);
  res.json({
    success: true,
    message: `Search result for User with id: ${id}`,
    payload: data,
  });
});

//   POST request
router.post("/", async (req, res) => {
  const { body } = req;
  const data = await postUser(body);

  res.json({
    success: true,
    message: `New User added`,
    payload: data,
  });
});

//    PUT request
router.put("/:id", async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const data = await putUser(body, id);
  res.json({
    success: true,
    message: `${portIata} updated`,
    payload: data,
  });
});

// PATCH request
router.patch("/:id", async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const data = await patchUser(body, id);
  res.json({
    success: true,
    message: `${id} updated`,
    payload: data,
  });
});

//   DELETE request
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await deleteUser(id);
  res.json({
    success: true,
    message: `User deleted`,
    payload: data,
  });
});

module.exports = router;
