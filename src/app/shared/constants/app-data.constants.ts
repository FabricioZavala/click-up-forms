export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  systems: System[];
}

export interface System {
  id: string;
  name: string;
  description: string;
  formUrl: string;
  color: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'bugs',
    name: 'Bugs',
    description: 'Reportar errores y problemas técnicos',
    icon: 'bug',
    color: 'from-slate-600 to-slate-700',
    systems: [
      {
        id: 'sorti',
        name: 'Sorti',
        description: 'Sistema principal de gestión',
        formUrl: '',
        color: 'from-blue-600 to-blue-700',
      },
      {
        id: 'backoffice',
        name: 'BackOffice',
        description: 'Panel de administración',
        formUrl: '',
        color: 'from-gray-600 to-gray-700',
      },
      {
        id: 'contabilidad',
        name: 'Contabilidad',
        description: 'Sistema contable',
        formUrl: '',
        color: 'from-emerald-600 to-emerald-700',
      },
    ],
  },
  {
    id: 'riesgo',
    name: 'Riesgo',
    description: 'Gestión de riesgos y seguridad',
    icon: 'shield',
    color: 'from-amber-600 to-amber-700',
    systems: [
      {
        id: 'sorticenter',
        name: 'SortiCenter',
        description: 'Centro de control de riesgos',
        formUrl: '',
        color: 'from-orange-600 to-orange-700',
      },
      {
        id: 'contabilidad',
        name: 'Contabilidad',
        description: 'Auditoría contable',
        formUrl: '',
        color: 'from-emerald-600 to-emerald-700',
      },
    ],
  },
  {
    id: 'otras',
    name: 'Otras',
    description: 'Solicitudes generales y otros temas',
    icon: 'folder',
    color: 'from-indigo-600 to-indigo-700',
    systems: [
      {
        id: 'sorti',
        name: 'Sorti',
        description: 'Consultas generales',
        formUrl: '',
        color: 'from-blue-600 to-blue-700',
      },
      {
        id: 'grown-hacking',
        name: 'Growth Hacking',
        description: 'Estrategias de crecimiento',
        formUrl: '',
        color: 'from-violet-600 to-violet-700',
      },
      {
        id: 'backoffice',
        name: 'BackOffice',
        description: 'Soporte administrativo',
        formUrl: '',
        color: 'from-gray-600 to-gray-700',
      },
    ],
  },
];

export const ICONS = {
  bug: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="m8 2 1.88 1.88"/>
    <path d="M14.12 3.88 16 2"/>
    <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/>
    <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"/>
    <path d="M12 20v-9"/>
    <path d="M6.53 9C4.6 8.8 3 7.1 3 5"/>
    <path d="M6 13H2"/>
    <path d="M3 21c0-2.1 1.7-3.9 3.8-4"/>
    <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"/>
    <path d="M22 13h-4"/>
    <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"/>
  </svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.68-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
    <path d="M12 8v5"/>
    <path d="M12 16h.01"/>
  </svg>`,
  folder: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>
  </svg>`,
};
