const ERROR = {
    50: '#FFEBEE',
    100: '#FFCDD2',
    200: '#EF9A9A',
    300: '#E57373',
    400: '#EF5350',
    500: '#D13239',
    600: '#E53935',
    700: '#D32F2F',
    800: '#C62828',
    900: '#B71C1C',
    main: '#D13239',
  }
  
  const SUCCESS = {
    50: '#E8F5E9',
    100: '#C8E6C9',
    200: '#A5D6A7',
    300: '#81C784',
    400: '#66BB6A',
    500: '#6CC04A',
    600: '#43A047',
    700: '#388E3C',
    800: '#2E7D32',
    900: '#1B5E20',
    main: '#6CC04A',
  }
  
  const GREEN = {
    outline: '#5AD65F',
    fill: '#CEFFD0',
    fillLighter: '#E5FFE7',
    success: '#6CC04A',
  }
  
  const SURFACE = {
    50: '#FFFFFF',
    100: '#F9F9F9',
    200: '#EAEAEA',
    300: '#C6C6C6',
    400: '#A1A1A1',
    500: '#7D7D7D',
    600: '#5A5A5A',
    700: '#363636',
    800: '#2C2C2C',
    900: '#222222',
    A100: '#E8F2F1',
    A200: '#2E6A6E',
    A400: '#094273',
    A700: '#0B0D12',
    blueGrayBLN: '#5C6771',
    main: '#7D7D7D',
  }
  
  const GRAY = {
    extraLightGray: '#EAEAEA',
    whiteLilac: '#F6F7FB',
    lightGray: '#F4F4F4',
    mediumGray: '#D6D6D6',
    gray: '#707070',
    darkGray: '#5C6771',
    black: '#363636',
    dividerGray: '#B8B8B8',
  }
  
  const PRIMARY = {
    main: '#FFDB00',
    50: '#FFFAD9',
    100: '#FFF7A4',
    200: '#FFF56D',
    300: '#FFF23A',
    400: '#FFF000',
    500: '#FFDB00',
    600: '#F9C801',
    700: '#FFBB06',
    800: '#FBA500',
    900: '#E79800',
  }
  
  const WARNING = {
    main: '#FF9800',
    50: '#FFF3E0',
    100: '#FFE0B2',
    200: '#FFCC80',
    300: '#FFB74D',
    400: '#FFA726',
    500: '#FF9800',
    600: '#FB8C00',
    700: '#F57C00',
    800: '#EF6C00',
    900: '#E65100',
  }
  
  const INFO = {
    main: '#2196F3',
    50: '#E3F2FD',
    100: '#BBDEFB',
    200: '#90CAF9',
    300: '#64B5F6',
    400: '#42A5F5',
    500: '#2196F3',
    600: '#1E88E5',
    700: '#1976D2',
    800: '#1565C0',
    900: '#0D47A1',
  }
  
  export const DEAL_STATUSES = {
    'Pending Approval': PRIMARY[600],
    Approved: INFO[600],
    Expired: SURFACE[300],
    Active: SUCCESS[500],
    Suspended: ERROR[500],
  }
  
  /**
   * COLORS to be used in the project.
   */
  
  export const COLORS = {
    gray: GRAY,
    error: ERROR,
    green: GREEN,
    success: SUCCESS,
    surface: SURFACE,
    primary: PRIMARY,
    warning: WARNING,
    dealStatus: DEAL_STATUSES,
    blue: INFO,
    lightBlue: '#0fd8e2',
    red: '#D13239',
    orange: '#E79800',
  }
  