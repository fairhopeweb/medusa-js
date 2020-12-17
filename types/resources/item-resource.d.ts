import { Medusa } from "medusa";

declare module 'medusa' {
  namespace Medusa {
    interface Item {
      variant_id: string;
      quanitity: number;
    }
  }
}