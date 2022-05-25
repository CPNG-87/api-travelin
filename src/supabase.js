const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = 'https://ulzqjrhnjhgjxeclllmp.supabase.co';
const supabaseKey = process.env.SERVICE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = { supabase };
