const express = require("express");
const { getContacts, createContact, updateContact, deleteContact, getSingleContact } = require("../controllers/contactController");
const validateToken = require("../middlewares/validateTokenHandler");
const router = express.Router();

router.use(validateToken);
router.route('/').get(getContacts).post(createContact)
router.route('/:id').put(updateContact).delete(deleteContact).get(getSingleContact)




module.exports = router;