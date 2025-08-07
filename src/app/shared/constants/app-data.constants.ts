import { Category, System } from '../models/interfaces';

const BASE_SYSTEMS: System[] = [
  {
    id: 'sorti-ec',
    name: 'Sorti.ec',
    description: 'Sistema de apuestas de Sorti',
    formUrl: '',
    image: '/assets/img/systems/sorti-ec.png',
    color: 'from-blue-600 to-blue-700',
    allowedRoles: [],
  },
  {
    id: 'sorticenter',
    name: 'SortiCenter',
    description: 'Sistema de gestión',
    formUrl: '',
    image: '/assets/img/systems/sorti-center.png',
    color: 'from-emerald-600 to-emerald-700',
    allowedRoles: [],
  },
  {
    id: 'backoffice',
    name: 'BackOffice',
    description: 'Panel de administración',
    formUrl: '',
    image: '/assets/img/systems/backoffice.png',
    color: 'from-gray-600 to-gray-700',
    allowedRoles: [],
  },
  {
    id: 'contabilidad',
    name: 'Contabilidad',
    description: 'Sistema contable',
    formUrl: '',
    image: '/assets/img/systems/contabilidad.png',
    color: 'from-orange-600 to-orange-700',
    allowedRoles: [],
  },
  {
    id: 'growth-hacking',
    name: 'Growth Hacking',
    description: 'Herramientas de crecimiento',
    formUrl: '',
    image: '/assets/img/systems/growth-hacking.png',
    color: 'from-violet-600 to-violet-700',
    allowedRoles: [],
  },
];

const CATEGORY_SYSTEM_ROLES: Record<string, Record<string, string[]>> = {
  bugs: {
    'sorti-ec': ['atc', 'soporte','fabricio'],
    sorticenter: ['atc', 'soporte'],
    backoffice: ['atc', 'soporte'],
    contabilidad: ['atc', 'soporte'],
    'growth-hacking': ['atc', 'soporte'],
  },
  mejoras: {
    'sorti-ec': ['atc', 'soporte','fabricio'],
    sorticenter: ['atc', 'soporte'],
    backoffice: ['atc', 'soporte'],
    contabilidad: ['atc', 'soporte'],
    'growth-hacking': ['atc', 'soporte'],
  },
  marketing: {
    'sorti-ec': [],
    sorticenter: ['marketing'],
    backoffice: ['marketing'],
    contabilidad: [],
    'growth-hacking': [],
  },
  riesgo: {
    'sorti-ec': ['riesgo'],
    sorticenter: [],
    backoffice: ['riesgo'],
    contabilidad: [],
    'growth-hacking': [],
  },
  soporte: {
    'sorti-ec': ['atc', 'soporte'],
    sorticenter: ['atc', 'soporte'],
    backoffice: ['atc', 'soporte'],
    contabilidad: ['atc', 'soporte'],
    'growth-hacking': ['atc', 'soporte'],
  },
};

function createSystemsForCategory(categoryId: string): System[] {
  const categoryRoles = CATEGORY_SYSTEM_ROLES[categoryId];
  if (!categoryRoles) {
    return [];
  }

  return BASE_SYSTEMS.map((system) => ({
    ...system,
    allowedRoles: categoryRoles[system.id] || [],
  }));
}

export const CATEGORIES: Category[] = [
  {
    id: 'bugs',
    name: 'Bugs',
    description: 'Reportar errores y problemas técnicos',
    icon: 'bug',
    image: '/assets/img/categories/bugs.png',
    color: 'from-red-600 to-red-700',
    allowedRoles: ['atc', 'soporte','fabricio'],
    systems: createSystemsForCategory('bugs'),
  },
  {
    id: 'mejoras',
    name: 'Mejoras o Requerimientos de Cambio',
    description: 'Solicitudes de mejoras y nuevas funcionalidades',
    icon: 'improvements',
    image: '/assets/img/categories/mejoras.png',
    color: 'from-blue-600 to-blue-700',
    allowedRoles: ['atc', 'soporte', 'fabricio'],
    systems: createSystemsForCategory('mejoras'),
  },
  {
    id: 'marketing',
    name: 'Marketing y Contenido',
    description: 'Estrategias de marketing y gestión de contenido',
    icon: 'marketing',
    image: '/assets/img/categories/marketing.png',
    color: 'from-pink-600 to-pink-700',
    allowedRoles: ['marketing','fabricio'],
    systems: createSystemsForCategory('marketing', ),
  },
  {
    id: 'riesgo',
    name: 'Riesgo',
    description: 'Gestión de riesgos y seguridad',
    icon: 'shield',
    image: '/assets/img/categories/riesgo.png',
    color: 'from-amber-600 to-amber-700',
    allowedRoles: ['riesgo',],
    systems: createSystemsForCategory('riesgo'),
  },
  {
    id: 'soporte',
    name: 'Soporte Administrativo',
    description: 'Asistencia y soporte para procesos administrativos',
    icon: 'support',
    image: '/assets/img/categories/soporte.png',
    color: 'from-teal-600 to-teal-700',
    allowedRoles: ['atc', 'soporte', 'fabricio'],
    systems: createSystemsForCategory('soporte'),
  },
];
