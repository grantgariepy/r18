import path from "path";
import fs from "fs";
import { promisify } from "util";

const readFile = promisify(fs.readFile);

interface Request {
  query: {
    id: string;
  };
}

interface Response {
  setHeader(header: string, value: string | string[]): void;
  status(code: number): Response;
  json(data: any): void;
  send(data: string): void;
}

export default async function userHandler(req: Request, res: Response) {
  const id = Number(req?.query?.id);
  const jsonFile = path.resolve("./", "houses.json");
  const readFileData = await readFile(jsonFile);
  const houses = JSON.parse(readFileData.toString()).houses;
  const house = houses.find((rec: {id: number}) => rec.id === id);
  if (house) {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(house);
  } else {
    res.status(404).send("house not found");
  }
  console.log(`GET /api/houses/${id} status: 200`);
}
