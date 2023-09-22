import { PrismaClient } from "@prisma/client";
import app from "./app";
const prisma = new PrismaClient();
const port = process.env.port || 3000;
async function main() {
    app.listen(port, () => {
        console.log(`server running on ${port}`)
    })

}
main()