import { StorageClient } from '@supabase/storage-js';
import 'dotenv/config';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const storage = new StorageClient(`${supabaseUrl}/storage/v1`, {
    apikey: supabaseKey,
    Authorization: `Bearer ${supabaseKey}`
});

export default storage;
