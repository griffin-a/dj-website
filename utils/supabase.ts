import { createClient } from "@supabase/supabase-js";
// import 'dotenv/config'

console.log(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
// Why are the env variables not gettting found?

const URL: string = process.env.NEXT_PUBLIC_SUPABASE_URL;
const KEY: string = process.env.NEXT_PUBLIC_SUPABASE_KEY;

export const supabaseAdmin = createClient(
  URL,
  KEY
);
