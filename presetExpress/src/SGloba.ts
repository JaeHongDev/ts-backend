export class SGlobal {
  public static get mode(): "LOCAL" | "DEV" | "REAL" {
    return mode_;
  }
  public static setMode(mode: typeof SGlobal.mode): void {
    mode_ = mode;
  }
}

let mode_: "LOCAL" | "DEV" | "REAL" = "DEV";

// LOCAL
// DEV
// REAL
