
import { Tender, Document, Personnel } from './types';

export const MOCK_TENDERS: Tender[] = [
  {
    id: 'LS-2024-001',
    title: 'Polihali Dam Structural Reinforcement',
    client: 'LHDA (Lesotho Highlands Development Authority)',
    location: 'Mokhotlong, Lesotho',
    budget: 'M 45.0M',
    matchScore: 94,
    tags: ['#Structural', '#Hydraulics', '#LesothoHighlands'],
    image: 'https://images.unsplash.com/photo-1590483736622-39da8af7ec8a?auto=format&fit=crop&q=80&w=600',
    deadline: '5 days',
    probability: 'High',
    status: 'New'
  },
  {
    id: 'BW-2024-882',
    title: 'Gaborone-Francistown Road Expansion',
    client: 'Ministry of Transport and Communications',
    location: 'Gaborone, Botswana',
    budget: 'P 120.0M',
    matchScore: 89,
    tags: ['#CivilEngineering', '#Roadworks', '#BotswanaInfrastructure'],
    image: 'https://images.unsplash.com/photo-1545143333-11a26b2302e1?auto=format&fit=crop&q=80&w=600',
    deadline: '12 days',
    probability: 'Medium',
    status: 'Applied'
  },
  {
    id: 'ZA-2024-115',
    title: 'Sandton Substation Modernization',
    client: 'City Power Johannesburg',
    location: 'Gauteng, South Africa',
    budget: 'R 15.6M',
    matchScore: 92,
    tags: ['#Electrical', '#SmartGrid', '#SouthAfrica'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600',
    deadline: '2 days',
    probability: 'High',
    status: 'New'
  },
  {
    id: 'SZ-2024-449',
    title: 'Mbabane Solar Energy Park Phase 2',
    client: 'Eswatini Electricity Company',
    location: 'Mbabane, Eswatini',
    budget: 'E 8.2M',
    matchScore: 85,
    tags: ['#Renewables', '#Solar', '#Eswatini'],
    image: 'https://images.unsplash.com/photo-1509391366360-fe5bb60213ad?auto=format&fit=crop&q=80&w=600',
    deadline: '21 days',
    probability: 'Medium',
    status: 'New'
  }
];

export const MOCK_DOCS: Document[] = [
  {
    id: 'doc-1',
    name: 'Setifikeiti sa Ngoliso ea Khampani',
    type: 'PDF',
    size: '2.4 MB',
    status: 'Verified'
  },
  {
    id: 'doc-2',
    name: 'Setifikeiti sa lekhetho (Tax)',
    type: 'PDF',
    size: '1.1 MB',
    status: 'Valid',
    expiry: 'Dec 2024'
  },
  {
    id: 'doc-3',
    name: 'ISO 9001:2015 Compliance',
    type: 'Quality Management',
    size: '1.5 MB',
    status: 'Active'
  },
  {
    id: 'doc-4',
    name: 'Litifikeiti tsa HSE',
    type: 'Safety',
    size: '2.0 MB',
    status: 'Expired'
  }
];

export const MOCK_PERSONNEL: Personnel[] = [
  {
    id: 'p-1',
    name: 'Thabo Mokoena',
    role: 'Moenjiniere e Moholo',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'p-2',
    name: 'Lebo Matsoso',
    role: 'Motsamaisi oa Morero',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  }
];
