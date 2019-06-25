namespace qrcode {

  /**
   * QR8BitByte
   * @author Kazuhiko Arase
   */
  export class QR8BitByte extends QRData {

    constructor(data : string) {
      super(Mode.MODE_8BIT_BYTE, data);
    }

    public write(buffer : BitBuffer) : void {
      let data = control.createBufferFromUTF8(this.getData() );
      for (let i = 0; i < data.length; i += 1) {
        buffer.put(data[i], 8);
      }
    }

    public getLength() : number {
      return control.createBufferFromUTF8(this.getData() ).length;
    }
  }
}
