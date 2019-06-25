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
        const img = qr.toImage();
        qr.clean();
        return img;
    }
}