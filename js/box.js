var box = function() {
  this.boxDepth  = 50;
  this.boxHeight = 70;
  this.boxWidth = 5;
  this.quantity = 10;
  this.cardboardWidth = 1;
  this.showMesh = false;

  this.boxGeometry = function() {
    var increments = [];
    console.log(this.boxDepth);
    var cw = this.cardboardWidth;
    var h  = this.boxHeight;
    var w  = this.boxWidth*this.quantity;
    var d  = this.boxDepth;
    var flapLength = (h / 2) * 0.8;

    increments.push(new THREE.Vector3(flapLength, 0, 0));
    increments.push(new THREE.Vector3(cw        , 0, 0));
    increments.push(new THREE.Vector3(w         , 0, 0));
    increments.push(new THREE.Vector3(cw        , 0, 0));
    increments.push(new THREE.Vector3(flapLength, 0, 0));

    increments.push(new THREE.Vector3(0, -d, 0));

    increments.push(new THREE.Vector3(-flapLength, 0, 0));

    increments.push(new THREE.Vector3(0, -cw, 0));

    increments.push(new THREE.Vector3(d , 0   , 0));
    increments.push(new THREE.Vector3(cw, -cw , 0));
    increments.push(new THREE.Vector3(d , 0   , 0));
    increments.push(new THREE.Vector3(0 , -h/3, 0));
    increments.push(new THREE.Vector3(cw, -cw , 0));

    increments.push(new THREE.Vector3(0, -h/3 + 4*cw, 0));

    increments.push(new THREE.Vector3(-cw, -cw , 0));
    increments.push(new THREE.Vector3(0  , -h/3, 0));
    increments.push(new THREE.Vector3(-d , 0   , 0));
    increments.push(new THREE.Vector3(-cw, -cw , 0));
    increments.push(new THREE.Vector3(-d , 0   , 0));

    increments.push(new THREE.Vector3(0, -cw, 0));

    increments.push(new THREE.Vector3(flapLength, 0, 0));

    increments.push(new THREE.Vector3(0, -d , 0));

    increments.push(new THREE.Vector3(-flapLength, 0, 0));
    increments.push(new THREE.Vector3(-cw        , 0, 0));
    increments.push(new THREE.Vector3(-w         , 0, 0));
    increments.push(new THREE.Vector3(-cw        , 0, 0));
    increments.push(new THREE.Vector3(-flapLength, 0, 0));

    increments.push(new THREE.Vector3(0, d, 0));

    increments.push(new THREE.Vector3(flapLength, 0, 0));

    increments.push(new THREE.Vector3(0, cw, 0));

    increments.push(new THREE.Vector3(-d , 0  , 0));
    increments.push(new THREE.Vector3(-cw, cw , 0));
    increments.push(new THREE.Vector3(-d , 0  , 0));
    increments.push(new THREE.Vector3(0  , h/3, 0));
    increments.push(new THREE.Vector3(-cw, cw , 0));

    increments.push(new THREE.Vector3(0, h/3 - 4*cw, 0));

    increments.push(new THREE.Vector3(cw, cw , 0));
    increments.push(new THREE.Vector3(0 , h/3, 0));
    increments.push(new THREE.Vector3(d , 0  , 0));
    increments.push(new THREE.Vector3(cw, cw , 0));
    increments.push(new THREE.Vector3(d , 0  , 0));

    increments.push(new THREE.Vector3(0, cw, 0));

    increments.push(new THREE.Vector3(-flapLength, 0, 0));

    increments.push(new THREE.Vector3(0, d, 0));

    return increments;
  }

  this.createHoles = function() {
    var holes = [];
    var from, to;
    var h  = this.boxHeight;
    var w  = this.boxWidth*this.quantity;
    var d  = this.boxDepth;
    var cw = this.cardboardWidth;
    var flapLength = (h / 2) * 0.8;

    // Left Hole
    from = new THREE.Vector3(flapLength + cw/2     , d + cw + h/3, 0);
    to   = new THREE.Vector3(flapLength + cw/2 + cw, d + cw + h/3, 0);
    holes.push({"from":from, "to":to});

    from = new THREE.Vector3(flapLength + cw/2 + cw, d + cw +   h/3, 0);
    to   = new THREE.Vector3(flapLength + cw/2 + cw, d + cw + 2*h/3, 0);
    holes.push({"from":from, "to":to});

    from = new THREE.Vector3(flapLength + cw/2     , d + cw + 2*h/3, 0);
    to   = new THREE.Vector3(flapLength + cw/2 + cw, d + cw + 2*h/3, 0);
    holes.push({"from":from, "to":to});

    // Right Hole
    from = new THREE.Vector3(flapLength + cw + w - cw/2, d + cw + h/3, 0);
    to   = new THREE.Vector3(flapLength + cw + w + cw/2, d + cw + h/3, 0);
    holes.push({"from":from, "to":to});

    from = new THREE.Vector3(flapLength + cw + w - cw/2, d + cw +   h/3, 0);
    to   = new THREE.Vector3(flapLength + cw + w - cw/2, d + cw + 2*h/3, 0);
    holes.push({"from":from, "to":to});

    from = new THREE.Vector3(flapLength + cw + w - cw/2, d + cw + 2*h/3, 0);
    to   = new THREE.Vector3(flapLength + cw + w + cw/2, d + cw + 2*h/3, 0);
    holes.push({"from":from, "to":to});

    return holes;
  }

  this.createFoldMarks = function() {
    var folds = [];
    var from, to;
    var cw = this.cardboardWidth;
    var h  = this.boxHeight;
    var w  = this.boxWidth*this.quantity;
    var d  = this.boxDepth;
    var flapLength = (h / 2) * 0.8;

    from = new THREE.Vector3(flapLength + cw/2, 0             , 0);
    to   = new THREE.Vector3(flapLength + cw/2, 2*d + h + 2*cw, 0);
    folds.push({"from":from, "to":to});

    from = new THREE.Vector3(flapLength + cw + w + cw/2, 0              , 0);
    to   = new THREE.Vector3(flapLength + cw + w + cw/2, 2*d + h + 2*cw , 0);
    folds.push({"from":from, "to":to});
    
    from = new THREE.Vector3(flapLength - d - cw/2, d + cw + cw/2 , 0);
    to   = new THREE.Vector3(flapLength - d - cw/2, d + h + cw/2  , 0);
    folds.push({"from":from, "to":to});

    from = new THREE.Vector3( flapLength + cw + w + cw + d + cw/2, d + cw + cw/2 , 0);
    to   = new THREE.Vector3( flapLength + cw + w + cw + d + cw/2, d + h + cw/2  , 0);
    folds.push({"from":from, "to":to});

    from = new THREE.Vector3( flapLength + cw/2          , d + cw/2, 0);
    to   = new THREE.Vector3( flapLength + cw + w + cw/2 , d + cw/2, 0);
    folds.push({"from":from, "to":to});
    
    from = new THREE.Vector3( flapLength + cw/2         , d + h + cw + cw/2, 0);
    to   = new THREE.Vector3(flapLength + cw + w + cw/2 , d + h + cw + cw/2, 0);
    folds.push({"from":from, "to":to});
    
    return folds;
  }

  this.createSVG = function() {
    var points = this.boxGeometry();
    var foldMarks = this.createFoldMarks();
    var holePoints = this.createHoles();

    var lineSVG;
    var x1, y1, x2, y2;

    var svgNode = document.getElementsByTagName("svg");  
    if (svgNode[0] != null) { 
      svgNode[0].parentNode.removeChild(svgNode[0]);
    }

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    var currentPoint = new THREE.Vector3(0,0,0);
    var margin = 5;
    var minX = 0, minY = 0;
    for (i=0; i<points.length; i++) {
      currentPoint.add(points[i]);
      if (currentPoint.x < minX) minX = currentPoint.x;
      if (currentPoint.y < minY) minY = currentPoint.y;
    }

    minX -= margin;
    minY -= margin;

    var polylineString = -minX + "," + -minY + " ";
    var currentPoint = new THREE.Vector3(-minX,-minY,0);
    for (i=0; i<points.length; i++) {
      currentPoint.add(new THREE.Vector3(points[i].x, points[i].y, 0) );
      polylineString += currentPoint.x + "," + currentPoint.y + " ";
    }

    console.log(polylineString);
    var polylineSVG = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    polylineSVG.setAttribute('points', polylineString);
    polylineSVG.setAttribute("style", "fill:none;stroke:black;stroke-width:1");
    svg.appendChild(polylineSVG);

    // Holes
    for (i=0; i<holePoints.length; i++) {
      x1 =  holePoints[i].from.x - minX;
      y1 = -holePoints[i].from.y - minY;
      x2 =  holePoints[i].to.x   - minX;
      y2 = -holePoints[i].to.y   - minY;

      lineSVG = document.createElementNS("http://www.w3.org/2000/svg", "line");
      lineSVG.setAttribute('x1', x1);
      lineSVG.setAttribute('y1', y1);
      lineSVG.setAttribute('x2', x2);
      lineSVG.setAttribute('y2', y2);
      lineSVG.setAttribute("style", "fill:none;stroke:black;stroke-width:1");
      svg.appendChild(lineSVG);
    }

    // Fold marks
    for (i=0; i<foldMarks.length; i++) {
      x1 =  foldMarks[i].from.x - minX;
      y1 = -foldMarks[i].from.y - minY;
      x2 =  foldMarks[i].to.x - minX;
      y2 = -foldMarks[i].to.y - minY;

      lineSVG = document.createElementNS("http://www.w3.org/2000/svg", "line");
      lineSVG.setAttribute('x1', x1);
      lineSVG.setAttribute('y1', y1);
      lineSVG.setAttribute('x2', x2);
      lineSVG.setAttribute('y2', y2);
      lineSVG.setAttribute("style", "fill:none;stroke:lightgray;stroke-width:1");
      svg.appendChild(lineSVG);
    }
    

    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.setAttribute("style", "margin-top:50px");
    svg.setAttribute("width", "100%");
    //svg.setAttribute("height", "20cm");

    var totalWidth  = this.boxDepth*4 + this.boxWidth*this.quantity + margin*5;
    var totalHeight = this.boxHeight + 2*this.boxDepth + margin*5; 
    var viewBoxString = "0 0"
    svg.setAttribute("viewBox", "0 0 " + totalWidth + " " + totalHeight);
    svg.setAttribute("id", "svg");

    document.body.appendChild(svg);
  }
};