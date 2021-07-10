window.onload = function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    var centerY = height * .5,
        centerX = width * .5,
        xRadius = 100,
        yRadius = 200,
        xAngle = 0,
        yAngle = 0,
        xSpeed = .1,
        ySpeed = .2,
        x, y;

    render();

    function render(){

        context.clearRect(0, 0, width, height);

        x = centerX + Math.cos(xAngle) * xRadius;
        y = centerY + Math.sin(yAngle) * yRadius;

        context.beginPath();
        context.arc(x, y, 10, 0, Math.PI * 2, false);
        context.fill();

        xAngle += xSpeed;
        yAngle += ySpeed;

        requestAnimationFrame(render);
    }


}