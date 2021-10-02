var btnL = document.getElementsByClassName("btn_l")[0];
var btnR = document.getElementsByClassName("btn_r")[0];
var txtL = document.getElementsByClassName("txt3")[0];
var txtR = document.getElementsByClassName("txt4")[0];

function selectLeft() {
  btnL.style.color = "#FFFFFF";
  btnL.style.background = "#49baf2";
  btnL.style.boxShadow = "0px 2px 8px rgba(73, 186, 242, 0.15)";
  txtL.style.color = "#868c90";

  btnR.style.color = "#49baf2";
  btnR.style.background = "#ffffff";
  btnR.style.boxShadow = "0px 1px 4px rgba(73, 186, 242, 0.15)";
  btnR.style.border = "1px solid #49baf2";
  txtR.style.color = "#dce0e2";
}
function selectRight() {
  btnR.style.color = "#FFFFFF";
  btnR.style.background = "#49baf2";
  btnR.style.boxShadow = "0px 2px 8px rgba(73, 186, 242, 0.15)";
  txtR.style.color = "#868c90";

  btnL.style.color = "#49baf2";
  btnL.style.background = "#ffffff";
  btnL.style.boxShadow = "0px 1px 4px rgba(73, 186, 242, 0.15)";
  btnL.style.border = "1px solid #49baf2";
  txtL.style.color = "#dce0e2";
}
