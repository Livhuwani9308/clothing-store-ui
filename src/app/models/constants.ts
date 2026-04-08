export const CONSTANTS = {
  USER: 'user',
};
export const SESSION = {
  USER: 'user',
  JWT_TOKEN: 'jwt_token',
};
export const ROUTE = {
  LOGIN: '/Auth/login',
  REGISTER: '/Auth/register',

  GET_ASSET_LIST: '/Asset/list',
  SEARCH_ASSET: '/Asset/search',
  CREATE_ASSET: '/Asset/create',
  EDIT_ASSET: '/Asset/update',
  DELETE_ASSET: '/Asset/delete',

  GET_BRAND_LIST: '/Brand/list',
  SEARCH_BRAND: '/Brand/search',
  CREATE_BRAND: '/Brand/create',
  EDIT_BRAND: '/Brand/update',
  DELETE_BRAND: '/Brand/delete',

  GET_CATEGORY_LIST: '/Category/list',
  SEARCH_CATEGORY: '/Category/search',
  CREATE_CATEGORY: '/Category/create',
  EDIT_CATEGORY: '/Category/update',
  DELETE_CATEGORY: '/Category/delete',

  SEND_EMAIL: '/Email/send',

  GET_ROLE_LIST: '/Role/list',
  SEARCH_ROLE: '/Role/search',
  CREATE_ROLE: '/Role/create',
  EDIT_ROLE: '/Role/update',
  DELETE_ROLE: '/Role/delete',

  GET_LOCATIONS: '/Generic/locations/list',

  GET_FEATURE_LIST: '/Feature/list',
  GET_FEATURE_BY_ID: '/Feature/search',
  CREATE_FEATURE: '/Feature/create',
  EDIT_FEATURE: '/Feature/update',
  DELETE_FEATURE: '/Feature/delete',

  GET_FEATURE_ACCESS_LIST: '/Feature/access/list',
  GET_FEATURE_ACCESS_BY_ROLE_ID: '/Feature/access/role',
  GET_FEATURE_ACCESS_BY_FEATURE_ID: '/Feature/access/feature',
  CREATE_FEATURE_ACCESS: '/Feature/access/create',
  EDIT_FEATURE_ACCESS: '/Feature/access/update',
  DELETE_FEATURE_ACCESS: '/Feature/access/delete',
};
export const ROLES = {
  ADMIN: 'administrator',
  SUPER_ADMIN: 'superadministrator',
  DEVELOPER: 'developer',
  TESTER: 'tester',
  ANALYST: 'analyst',
};
export const FILETYPE = {
  PDF: 'application/pdf',
  EXCEL_SPREADSHEET:
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  MS_EXCEL: 'application/vnd.ms-excel',
  IMAGE_PNG: 'image/png',
  IMAGE_JPEG: 'image/jpeg',
  VIDEO_MP4: 'video/mp4',
  VIDEO_XM4V: 'video/x-m4v',
  VIDEO_ALL: 'video/*',
  ICS: 'text/calendar',
  WORD: '.docx',
  MS_WORD_XML:
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  MS_WORD: 'application/msword',
};
export const PATTERN = {
  EMAIL_PATTERN: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$',
  PASSWORD_PATTERN:
    '(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{6,}).*$',
  MOBILE_NUMBER_PATTERN: '^[0-9]{10,10}$',
  NAME_PATTERN: '^[a-zA-Z\\s]+$',
  NUMERIC: {
    PATTERN: '^-?[0-9]\\d*(\\.\\d{1,2})?$',
    MESSAGE: 'Must contain numbers',
  },
  NUMERIC_PLUS_SPACE_PATTERN: {
    PATTERN: '^([+-]{0,1}[ ]{0,1}[-]{0,1}[0-9]{1,5}[-]{0,1}[ ]{0,1}){0,4}$',
    MESSAGE: 'Must contain numbers, space, and plus sign.',
  },
  ALPHABETS: {
    PATTERN: '^[a-zA-Z\\s]+$',
    MESSAGE: 'must contain characters',
  },
  ALPHABETS_WITH_DOT: {
    PATTERN: '^[a-zA-Z.\\s]+$',
    MESSAGE: 'must contain characters(including . only)',
  },
  ALPHA_NUMERIC: {
    PATTERN: '^[a-zA-Z0-9\\s]+$',
    MESSAGE: 'must contain alphanumeric',
  },
  GLA_PATTERN: '^[0-9]+(,[0-9]+)*$',
  GLA_PATTERN_INT: '^[0-9]+(.[0-9]+)*$',
  LATITUDE_LONGITUDE_PATTERN: '^[+-]?[0-9]+(?:\\.[0-9]+)?$',
  NUMERIC_SPECIAL_CHARACTERS: {
    PATTERN: '^[0-9/]*$',
    MESSAGE: 'Must contain numbers and special characters',
  },
  PASSWORD_POLICY: {
    PATTERN1:
      '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\\s).{8,20}$',
    PATTERN2: '^(?!.*(?:1234|2345|3456|4567|5678|6789)).*$',
    PATTERN3:
      '^(?!.*(abcd|bcde|cdef|defg|efgh|fghi|ghij|hijk|ijkl|jklm|klmn|lmno|mnop|nopq|opqr|pqrs|qrst|rstu|stuv|tuvw|uvwx|vwxy|wxyz)).*$',
  },
  NUMBER_DECIMAL: '^[0-9]+(\\.[0-9]{2})?$',
  TWO_DECIMAL:
    '^((0)((.0[1-9]{1})?$|(.[1-9][0-9]{0,2})?$)?$|(10)(.[0-0]{0,2})?$|([1-9])(.[0-9]{1,2})?$)',
  NUMBER_DASH: '^[0-9- ]*$',
  NUMBER_PERCENTAGE: '^[0-9%]*$',
};
export const FORM_MODE = {
  VIEW: 'view',
  EDIT: 'edit',
  CREATE: 'create',
  DELETE: 'delete',
  
  EDITSEO: 'edit seo',
  EDITUNITS: 'edit units',
  ADD_UNIT: 'add units',
  RESPOND: 'view / respond',
};