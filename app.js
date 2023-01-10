//步驟拆解：監聽Slider(range-box)變化 --> 取得滑桿數值 -->動態產生數值及顏色
const rangeBox = document.querySelector(".range-box");
const red = document.querySelector(".red-bar");
const green = document.querySelector(".green-bar");
const blue = document.querySelector(".blue-bar");

//綁定監聽器
rangeBox.addEventListener("input", changeRange);
//Event Handler
function changeRange(e) {
  //變更數值
  e.target.nextElementSibling.textContent = e.target.value;
  //取得RGB數值
  let rgbValue = [red.value, green.value, blue.value];
  //更換成HEX值
  const hexText = document.querySelector(".hex-text");
  hexText.textContent = rgbToHex(rgbValue[0], rgbValue[1], rgbValue[2]);
  //動態更換色塊顏色
  document.body.style.backgroundColor = hexText.textContent;
}

//RGB轉換成HEX
function rgbToHex(r, g, b) {
  const toHex = [r, g, b]
    .map((item) => Number(item).toString(16).toUpperCase().padStart(2, 0))
    .join("");
  return `#${toHex}`;
}

//讓使用者選擇卡片顏色後移動滑桿去搭配背景顏色
const colorInput = document.querySelector(".color-input");
const cardText = document.querySelector(".card-text");
colorInput.addEventListener("change", () => {
  cardText.textContent = colorInput.value.toUpperCase();
});
