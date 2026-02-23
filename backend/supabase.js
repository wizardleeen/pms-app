const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://gebnmveredocgpelvibi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlYnNtdmVyZWRvY3BlbHZpYmkiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMzU5OTIwMCwiZXhwIjoxOTM5MTc1MjAwfQ.4kVpGZG6yaXHpljAUfm0g3M0vJkC1p9MzVYfP2VJVg0';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
