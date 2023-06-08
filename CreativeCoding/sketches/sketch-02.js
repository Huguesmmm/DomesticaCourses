const canvasSketch = require('canvas-sketch');

const settings = {
    dimensions: [600, 600]
};

const degToRad = (deg) => {
    return deg * Math.PI / 180;
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

        const num = 12;
        const radius = width * 0.3;

        for(let i = 0; i < num; i++) {
            const slice = degToRad(360 / num);
            const angle = slice * i;

            x = cx + Math.sin(angle) * radius;
            y = cy + Math.cos(angle) * radius;

            context.save();
            context.translate(x, y);
            context.rotate(-angle);

            context.beginPath();
            context.rect(-w / 2, -h / 2, w, h);
            context.fill();
            context.restore();

        }

        
    };
};

canvasSketch(sketch, settings);