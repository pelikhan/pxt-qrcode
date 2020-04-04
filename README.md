---
---

# QR Code generator for MakeCode

A simple tool to generate QR Code images for MakeCode (port of https://github.com/kazuhikoarase/qrcode-generator)

The word "QR Code" is registered trademark of DENSO WAVE INCORPORATED 
http://www.denso-wave.com/qrcode/faqpatent-e.html

## Examples

Use ``||qrcode:encode string||`` to generate a QR code image. It automatically
scales the image to fit the screen.

```blocks
let img = qrcode.encodeString("https://makecode.com");
```

## Limitations

* Kanji codes are not supported.
* It may take a few seconds to generate the code, so that algorithm is interleaved with ``pause`` to allow it to run in the background.

## Acknoledgment: QR code generator

This library is a port of https://github.com/kazuhikoarase/qrcode-generator, optimized for the MakeCode environment.

## Supported targets
* for PXT/arcade

(The metadata above is needed for package search, update it with the targets you support)

## License

MIT
