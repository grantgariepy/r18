import path from "path";
import fs from "fs";
import { promisify } from "util";
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

interface Request {
    method: string;
    body: string;
}

interface Response {
    setHeader(header: string, value: string | string[]): void;
    status(code: number): Response;
    json(data: string): void;
    send(data: string): void;
    end(data: string): void;
}

export default async function handler(req: Request, res: Response) {
  const method = req?.method;
  const jsonFile = path.resolve("./", "houses.json");
  const readFileData = await readFile(jsonFile);
  const houses = JSON.parse(readFileData.toString()).houses;

  switch (method) {
    case "GET":
      try {
        if (!houses) {
          res.status(404).send("Error: Request failed with status code 404");
        } else {
          res.setHeader("Content-Type", "application/json");
          res.status(200).send(JSON.stringify(houses, null, 2));
          console.log("GET /api/houses  status: 200");
        }
      } catch (e) {
        console.log("/api/houses error:", e);
      }
      break;

    case "POST":
      try {
        const recordFromBody = JSON.parse(req?.body);
recordFromBody.id = Math.max(...houses.map((h: {id: number}) => h.id)) + 1;
        const newHousesArray = [...houses, recordFromBody];
        writeFile(
          jsonFile,
          JSON.stringify(
            {
              houses: newHousesArray,
            },
            null,
            2
          )
        );
        res.status(200).json(recordFromBody);
        console.log(`POST /api/houses status: 200`);
      } catch (e) {
        console.log("/api/houses POST error:", e);
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
