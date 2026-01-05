
export enum Screen {
  LOGIN = 'LOGIN',
  DASHBOARD = 'DASHBOARD',
  TENDER_LIST = 'TENDER_LIST',
  TENDER_DETAIL = 'TENDER_DETAIL',
  AI_ASSISTANT = 'AI_ASSISTANT',
  COMPANY_PROFILE = 'COMPANY_PROFILE',
  SETTINGS = 'SETTINGS'
}

export interface Tender {
  id: string;
  title: string;
  client: string;
  location: string;
  budget: string;
  matchScore: number;
  tags: string[];
  image: string;
  deadline: string;
  probability: 'High' | 'Medium' | 'Low';
  status: 'New' | 'Applied' | 'Review' | 'Won';
}

export interface Document {
  id: string;
  name: string;
  type: string;
  size: string;
  status: 'Verified' | 'Valid' | 'Active' | 'Expired' | 'Ready' | 'Drafting' | 'Queued' | 'Missing';
  expiry?: string;
  description?: string;
}

export interface Personnel {
  id: string;
  name: string;
  role: string;
  image: string;
}
