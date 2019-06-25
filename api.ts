namespace qrcode {
    /**
     * Encodes a string into a QR Code image
     * @param s the string to encode
     */
    //% blockId=qrcodeencodestring block="encode $text to qrcode"
    export function encodeString(text: string): Image {
        const qr = qrcode.QRCode.getMinimumQRCode(text, ErrorCorrectLevel.M);
        return qr.toImage();
    }
}