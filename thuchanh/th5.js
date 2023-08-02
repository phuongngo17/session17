// let state = true;
let input = +prompt("Nhập vào C/R/U/D/E để tiếp tục chương trình")
while (true) {
    if (input == "C") {
        // Thêm mới nhân viên vào trong mảng trên
        let newName = +prompt("Nhập tên nhân viên muốn thêm");
        let newAge = Number(prompt("Nhập tuổi nhân viên muốn thêm"));
        let newSalary = Number(prompt("Nhập mức lương của nhân viên muốn thêm"));

        let newStaff = {
            id: Math.floor(Math.random() * 1000),
            name: newName,
            age: newAge,
            salary: newSalary,
        };
        company.push(newStaff);
        console.log(company);
    } else if (input == "U") {
        let inputUpdate = Number(prompt("Nhập vào id nhân viên muốn cập nhật"));
        let updateSalary = Number(prompt("Nhập mức lương muốn thay đổi"));

        let findIndex = company.findIndex((e) => inputUpdate == e.id);
        company[findIndex].salary = updateSalary;
        console.log(company);
    } else if (input == "D") {
        let inputDelete = Number(prompt("Nhập vào id nhân viên muốn xóa"));
        let findIndex = company.findIndex((e) => inputDelete == e.id);
        company.splice(findIndex, 1);
        console.log(company);
    } else if (input = "E") {
        alert("Cảm ơn bạn đã sử dụng chương trình");
        state = false;
    }
}