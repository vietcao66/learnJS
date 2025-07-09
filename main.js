// Lấy các phần tử DOM
var modal = document.getElementById("myModal");
var openBtn = document.getElementById("openModalBtn");
var closeBtn = document.getElementsByClassName("close-button")[0];
var closeModalInsideBtn = document.getElementById("closeModalInsideBtn");

// Khi người dùng nhấp vào nút "Mở Hộp Thoại", hiển thị modal
openBtn.onclick = function () {
  modal.style.display = "flex"; // Sử dụng flexbox để căn giữa
};

// Khi người dùng nhấp vào nút "x" (đóng), ẩn modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Khi người dùng nhấp vào nút "Đóng" bên trong modal, ẩn modal
closeModalInsideBtn.onclick = function () {
  modal.style.display = "none";
};

// Khi người dùng nhấp vào bất cứ đâu bên ngoài modal, đóng nó
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
