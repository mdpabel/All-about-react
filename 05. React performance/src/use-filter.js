import { matchSorter } from "match-sorter";

function filter(data, search) {
  return matchSorter(data, search, {
    keys: ["title"],
  });
  //   return data.filter((item) => item.title.includes(search));
}

export { filter };
