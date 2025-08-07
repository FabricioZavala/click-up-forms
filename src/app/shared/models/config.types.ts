export interface CategoryConfig {
  label: string;
  icon: string;
  roles: string[];
  systems: Record<string, string>;
}

export interface FormConfig {
  roles: string[];
  categories: Record<string, CategoryConfig>;
}
