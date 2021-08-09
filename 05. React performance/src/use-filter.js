import { matchSorter } from "match-sorter";

export function filter(data, search) {
  if (!search) {
    return data;
  }
  return matchSorter(data, search, {
    keys: ["title"],
  });
  //   return data.filter((item) => item.title.includes(search));
}
