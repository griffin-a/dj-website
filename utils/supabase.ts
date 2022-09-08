import { createClient } from "@supabase/supabase-js";
import { SupabaseStorageClient } from '@supabase/storage-js'
// import 'dotenv/config'

console.log(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY);
// Why are the env variables not gettting found?

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL;
const KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY;

export const supabaseAdmin = createClient(
  URL,
  KEY
);

export const storageClient = new SupabaseStorageClient(STORAGE_URL, {
  apikey: KEY,
  Authorization: `Bearer ${KEY}`,
});
