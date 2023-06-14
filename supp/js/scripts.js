function syncVid(elem) {

  var liParent = elem.parentNode
  console.log(liParent)

  var timeLeft = 0
  for (var i = 0; i < liParent.childNodes.length; i++) {
    if (liParent.childNodes[i].className == "vidLeft") {
      timeLeft = liParent.childNodes[i].childNodes[3].currentTime;
    }
    if (liParent.childNodes[i].className == "vidRight") {
      liParent.childNodes[i].childNodes[3].currentTime = timeLeft;
    }
  }

}

function pauseVid(elem) {

  var liParent = elem.parentNode
  console.log(liParent)

  var timeLeft = 0
  for (var i = 0; i < liParent.childNodes.length; i++) {
    if (liParent.childNodes[i].className == "vidLeft") {
      liParent.childNodes[i].childNodes[3].pause();
    }
    if (liParent.childNodes[i].className == "vidRight") {
      liParent.childNodes[i].childNodes[3].pause();
    }
  }

}

function changeVid(elem, vp, new_name) {

  var divVid = elem.parentNode.parentNode.parentNode

  divVid.childNodes[3].setAttribute('src', vp + '/vid.mp4');
  divVid.childNodes[0].childNodes[0].innerHTML = new_name;

}

function startVid(elem) {

  var liParent = elem.parentNode
  console.log(liParent)

  var timeLeft = 0
  for (var i = 0; i < liParent.childNodes.length; i++) {
    if (liParent.childNodes[i].className == "vidLeft") {
      liParent.childNodes[i].childNodes[3].play();
    }
    if (liParent.childNodes[i].className == "vidRight") {
      liParent.childNodes[i].childNodes[3].play();
    }
  }

}