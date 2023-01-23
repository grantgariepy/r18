import path from "path";
import fs from "fs";
import { promisify } from "util";

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

interface Request {
  query: {
    houseId: number;
  };
  method: string;
  body: string;
}

interface Response {
  setHeader(header: string, value: string | string[]): void;
  status(code: number): Response;
  send(data: string): void;
  json(data: any): void;
  end(data: string): void;
}

export default async function userHandler(req: Request, res: Response) {
  const houseId = Number(req?.query?.houseId);
  const method = req?.method;
  const jsonFile = path.resolve("./", "bids.json");

  async function getBidsData() {
    const readFileData = await readFile(jsonFile);
    return JSON.parse(readFileData.toString()).bids;
  }

  switch (method) {
    case "GET":
      try {
        const bids = await getBidsData();
        const filteredBids = bids.filter((rec: {houseId: number}) => rec.houseId === Number(houseId));
        if (!bids)
          res.status(404).send("Error: Request failed with status code 404");

        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify(filteredBids, null, 2));

        console.log(`GET /api/bids/${houseId} status: 200`);
      } catch (error) {
        console.log("/api/bids error:", error);
      }

      break;
    case "POST":
      try {
        const recordFromBody: any = req?.body;
        const bids: Array<any> = await getBidsData();
        recordFromBody.id = Math.max(...bids.map((b) => b.id)) + 1;
        const newBidsArray = [...bids, recordFromBody];
        writeFile(
          jsonFile,
          JSON.stringify(
            {
              bids: newBidsArray,
            },
            null,
            2
          )
        );
        res.status(200).json(recordFromBody);
        console.log(`POST /api/bids/${houseId} status: 200`);
      } catch (e) {
        console.log("/api/bids POST error:", e);
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
