"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
// import fs from "fs";
// import { convertStringToDate } from "./utils";
// import { MatchResults } from "./MatchResults";
var CSVReader_1 = require("./CSVReader");
var utils_1 = require("./utils");
var MatchReader = /** @class */ (function (_super) {
    __extends(MatchReader, _super);
    function MatchReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatchReader.prototype.mapRow = function (row) {
        return [
            utils_1.convertStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6],
        ];
    };
    return MatchReader;
}(CSVReader_1.CsvReader));
exports.MatchReader = MatchReader;
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
