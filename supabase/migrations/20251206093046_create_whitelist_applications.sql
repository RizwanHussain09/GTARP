/*
  # Create Whitelist Applications Table

  1. New Tables
    - `whitelist_applications`
      - `id` (uuid, primary key) - Unique identifier for each application
      - `name` (text) - Applicant's name
      - `discord_id` (text) - Applicant's Discord ID
      - `rp_experience` (text) - Description of RP experience
      - `character_story` (text) - Character backstory
      - `status` (text) - Application status (pending, approved, rejected)
      - `created_at` (timestamptz) - Application submission timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `whitelist_applications` table
    - Add policy for anyone to create applications (public submission)
    - Add policy for authenticated users to read applications (staff only)
*/

CREATE TABLE IF NOT EXISTS whitelist_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  discord_id text NOT NULL,
  rp_experience text NOT NULL,
  character_story text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE whitelist_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit applications"
  ON whitelist_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view applications"
  ON whitelist_applications
  FOR SELECT
  TO authenticated
  USING (true);