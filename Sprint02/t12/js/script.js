function drawTriangle() {
    let triangle = '';
  
    for (let i = 1; i <= 6; i++) {
      for (let m = 0; m < i; m++) triangle += '*';
      triangle += '\n';
    }
    alert(triangle);
  }
  
  drawTriangle();

