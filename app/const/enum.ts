export enum AppRoutes {
  HOME = '/',
  SURVEY = '/survey',
  SUMMARY = AppRoutes.SURVEY + '/summary',
  GENERAL = AppRoutes.SURVEY + '/general',
  DRAFT = AppRoutes.SURVEY + '/draft',
  DRAFT_PREV = '/draft:prev',
  SIGN_IN = '/auth/signin',
  SIGN_UP = '/auth/signup',
  HISTORY = '/history',
  NOT_FOUND = '*',
}

export enum Variant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  ICON = 'icon',
  LINK = 'link',
  BUTTON = 'button',
}

export const navMenuItems = [
  { path: AppRoutes.HOME, label: 'Home' },
  { path: '-', label: '-' },
  { path: AppRoutes.SUMMARY, label: 'Summary' },
  { path: AppRoutes.GENERAL, label: 'General dimension' },
  { path: AppRoutes.DRAFT, label: 'Draft' },
  { path: '-', label: '-' },
  { path: AppRoutes.HISTORY, label: 'History' },
  { path: '-', label: '-' },
  { path: AppRoutes.SIGN_IN, label: 'Sign in' },
  { path: AppRoutes.SIGN_UP, label: 'Sign up' },
];
