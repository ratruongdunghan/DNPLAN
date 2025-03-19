function countdown() {
  var startDate = new Date("2023-03-05T09:00:00"); // Ngày và thời gian bắt đầu (định dạng ISO 8601)

  var currentTime = new Date();
  var timeDifference = currentTime - startDate;

  // Tính toán số giờ, phút và giây đã trôi qua
  var hours = Math.floor(timeDifference / (1000 * 60 * 60));
  var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Đảm bảo rằng giờ, phút và giây luôn có 2 chữ số
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  var countdownString = hours + ":" + minutes + ":" + seconds;

  // Hiển thị đếm ngược lên phần tử có id là "countdown"
  document.getElementById("countdown").textContent = countdownString;
}

// Gọi hàm countdown mỗi giây một lần
setInterval(countdown, 1000);

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $("#backtop").fadeIn();
    } else {
      $("#backtop").fadeOut();
    }
  });
  $("#backtop").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      700
    );
  });
});
