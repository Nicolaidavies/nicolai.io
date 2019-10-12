# nicolai.io

My personal website with resume and portfolio.

### Images

**Phone screenshots**

Create the screenshots using [Mockuphone](https://mockuphone.com/googlepixelreallyblue) and the Pixel blue phone.

**Sizes**

Create an `index` image with a width of `500px`. All other images should have a height of `1000px`.

**Compression**

Use the following script to compress the images. Requires `pngquant`.

`find . -name "*.png" -exec pngquant --quality=85-90 --speed 1 --ext .png -f "{}" \; -exec echo "{}" \;`
