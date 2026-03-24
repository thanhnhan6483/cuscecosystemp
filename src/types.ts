import { LucideIcon } from 'lucide-react';

export interface SubModule {
  id: string;
  title: string;
  icon?: LucideIcon;
  description?: string;
}

export interface Module {
  id: string;
  title: string;
  icon: LucideIcon;
  subModules: SubModule[];
}
