let vatLy = parseFloat(prompt("Nhập điểm Vật lý:") );
let hoaHoc = parseFloat(prompt("Nhập điểm Hóa học:"));
let sinhHoc = parseFloat(prompt("Nhập điểm Sinh học:"));
let tong = vatLy + hoaHoc + sinhHoc;
let trungBinh = tong/3;
alert('Điểm trung bình' + trungBinh.toFixed(2));