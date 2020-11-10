var i = 0;
var txt = "Maecenas sed enim ut sem viverra aliquet eget sit amet. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Quis auctor elit sed vulputate mi sit amet mauris commodo. Vitae purus faucibus ornare suspendisse sed nisi.";
var speed = 15;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}