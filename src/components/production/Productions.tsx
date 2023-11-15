import { getProductions } from "@/actions/production";
import { Production } from "./Production";

import { ItemList } from "../shared/list/ItemList";

export const Productions = async () => {
  const productions = await getProductions();
  return <ItemList items={productions} ItemComponent={Production} />;
};
