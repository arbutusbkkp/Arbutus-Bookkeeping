import {
  CalendarCheck,
  ArchiveRestore,
  Receipt,
  MapPin,
  Check,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Star,
  BadgeCheck,
  ShieldCheck,
  GraduationCap,
  ArrowRight,
  Menu,
  X,
} from 'lucide-react';

// Explicit registry (rather than lucide-react's `icons` barrel) so unused
// glyphs are tree-shaken out of the production bundle. Add new entries here
// as new icon names are introduced in content.
const REGISTRY = {
  'calendar-check': CalendarCheck,
  'archive-restore': ArchiveRestore,
  receipt: Receipt,
  'map-pin': MapPin,
  check: Check,
  phone: Phone,
  mail: Mail,
  clock: Clock,
  'check-circle': CheckCircle,
  star: Star,
  'badge-check': BadgeCheck,
  'shield-check': ShieldCheck,
  'graduation-cap': GraduationCap,
  'arrow-right': ArrowRight,
  menu: Menu,
  x: X,
};

/** Lucide glyph, sized in ems of the surrounding text by default. */
export function Icon({ name, size = 20, strokeWidth = 1.75, color = 'currentColor', label, style, ...rest }) {
  const Glyph = REGISTRY[name];
  if (!Glyph) return null;
  return (
    <Glyph
      width={size}
      height={size}
      stroke={color}
      strokeWidth={strokeWidth}
      aria-hidden={label ? undefined : 'true'}
      aria-label={label}
      role={label ? 'img' : undefined}
      style={{ display: 'block', flex: '0 0 auto', ...style }}
      {...rest}
    />
  );
}
