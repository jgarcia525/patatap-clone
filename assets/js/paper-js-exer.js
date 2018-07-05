var count = 0;

  	for (var x = 0; x <= 2000; x += 100) {
  	  for (var y = 0; y <= 2000; y += 100 ) {
  	  	myCircle = new Path.Circle(new Point(x, y), 10);
       	myCircle.fillColor = 'blue';
       	count++;
  	  }
  	}
		 	
		function onFrame(event) {
			for (var i = 0; i < count; i++) {
  			var item = project.activeLayer.children[i];
  			item.fillColor.hue += 1;
			}
		}	

		var destination = Point.random() * view.size; 

  	function onMouseDrag(event) {
  		for (var i = 0; i < count; i++) {

  			var item = project.activeLayer.children[i];
  			item.fillColor.hue += 1;

  			var vector = destination - item.position;
	
				// We add 1/30th of the vector to the position property
				// of the item item, to move it in the direction of the
				// destination point:
				item.position += vector / 30;

				// Set the content of the item item to be the length of the vector.
				// I.e. the distance it has to travel still:
				item.content = Math.round(vector.length);

				// If the distance between the path and the destination is less
				// than 5, we define a new random point in the view to move the
				// path to:
				if (vector.length < 5) {
					destination = Point.random() * view.size;
				}

  		}
  	}