const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
    dimensions: [600, 600]
};

const sketch = () => {
    return ({ context, width, height }) => {
        context.fillStyle = 'white';
        context.fillRect(0, 0, width, height);

        context.fillStyle = 'black';

        const cx = width * 0.5;
        const cy = height * 0.5;
        const w = width * 0.01;
        const h = height * 0.1;
        let x, y;

        const num = 60;
        const radius = width * 0.3;

        for (let i = 0; i < num; i++) {
            const slice = math.degToRad(360 / num);
            const angle = slice * i;

            x = cx + Math.sin(angle) * radius;
            y = cy + Math.cos(angle) * radius;

            context.save();
            context.translate(x, y);
            context.rotate(-angle);
            context.scale(random.range(0.1, 3), random.range(0.2, 1));

            context.beginPath();
            context.rect(-w * 0.5, random.range(0, -h * 0.5), w, h);
            context.fill();
            context.restore();

            context.save();
            context.translate(cx, cy);
            context.rotate(-angle);

            context.lineWidth = random.range(4, width * 0.03);
            context.beginPath();
            context.arc(0, 0, radius * random.range(0.4, 1.5), slice * random.range(0.5, -10), slice * random.range(0.5, 5));
            context.stroke();
            context.restore();
        }


    };
};

canvasSketch(sketch, settings);