-- Create table for workshop enquiries/leads
CREATE TABLE public.workshop_enquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  goals TEXT,
  past_experience TEXT,
  team_size TEXT,
  timeline TEXT,
  budget TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.workshop_enquiries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public form)
CREATE POLICY "Anyone can submit workshop enquiries"
ON public.workshop_enquiries
FOR INSERT
WITH CHECK (true);

-- Create policy to prevent public reads (only admins should see these)
-- For now, no SELECT policy means no one can read via API (secure by default)