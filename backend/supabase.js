const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://gebnmveredocgpelvibi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlYm5tdmVyZWRvY2dwZWx2aWJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4NDE1NjAsImV4cCI6MjA4NzQxNzU2MH0.8KaMWodwLLeQ5Mv1-SkS6k_2M53FpRIAe1WNWxr3hB4';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
