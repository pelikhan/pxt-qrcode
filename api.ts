/**
 * QR code generation
 */
//% advanced=true
//% icon="\uf029" color=0x909090 block="QR Code"
namespace qrcode {
    /**
     * Encodes a string into a QR Code image
     * @param s the string to encode
     */
    //% blockId=qrcodeencodestring block="encode $text to qrcode"
    export function encodeString(text: string): Image {
        const qr = qrcode.QRCode.getMinimumQRCode(text, ErrorCorrectLevel.M);
        const wh = Math.min(screen.width, screen.height); // needs to fit in those
        const padding = 2;
        const margin = 4;
        // maximum cell size
        const cellsize = Math.floor((wh - 2 * (margin + padding)) / qr.getModuleCount());
        const img = qr.toImage(cellsize, margin);
        return img;
    }
}