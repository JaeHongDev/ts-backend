type mode = "test" | "dev";

export class SGlobal {
  public static get mode(): "LOCAL" | "DEV" | "TEST" {
    return mode_;
  }
  public static setMode(mode: typeof SGlobal.mode): void {
    mode_ = mode;
  }
}
let mode_: "LOCAL" | "DEV" | "TEST" = "DEV";
