import fs from "fs";
import { MatchResults } from "./MatchResults";

type MatchData = [Date, string, string, number, number, MatchResults, string];

export abstract class CsvReader<T>{
  
  data:T[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;
  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((match: string): string[] => {
        return match.split(",");
      });
    .map(this.mapRow);
  }
}
