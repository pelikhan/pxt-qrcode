namespace test {

    import QRCode = qrcode.QRCode;
    import ErrorCorrectLevel = qrcode.ErrorCorrectLevel;
    import QRNumber = qrcode.QRNumber;
    import QRAlphaNum = qrcode.QRAlphaNum;
    import QR8BitByte = qrcode.QR8BitByte;
    import QRKanji = qrcode.QRKanji;

    export function run(): void {

        // uncomment if UTF-8 support is required.
        //QRCode.stringToBytes = com.d_project.text.stringToBytes_UTF8;

        let qr = new QRCode();
        qr.setTypeNumber(5);
        qr.setErrorCorrectLevel(ErrorCorrectLevel.L);
        qr.addData(new QRNumber('0123')); // Number only
        qr.addData(new QRAlphaNum('AB5678CD')); // Alphabet and Number
        qr.addData(new QR8BitByte('[8BitByte :)]')); // most useful for usual purpose.
        qr.addData(new QRKanji('漢字')); // Kanji(SJIS) only
        qr.make();

        let img = qr.toImage();

        let sprite = sprites.create(img);
    }

    run();
}
