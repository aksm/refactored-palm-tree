export function change() {
document.getElementById("start").onclick = function() {
  document.getElementById("stageName").style.display = "block";
  document.getElementById("start").replaceWith(document.getElementById("stageName"));
};

document.getElementById("submit1").onclick = function() {
  document.getElementById("type1").style.display = "block";
  document.getElementById("stageName").replaceWith(document.getElementById("type1"));
};

document.getElementById("submit2").onclick = function() {
  document.getElementById("type2").style.display = "block";
  document.getElementById("type1").replaceWith(document.getElementById("type2"));
};

document.getElementById("submit3").onclick = function() {
  document.getElementById("bio").style.display = "block";
  document.getElementById("type2").replaceWith(document.getElementById("bio"));
};

document.getElementById("submit4").onclick = function() {
  document.getElementById("thanks").style.display = "block";
  document.getElementById("bio").replaceWith(document.getElementById("thanks"));
};

}
// $("#start").click(function() {
//    $("#stageName").css('display','block');
//  $("#start").replaceWith( $("#stageName") );

// });

// $("#submit1").click(function() {
//    $("#type1").css('display','block');
//  $("#stageName").replaceWith( $("#type1") );

// });

// $("#submit2").click(function() {
//    $("#type2").css('display','block');
//  $("#type1").replaceWith( $("#type2") );

// });

// $("#submit3").click(function() {
//    $("#bio").css('display','block');
//  $("#type2").replaceWith( $("#bio") );

// });

// $("#submit4").click(function() {
//    $("#thanks").css('display','block');
//  $("#bio").replaceWith( $("#thanks") );

// });