const locations = [
    {
        img: "../img/hinhanhcautinhyeu.png",
        country: "Đà Nẵng - Việt Nam",
        place: "Cầu Tình Yêu",
        describe: "Địa điểm du lịch của Đà Nẵng (367H+7RX, An Hải, Sơn Trà, Đà Nẵng 550000)",
    },
    {
        img: "../img/hinhanhcaurongdanang.png",
        country: "Đà Nẵng - Việt Nam",
        place: "Cầu Rồng Vàng Đà Nẵng",
        describe: "Địa điểm du lịch của Đà Nẵng",
    },
    {
        img: "../img/hinhanhculaocham.png",
        country: "Đà Nẵng - Việt Nam",
        place: "Cù Lao Chàm",
        describe: "Địa điểm du lịch của Đà Nẵng",
    },
    {
        img: "../img/hinhanhbienmykhee.png",
        country: "Đà Nẵng - Việt Nam",
        place: "Biển Mỹ Khê",
        describe: "Địa điểm du lịch của Đà Nẵng",
    },
    {
        img: "../img/hinhanhbanahills.png",
        country: "Đà Nẵng - Việt Nam",
        place: "Bana Hills",
        describe: "Địa điểm du lịch Đà Nẵng",
    },
    {
        img: "../img/hinhanhhoian.png",
        country: "Quảng Nam - Việt Nam",
        place: "Hội An",
        describe: "Địa điểm du lịch Quảng Nam",
    },
    {
        img: "../img/hinhanhbandaosontra.png",
        country: "Đà Nẵng - Việt Nam",
        place: "Bán Đảo Sơn Trà",
        describe: "Địa điểm du lịch Đà Nẵng",
    },
    {
        img: "../img/hhoa11.JPG",
        country: "Hồ Chí Minh - Việt Nam",
        place: "18A Đường Số 35 Hiệp Bình Chánh",
        describe: "House is perfect but home isn't",
    },
];

const introduce = document.querySelector(".introduce");
const ordinalNumber = document.querySelector(".ordinal-number");
const container = document.querySelector(".container");

// Xóa nội dung cũ trước khi cập nhật
introduce.innerHTML = "";
ordinalNumber.innerHTML = "";

// Hiển thị danh sách địa điểm
locations.forEach((location, index) => {
    introduce.innerHTML += `
        <div class="wrapper">
            <span><h5 class="country">${location.country}</h5></span>
            <span><h5 class="place">${location.place}</h5></span>
            <span><h5 class="describe">${location.describe}</h5></span>
        </div>
    `;

    ordinalNumber.innerHTML += `<h2>0${index + 1}</h2>`;
});

// Đánh dấu địa điểm đầu tiên là "active"
introduce.children[0].classList.add("active");
ordinalNumber.children[0].classList.add("active");
container.style.backgroundImage = `url('${locations[0].img}')`;

// Hiển thị ảnh thumbnail
const thumbnailListWrapper = document.querySelector(".thumbnail-list .wrapper");
thumbnailListWrapper.innerHTML = `<div class="thumbnail zoom"><img src="${locations[0].img}" alt="Ảnh địa điểm"></div>`;

for (let i = 1; i < locations.length; i++) {
    thumbnailListWrapper.innerHTML += `
        <div class="thumbnail" style="--idx: ${i - 1}">
            <img src="${locations[i].img}" alt="Ảnh địa điểm">
        </div>
    `;
}

// Xử lý chuyển đổi ảnh
const nextBTN = document.querySelector(".navigation .next-button");
let currentIndex = 0;

nextBTN.addEventListener("click", () => {
    nextBTN.disabled = true;

    // Clone ảnh đầu tiên và thêm vào cuối danh sách
    let clone = thumbnailListWrapper.children[0].cloneNode(true);
    clone.classList.remove("zoom");
    thumbnailListWrapper.appendChild(clone);
    thumbnailListWrapper.children[1].classList.add("zoom");

    // Xóa ảnh cũ sau khi animation kết thúc
    setTimeout(() => {
        thumbnailListWrapper.children[0].remove();
        nextBTN.disabled = false;
    }, 1000);

    // Cập nhật vị trí của các ảnh
    for (let i = 2; i < thumbnailListWrapper.childElementCount; i++) {
        thumbnailListWrapper.children[i].style = `--idx: ${i - 2}`;
    }

    // Cập nhật chỉ số hiện tại
    currentIndex = (currentIndex + 1) % locations.length;

    // Cập nhật background container
    container.style.backgroundImage = `url('${locations[currentIndex].img}')`;

    // Cập nhật thông tin hiển thị
    introduce.querySelector(".active")?.classList.remove("active");
    ordinalNumber.querySelector(".active")?.classList.remove("active");

    introduce.children[currentIndex].classList.add("active");
    ordinalNumber.children[currentIndex].classList.add("active");
    ordinalNumber.children[currentIndex].textContent = `0${currentIndex + 1}`;
});

// Đảm bảo ảnh không bị méo
const style = document.createElement("style");
style.innerHTML = `
    .thumbnail img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
    .container {
        background-size: cover;
        background-position: center;
    }
`;
document.head.appendChild(style);
