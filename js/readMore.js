function myFunction(i) {
  console.log("dots" + i);
  var dots = document.getElementById("dots" + i);
  var moreText = document.getElementById("more" + i);
  var btnText = document.getElementById("myBtn" + i);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunction2() {
  var dots = document.getElementById("dotsA");
  var moreText = document.getElementById("moreA");
  var btnText = document.getElementById("myBtnA");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Show more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Show less";
    moreText.style.display = "inline";
  }
}
