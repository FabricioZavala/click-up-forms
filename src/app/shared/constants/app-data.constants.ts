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
  'mejoras-requerimientos': {
    'sorti-ec': ['atc', 'master'],
    sorticenter: ['atc', 'master'],
    backoffice: ['atc', 'master'],
    contabilidad: ['atc', 'master'],
    'growth-hacking': ['atc', 'master'],
  },
  'reportar-incidentes': {
    'sorti-ec': ['atc', 'riesgo', 'master'],
    sorticenter: ['atc', 'riesgo', 'master'],
    backoffice: ['atc', 'riesgo', 'master'],
    contabilidad: ['atc', 'riesgo', 'master'],
    'growth-hacking': ['atc', 'riesgo', 'master'],
  },
  'gestion-riesgos': {
    'sorti-ec': [ 'master'],
    sorticenter: ['riesgo', 'master'],
    backoffice: ['riesgo', 'master'],
    contabilidad: [ 'master'],
    'growth-hacking': [ 'master'],
  },
  'solicitud-servicios': {
    'sorti-ec': ['master'],
    sorticenter: ['riesgo', 'master'],
    backoffice: ['riesgo', 'master'],
    contabilidad: ['riesgo', 'master'],
    'growth-hacking': ['riesgo', 'master'],
  },
  'consulta-apuestas': {
    'sorti-ec': ['atc', 'master'],
    sorticenter: ['master'],
    backoffice: ['master'],
    contabilidad: ['master'],
    'growth-hacking': ['master'],
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
    id: 'mejoras-requerimientos',
    name: 'Mejoras o Requerimientos de Cambio',
    description: 'Solicitudes de mejoras y nuevas funcionalidades',
    icon: 'improvements',
    image: '/assets/img/categories/mejoras.png',
    color: 'from-blue-600 to-blue-700',
    allowedRoles: ['atc', 'master', 'riesgo'],
    systems: createSystemsForCategory('mejoras-requerimientos'),
  },
  {
    id: 'reportar-incidentes',
    name: 'Reportar un Incidente',
    description: 'Reportar errores y problemas técnicos',
    icon: 'bug',
    image: '/assets/img/categories/bugs.png',
    color: 'from-red-600 to-red-700',
    allowedRoles: ['atc', 'riesgo', 'master'],
    systems: createSystemsForCategory('reportar-incidentes'),
  },
  {
    id: 'gestion-riesgos',
    name: 'Gestión de Riesgos',
    description: 'Gestión de riesgos y seguridad',
    icon: 'shield',
    image: '/assets/img/categories/riesgo.png',
    color: 'from-amber-600 to-amber-700',
    allowedRoles: ['riesgo', 'master'],
    systems: createSystemsForCategory('gestion-riesgos'),
  },
  {
    id: 'solicitud-servicios',
    name: 'Solicitud de Servicios',
    description: 'Solicitar servicios y asistencia administrativa',
    icon: 'support',
    image: '/assets/img/categories/soporte.png',
    color: 'from-teal-600 to-teal-700',
    allowedRoles: ['riesgo', 'master'],
    systems: createSystemsForCategory('solicitud-servicios'),
  },
  {
    id: 'consulta-apuestas',
    name: 'Consulta de Apuestas Deportivas',
    description: 'Consultas relacionadas con apuestas deportivas',
    icon: 'marketing',
    image: '/assets/img/categories/consultas-apuestas.png',
    color: 'from-green-600 to-green-700',
    allowedRoles: ['atc', 'master'],
    systems: createSystemsForCategory('consulta-apuestas'),
  },
];
