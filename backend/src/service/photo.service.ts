import { db } from "./db";
import { IPhoto } from "../type";
import { promisify } from "../helper";

export const createPhoto = promisify<IPhoto>(
  db.run.bind(db),
  `INSERT INTO photo VALUES (?, ?, ?)`
);
