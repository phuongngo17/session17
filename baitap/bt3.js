class Mobile{
  pin;
  tinNhanDangSoan = "";
  hopThuDen = [];
  hopThuGui = [];
  status = true;
  constructor(pin){
    if (this.pin <= 100 && this.pin > 0) { // (tối đa 100 đv)
      pin;
      this.pin = pin;
    } else {
      this.pin = 80;
    }
    // có chức năng kiểm tra trạng thái điện thoại bật hay tắt
    this.kiemTraBatTat = () => {
      if (!this.status) {
        return;
      } else {
        this.pin--;
        return this.status;
      }
    }
    // có chức năng bật và tắt điện thoại
    this.batTatDienThoai = (value) => {
      if (!this.status) {
        return;
      } else{
        this.status = value;
        this.pin--;
      }
    }
    // có chức năng sạc pin điện thoại
    this.sacPinDienThoai = () => {
      console.log("Đang sạc pin");
      this.pin++;
    }
    // có chức năng soạn tin nhắn.
    this.soanTinNhan = (value) => {
      if (!this.status) {
        return;
      }
        this.tinNhanDangSoan = value;
        this.pin--;
    }
    // có chức năng nhận tin nhắn từ một chiếc mobile khác
    this.nhanTinNhan = (value) => {
      if (!this.status) {
        return;
      } 
        this.tinNhanTrongHopThuDen.push(value);
        this.pin--;
    }
    // có chức năng gửi tin nhắn tới một chiếc mobile khác
    this.guiTinNhan = (phone) => {
      if (!this.status) {
        return;
      }
        this.tinNhanDaGui.push(this.soanTinNhan);
      phone.tinNhanTrongHopThuDen.push(this.tinNhanDangSoan);
      this.tinNhanDangSoan = "";
        this.pin--;
      
    }
    //có chức năngn xem tin trong hộp thư đến 
    this.xemTin = () => {
      if (!this.status) {
        return
      }
        this.pin--;
        return this.tinNhanTrongHopThuDen;
    }
    // có chức năng xem tin đã gửi
    this.xemTinDaGui = () => {
      if (!this.status) {
        return
      }
        this.pin--;
        return this.tinNhanDaGui;
    }
  }
}
let nokia = new Mobile(45);
let iphone = new Mobile(45);
// chiếc điện thoại nokia soạn tin nhắn với nội dụng bất kỳ
nokia.soanTinNhan("về đi con");
// và gửi cho chiếc iphone
nokia.guiTinNhan(iphone);
console.log(iphone.xemTin);
// chiếc iphone kiểm tra inbox
// let ketqua = iphone.xemTinDaGui(); // ketqua=[]
// và hiển thị tin đó 
// console.log(ketqua);