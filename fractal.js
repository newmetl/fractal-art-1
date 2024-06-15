window.addEventListener("load", function(){
    const canvas = document.getElementById('fractalCanvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
        ctx.strokeStyle = 'white';

        ctx.lineCap = 'round';

        function drawBranch(x, y, length, angle, depth, width, color) {
            if (depth === 0) {
                return;
            }
            const xEnd = x + length * Math.cos(angle);
            const yEnd = y + length * Math.sin(angle);
            ctx.lineWidth = width;
            ctx.strokeStyle = `hsl(${color}, 10%, 40%)`;
            // if (depth > 7) {
            //     ctx.beginPath();
            //     ctx.moveTo(x, y);
            //     ctx.lineTo(xEnd, yEnd);
            //     ctx.stroke();
            // }

            if (depth < 13) {
                ctx.beginPath();
                ctx.arc(xEnd, yEnd, width, 0, 2 * Math.PI);
                ctx.fillStyle = `hsl(${color + 100}, 100%, 40%)`;
                ctx.fill();
            }

            const newLength = length * 0.71;
            const newWidthLeft = width * (Math.random() * 0.2 + 0.65);
            const newWidthRight = width * (Math.random() * 0.2 + 0.65);

            // randomize the color of the branch
            const newColorLeft = Math.floor((Math.random() * 30)) - 15 + color;
            const newColorRight = Math.floor(Math.random() * 30) - 15 + color;

            // randomize the angle of the branch
            const newAngleLeft = angle - Math.PI / (1.8 + Math.random() * 2);
            const newAngleRight = angle + Math.PI / (7 + Math.random() * 8);

            // angle - Math.PI / 3.2
            // angle + Math.PI / 7
            drawBranch(xEnd, yEnd, newLength, newAngleLeft, depth - 1, newWidthLeft, newColorLeft);
            drawBranch(xEnd, yEnd, newLength, newAngleRight, depth - 1, newWidthRight, newColorRight);
        }
        function drawFractal() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const startX = canvas.width / 2;
            const startY = canvas.height / 2;
            const trunkLength = 100;
            const initialAngle = -Math.PI / 2.15;
            const maxDepth = 17;
            const width = 10;
            const color = Math.floor(Math.random() * 360);
            drawBranch(startX, startY, trunkLength, initialAngle, maxDepth, width, color);
            drawBranch(startX, startY, trunkLength, initialAngle + (Math.PI * 2) / 5, maxDepth, width, color);
            drawBranch(startX, startY, trunkLength, initialAngle + (Math.PI * 2) / 5 * 2, maxDepth, width, color);
            drawBranch(startX, startY, trunkLength, initialAngle + (Math.PI * 2) / 5 * 3, maxDepth, width, color);
            drawBranch(startX, startY, trunkLength, initialAngle + (Math.PI * 2) / 5 * 4, maxDepth, width, color);
        }
        drawFractal();
    }
});


