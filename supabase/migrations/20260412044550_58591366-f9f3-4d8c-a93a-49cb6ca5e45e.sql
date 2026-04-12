-- Drop the overly permissive SELECT policy
DROP POLICY IF EXISTS "Only authenticated users can view leads" ON public.leads;

-- No new SELECT policy is added intentionally — leads should only be read via service role (e.g., edge functions or dashboard), not from the client side.