export class Utils {

  public static getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * max) + 1
  }

}