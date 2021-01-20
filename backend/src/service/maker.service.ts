import { db } from "./db";
import { IMaker } from "../type";
import { promisify } from "../helper";

export const getMakers = promisify<IMaker[]>(
  db.all.bind(db),
  `SELECT id, name FROM make`
);
