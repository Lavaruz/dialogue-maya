const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("berandaPage");
});
router.get("/dialogues", (req, res) => {
  res.render("dialoguePage");
});
router.get("/dialogues/create", (req, res) => {
  res.render("dialogueCreate");
});
router.get("/dialogues/edit/:id", (req, res) => {
  res.render("dialogueEdit");
});

module.exports = router;
