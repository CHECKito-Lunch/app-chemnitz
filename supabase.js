import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://qwfhwpwxouikqnfrkttl.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3Zmh3cHd4b3Vpa3FuZnJrdHRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1NTYwNzYsImV4cCI6MjA2NzEzMjA3Nn0.L45EhLH1ZRtUZbRMe5kevp9qk-oBZxz59MI7cz-O438'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
