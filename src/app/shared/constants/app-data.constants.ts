import { Category, System } from '../models/interfaces';

//comentarios para no olvidarme como funciona la logica de los objetos

//se añaden los sistemas, no tomar en cuenta el formlUrl y allowedRoles
const BASE_SYSTEMS: System[] = [
  {
    id: 'sorti-ec',
    name: 'Jugadores',
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

// Url de cada sistema por categoria (Cada categoria tiene formularios distintos)
const FORM_URLS: Record<string, Record<string, string>> = {
  'reportar-incidentes': {
    'sorti-ec':
      'https://forms.clickup.com/9011644237/f/8cj5hud-24931/EGQXT0MUP6HUGLLSCL?TIPO%20SISTEMA=BET',
    sorticenter:
      'https://forms.clickup.com/9011644237/f/8cj5hud-24931/EGQXT0MUP6HUGLLSCL?TIPO%20SISTEMA=CENTER',
    backoffice:
      'https://forms.clickup.com/9011644237/f/8cj5hud-24931/EGQXT0MUP6HUGLLSCL?TIPO%20SISTEMA=BO',
    contabilidad:
      'https://forms.clickup.com/9011644237/f/8cj5hud-24931/EGQXT0MUP6HUGLLSCL?TIPO%20SISTEMA=CONTABILIDAD',
    'growth-hacking':
      'https://forms.clickup.com/9011644237/f/8cj5hud-24931/EGQXT0MUP6HUGLLSCL?TIPO%20SISTEMA=GROWTH',
  },
  'mejoras-requerimientos': {
    'sorti-ec':
      'https://forms.clickup.com/9011644237/f/8cj5hud-24971/MWQPSUJXF70OMZY3Z2?TIPO%20SISTEMA=BET',
    sorticenter:
      'https://forms.clickup.com/9011644237/f/8cj5hud-24971/MWQPSUJXF70OMZY3Z2?TIPO%20SISTEMA=CENTER',
    backoffice:
      'https://forms.clickup.com/9011644237/f/8cj5hud-24971/MWQPSUJXF70OMZY3Z2?TIPO%20SISTEMA=BO',
    contabilidad:
      'https://forms.clickup.com/9011644237/f/8cj5hud-24971/MWQPSUJXF70OMZY3Z2?TIPO%20SISTEMA=CONTABILIDAD',
    'growth-hacking':
      'https://forms.clickup.com/9011644237/f/8cj5hud-24971/MWQPSUJXF70OMZY3Z2?TIPO%20SISTEMA=GROWTH',
  },
  'gestion-riesgos': {
    'sorti-ec':
      'https://forms.clickup.com/90131692209/f/2ky48ynh-4613/J34B2F86W8E9ZNTO35',
  },
  'solicitud-servicios': {
    'sorti-ec':
      'https://forms.clickup.com/90131692209/f/2ky48ynh-5273/PZTYP6L12ZR3HL0E49',
  },
  'consulta-apuestas': {
    'sorti-ec':
      'https://forms.clickup.com/9011644237/f/8cj5hud-24951/212YWBBS2JXD4D8FQN?TIPO%20SISTEMA=BET',
  },
};

//aqui se asignan los roles a cada sistema, cada sistema está asignado a una categoria
const CATEGORY_SYSTEM_ROLES: Record<string, Record<string, string[]>> = {
  'mejoras-requerimientos': {
    'sorti-ec': ['atc', 'riesgo', 'master'],
    sorticenter: ['atc', 'riesgo', 'master'],
    backoffice: ['atc', 'riesgo', 'master'],
    contabilidad: ['atc', 'riesgo', 'master'],
    'growth-hacking': ['atc', 'riesgo', 'master'],
  },
  'reportar-incidentes': {
    'sorti-ec': ['atc', 'riesgo', 'master'],
    sorticenter: ['atc', 'riesgo', 'master'],
    backoffice: ['atc', 'riesgo', 'master'],
    contabilidad: ['atc', 'riesgo', 'master'],
    'growth-hacking': ['atc', 'riesgo', 'master'],
  },
  'gestion-riesgos': {
    'sorti-ec': ['atc', 'riesgo', 'master'],
    sorticenter: [],
    backoffice: [],
    contabilidad: [],
    'growth-hacking': [],
  },
  'solicitud-servicios': {
    'sorti-ec': ['atc', 'riesgo', 'master'],
    sorticenter: [],
    backoffice: [],
    contabilidad: [],
    'growth-hacking': [],
  },
  'consulta-apuestas': {
    'sorti-ec': ['atc', 'riesgo', 'master'],
    sorticenter: [],
    backoffice: [],
    contabilidad: [],
    'growth-hacking': [],
  },
};

function createSystemsForCategory(categoryId: string): System[] {
  const categoryRoles = CATEGORY_SYSTEM_ROLES[categoryId];
  const categoryFormUrls = FORM_URLS[categoryId];

  if (!categoryRoles) {
    return [];
  }

  return BASE_SYSTEMS.filter((system) => {
    const roles = categoryRoles[system.id];
    return roles && roles.length > 0;
  }).map((system) => {
    const systemName =
      categoryId === 'gestion-riesgos' && system.id === 'sorti-ec'
        ? 'Jugadores y agentes'
        : system.name;

    return {
      ...system,
      name: systemName,
      allowedRoles: categoryRoles[system.id] || [],
      formUrl: categoryFormUrls?.[system.id] || '',
    };
  });
}

//se añaden las categorias y los roles que pueden acceder a cada categoria
export const CATEGORIES: Category[] = [
  {
    id: 'mejoras-requerimientos',
    name: 'Solicitud de Servicios de Innovación y Desarrollo',
    description: 'Solicitudes de mejoras y nuevas funcionalidades',
    icon: 'improvements',
    image: '/assets/img/categories/mejoras.png',
    color: 'from-blue-600 to-blue-700',
    allowedRoles: ['atc', 'master', 'riesgo'],
    systems: createSystemsForCategory('mejoras-requerimientos'),
  },
  {
    id: 'reportar-incidentes',
    name: 'Reporte de incidente',
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
    name: 'Solicitud de Eventos',
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
