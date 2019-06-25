namespace test {

    import QRCode = com.d_project.qrcode.QRCode;
    import ErrorCorrectLevel = com.d_project.qrcode.ErrorCorrectLevel;
    import QRNumber = com.d_project.qrcode.QRNumber;
    import QRAlphaNum = com.d_project.qrcode.QRAlphaNum;
    import QR8BitByte = com.d_project.qrcode.QR8BitByte;
    import QRKanji = com.d_project.qrcode.QRKanji;

    export function run(): void {

        // uncomment if UTF-8 support is required.
        //QRCode.stringToBytes = com.d_project.text.stringToBytes_UTF8;

        let qr = new QRCode();
        qr.setTypeNumber(5);
        qr.setErrorCorrectLevel(ErrorCorrectLevel.L);
        qr.addData(new QRNumber('0123')); // Number only
        qr.addData(new QRAlphaNum('AB5678CD')); // Alphabet and Number
        qr.addData(new QR8BitByte('[8BitByte :)]')); // most useful for usual purpose.
        qr.addData('[here is 8BitByte too]');
        qr.addData(new QRKanji('漢字')); // Kanji(SJIS) only
        qr.make();

        let img = qr.toImage();

        sprites.create(img);
    }
}
