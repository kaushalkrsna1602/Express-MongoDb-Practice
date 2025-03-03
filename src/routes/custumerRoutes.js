const express = require("express")
const {getCustumers, addCustumers, updateCustumers, deleteCustumers } = require("../controllers/custumerController")

const custumerRoutes = express.Router()


custumerRoutes.get("/custumers" , getCustumers )

custumerRoutes.post("/custumers" , addCustumers )

custumerRoutes.put("/custumers/:id" , updateCustumers )

custumerRoutes.delete("/custumers/:id" , deleteCustumers )

module.exports = { custumerRoutes }
