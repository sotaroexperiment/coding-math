window.onload = function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    var centerY = height * .5,
        centerX = width * .5,
        radius = 200,
        angle = 0,
        numObjects = 12,
        slice = Math.PI * 2/numObjects,
        x, y;


    for(let i = 0; i < numObjects; i ++){

        angle = i * slice;

        x = centerX + Math.cos(angle) * radius;
        y = centerY + Math.sin(angle) * radius;

        context.beginPath();
        context.arc(x, y, 8, 0, Math.PI * 2, false);
        context.fill();

    }
}