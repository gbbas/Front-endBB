setInterval(Reloading, 10000);

function Reloading() {
  location.reload();
}

function TextSpinner() {
  R=0;
  x1=.2;
  y1=.1;
  x2=.5;
  y2=.48;
  x3=3.2;
  y3=.48;
  x4=600;
  y4=400;
  x5=600;
  y5=400;

  target = document.getElementsByTagName("p");
  setInterval('A()',5);
}

function BlockSpinner() {
  R=0;
  x1=.2;
  y1=.1;
  x2=.5;
  y2=.48;
  x3=3.2;
  y3=.48;
  x4=600;
  y4=400;
  x5=600;
  y5=400;
  target = document.getElementsByTagName("section");
  setInterval('A()',5);
}

function A() {
  for(i = 0; i < target.length; i ++) {
    targetS = target[i].style;
    targetS.position = 'absolute';
    targetS.left = (Math.sin(R*x1+i*x2+x3)*x4+x5)+"px";
    targetS.top = (Math.cos(R*y1+i*y2+y3)*y4+y5)+"px"
  }
  R++
}
