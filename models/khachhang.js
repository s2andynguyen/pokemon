var db = require("mongoose");
db.connect("mongodb://127.0.0.1:27017/csdlkh")
    .then(() => {
        console.log('Đã kết nối thành công đến cơ sở dữ liệu');
    })
    .catch((error) => {
        console.error('Lỗi kết nối đến cơ sở dữ liệu:', error);
    });

var khachhangSchema = db.Schema({
    name: String,
    username: String,
    email: String,
    password: String
});
var Khachhang = db.model('khachhang', khachhangSchema);
    

module.exports = Khachhang;