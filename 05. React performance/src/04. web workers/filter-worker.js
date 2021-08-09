import worker from "workerize-loader!../use-filter";

const { filter } = new worker();

export { filter };

/*
eslint
  import/no-webpack-loader-syntax: 0,
*/
