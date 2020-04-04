namespace test {

    import QRCode = qrcode.QRCode;
    import ErrorCorrectLevel = qrcode.ErrorCorrectLevel;
    import QRNumber = qrcode.QRNumber;
    import QRAlphaNum = qrcode.QRAlphaNum;
    import QR8BitByte = qrcode.QR8BitByte;

    export function run(): void {
        let qr = new QRCode();
        qr.setTypeNumber(5);
        qr.setErrorCorrectLevel(ErrorCorrectLevel.H);
        qr.addData(new QRNumber('0123')); // Number only
        qr.addData(new QRAlphaNum('AB5678CD')); // Alphabet and Number
        qr.addData(new QR8BitByte('[8BitByte :)]')); // most useful for usual purpose.
        qr.make();

        let img = qr.toImage();

        let sprite = sprites.create(img);
    }

    run();
}
