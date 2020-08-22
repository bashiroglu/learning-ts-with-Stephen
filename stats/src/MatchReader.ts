// import fs from "fs";
// import { convertStringToDate } from "./utils";
// import { MatchResults } from "./MatchResults";
import { CsvReader } from "./CSVReader";
import { MatchResults } from "./MatchResults";
import { convertStringToDate } from "./utils";
type MatchData = [Date, string, string, number, number, MatchResults, string];

export class MatchReader extends CsvReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      convertStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResults,
      row[6],
    ];
  }
}
// type MatchData = [Date, string, string, number, number, MatchResults, string];

// export class CsvReader {
//   data: MatchData[] = [];

//   constructor(public filename: string) {}
//   read(): void {
//     this.data = fs
//       .readFileSync(this.filename, {
//         encoding: "utf-8",
//       })
//       .split("\n")
//       .map((match: string): string[] => {
//         return match.split(",");
//       })
//       .map(this.mapRow);
//   }
//   mapRow(row: string[]): MatchData {
//     return [
//       convertStringToDate(row[0]),
//       row[1],
//       row[2],
//       parseInt(row[3]),
//       parseInt(row[4]),
//       row[5] as MatchResults,
//       row[6],
//     ];
//   }
// }
