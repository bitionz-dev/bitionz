import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
    process.env.SBURL,
    process.env.SBK
);