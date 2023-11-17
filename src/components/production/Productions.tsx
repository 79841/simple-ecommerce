import { getProductions } from "@/actions/production";
import { Production } from "./Production";

export const Productions = async () => {
  const productions = await getProductions();
  return (
    <div className="w-[70%]">
      <ul>
        {productions.map((production) => (
          <li key={production.id}>
            <Production item={production} />
          </li>
        ))}
      </ul>
    </div>
  );
  // return <ItemList items={productions} ItemComponent={Production} />;
};
