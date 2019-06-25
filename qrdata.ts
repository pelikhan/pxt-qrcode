namespace qrcode {

  /**
   * QRData
   * @author Kazuhiko Arase
   */
  export class QRData {
    private mode: Mode;
    private data: string;

    constructor(mode: Mode, data: string) {
      this.mode = mode;
      this.data = data;
    }

    public getMode(): Mode {
      return this.mode;
    }

    public getData(): string {
      return this.data;
    }

    public getLength(): number {
      return 0;
    }

    public write(buffer: BitBuffer): void {

    }

    public getLengthInBits(typeNumber: number): number {

      if (1 <= typeNumber && typeNumber < 10) {

        // 1 - 9

        switch (this.mode) {
          case Mode.MODE_NUMBER: return 10;
          case Mode.MODE_ALPHA_NUM: return 9;
          case Mode.MODE_8BIT_BYTE: return 8;
          default:
            return qrcode.panic('mode:' + this.mode);
        }

      } else if (typeNumber < 27) {

        // 10 - 26

        switch (this.mode) {
          case Mode.MODE_NUMBER: return 12;
          case Mode.MODE_ALPHA_NUM: return 11;
          case Mode.MODE_8BIT_BYTE: return 16;
          default:
            return qrcode.panic('mode:' + this.mode);
        }

      } else if (typeNumber < 41) {

        // 27 - 40

        switch (this.mode) {
          case Mode.MODE_NUMBER: return 14;
          case Mode.MODE_ALPHA_NUM: return 13;
          case Mode.MODE_8BIT_BYTE: return 16;
          default:
            return qrcode.panic('mode:' + this.mode);
        }

      } else {
        return qrcode.panic('typeNumber:' + typeNumber);
      }
    }
  }
}
