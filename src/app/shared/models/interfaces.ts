export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  image?: string;
  color: string;
  allowedRoles?: string[];
  systems: System[];
}

export interface System {
  id: string;
  name: string;
  description: string;
  formUrl: string;
  image?: string;
  color: string;
  allowedRoles?: string[];
}
