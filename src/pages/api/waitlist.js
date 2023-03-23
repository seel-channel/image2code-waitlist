import { Client } from "pg";

const connectionString = process.env.DB_CONNECTION_STRING;

export default async function saveEmail(req, res) {
  const client = new Client(connectionString);
  
  try {
    await client.connect();

    // const results = await client.query("SELECT NOW()");
    // console.log(results)

    // const query2 = "CREATE TABLE waitlist(id UUID DEFAULT gen_random_uuid() PRIMARY KEY, email STRING, created_at TIMESTAMPTZ NOT NULL DEFAULT NOW())";
    // const res2 = await client.query(query2);
    // console.log(res2)

    const query = "INSERT INTO waitlist(email) VALUES($1)";
    const values = [JSON.parse(req.body).email];
    await client.query(query, values);

    // const results = await client.query("SELECT * FROM waitlist");
    // console.log(results.rows);

    await client.end();
    res.status(200).send("OK");
  } catch (err) {
    console.log(err.stack);
    res.status(503).send("An unexpected error has occurred, please try again");
    await client.end();
  }
}
