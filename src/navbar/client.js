import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://fvmdivggydcmvzmwammm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2bWRpdmdneWRjbXZ6bXdhbW1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTg4MjY2OTQsImV4cCI6MTk3NDQwMjY5NH0.koIf5T7qJpQvrYsE2dm4wCVt4MYrGJ4nMN00KKWY1II"
);

export { supabase };
