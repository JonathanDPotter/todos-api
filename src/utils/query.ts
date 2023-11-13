import connection from "./db";

const query = (
  qryStr: string,
  values?: (object | string)[]
) => {
  return new Promise((resolve, reject) => {
    connection.query(qryStr, values, (err: any, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

export default query;
