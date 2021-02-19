import { db } from "./db";
import { ICar, IPhoto } from "../type";
import { promisify } from "../helper";

// id, make_id, model, year
export const createCar = promisify<ICar>(
  db.run.bind(db),
  "INSERT INTO car VALUES (?, ?, ?, ?)"
);

export const getCars = promisify<ICar[]>(
  db.all.bind(db),
  `SELECT car.id as id, car.make_id as make_id, make.name as make_name, model, year FROM car LEFT JOIN make ON make.id = car.make_id`
);

export const getCarById = promisify<ICar>(
  db.get.bind(db),
  `SELECT car.id as id, car.make_id as make_id, make.name as make_name, model, year 
    FROM car LEFT JOIN make ON make.id = car.make_id 
    WHERE car.id = ?`
);

export const getCarPhoto = promisify<IPhoto>(
  db.get.bind(db),
  `SELECT id, name FROM photo WHERE car_id= ?`
);

export const updateCarById = promisify<ICar>(
  db.run.bind(db),
  `UPDATE car
  SET
    model = ?,
    make_id = ?,
    year = ?
  WHERE id = ?`
);

export const removeCarById = promisify<ICar>(
  db.run.bind(db),
  `DELETE FROM car WHERE car.id = ?`
);
