export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  description?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description?: string;
  iconKey?: string;
  items: ServiceItem[];
}
