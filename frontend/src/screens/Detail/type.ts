import { ICar, IMaker, Meta } from "../../types";

export interface useCarDetailHookType {
  car: ICar;
  star: boolean;
  onEdit: () => void;
  onToggleStar: () => void;
}
