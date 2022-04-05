var orderDetailServices = require("../services/orderdetail");

exports.getListOrderDetail = async function getListOrderDetail() {
  return await orderDetailServices.getListOrderDetail();
};
// exports.getOrdersDetailById = async function getOrdersDetailById(id) {
//   return await orderDetailServices.getOrdersDetailById(id);
// };
exports.getDetailByOrderId = async function getDetailByOrderId(id) {
  return await orderDetailServices.getDetailByOrderId(id);
};
exports.createOrderDetail = async function (orderDetail) {
  return await orderDetailServices.createOrderDetail(orderDetail);
};
