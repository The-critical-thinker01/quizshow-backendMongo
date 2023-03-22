const express = require("express");
const router = express.Router({ mergeParams: true });

const PlayerController = require("../controllers/player.controller");

router.route("/:_id").get(PlayerController.GetPlayer);
router.route("/").get(PlayerController.GetPlayers);
router.route("/retryplay/:_id").get(PlayerController.RetryPlay);


module.exports = router;
