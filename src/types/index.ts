export interface WhitelistApplication {
  id?: string;
  name: string;
  discord_id: string;
  rp_experience: string;
  character_story: string;
  status?: string;
  created_at?: string;
}

export interface StaffMember {
  name: string;
  role: string;
  avatar: string;
  discord?: string;
}

export interface Department {
  name: string;
  icon: string;
  description: string;
  color: string;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  image?: string;
}
