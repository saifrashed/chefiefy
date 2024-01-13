import smartcrop from 'smartcrop';

export async function cropImage(imageUrl, width, height) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous'; // Only required if the image is hosted on a different domain
        img.onload = () => {
            const cropOptions = { width, height };
            smartcrop.crop(img, cropOptions, (result) => {
                const { topCrop } = result;
                const canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(
                    img,
                    topCrop.x,
                    topCrop.y,
                    topCrop.width,
                    topCrop.height,
                    0,
                    0,
                    width,
                    height
                );
                resolve(canvas.toDataURL());
            });
        };
        img.onerror = reject;
        img.src = imageUrl;
    });
}