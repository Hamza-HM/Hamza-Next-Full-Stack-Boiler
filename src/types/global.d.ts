import { PROTECTED_ROUTES } from '@/config/links';

type ProtectedRoute = (typeof PROTECTED_ROUTES)[keyof typeof PROTECTED_ROUTES];
