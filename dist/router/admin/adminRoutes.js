"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminWalletLogics_1 = require("../../controller/admin/admindashboard/adminWalletLogics");
const AdminRoutes = (0, express_1.Router)();
AdminRoutes.post("/paysalary/:UserId", adminWalletLogics_1.MakeTransfer);
AdminRoutes.post("/paysalarywithhouseplan/:adminId", adminWalletLogics_1.staffWithPlans);
AdminRoutes.post("/fundwallet/:userId/:walletId", adminWalletLogics_1.fundWalletFromBank);
AdminRoutes.route("/pay/:adminid").patch(adminWalletLogics_1.checkPayment);
AdminRoutes.route("/pay-out/:staffid").post(adminWalletLogics_1.checkOutToBank);
exports.default = AdminRoutes;