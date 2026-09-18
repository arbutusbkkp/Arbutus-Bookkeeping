/* @ds-bundle: {"format":4,"namespace":"ArbutusBookkeepingDesignSystem_5246cf","components":[{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CheckList","sourcePath":"components/core/CheckList.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"StarRating","sourcePath":"components/core/StarRating.jsx"},{"name":"EmailCaptureForm","sourcePath":"components/forms/EmailCaptureForm.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"CTABanner","sourcePath":"components/marketing/CTABanner.jsx"},{"name":"CredentialStrip","sourcePath":"components/marketing/CredentialStrip.jsx"},{"name":"PricingCard","sourcePath":"components/marketing/PricingCard.jsx"},{"name":"ReviewSummary","sourcePath":"components/marketing/ReviewSummary.jsx"},{"name":"ServiceCard","sourcePath":"components/marketing/ServiceCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/marketing/TestimonialCard.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/brand/Wordmark.jsx":"03bf6149eac1","components/core/Badge.jsx":"523dcffd230d","components/core/Button.jsx":"4e8e06a67606","components/core/Card.jsx":"c13c176d8add","components/core/CheckList.jsx":"7d10438d09ad","components/core/Icon.jsx":"330a8d162dec","components/core/IconButton.jsx":"d83ec6249d2b","components/core/SectionHeading.jsx":"a45615b31627","components/core/StarRating.jsx":"e4117b4b9166","components/forms/EmailCaptureForm.jsx":"f23cb2da1b7a","components/forms/Input.jsx":"6aa6ad0f24c6","components/marketing/CTABanner.jsx":"f88c49f31ed7","components/marketing/CredentialStrip.jsx":"bfdbae286a14","components/marketing/PricingCard.jsx":"dd91560c4a6c","components/marketing/ReviewSummary.jsx":"a66e18e3f1b9","components/marketing/ServiceCard.jsx":"6bcf52148df0","components/marketing/TestimonialCard.jsx":"eeedb87bb24a","components/navigation/SiteFooter.jsx":"517e47d81691","components/navigation/SiteHeader.jsx":"42f7837578a1","ui_kits/website/Contact.jsx":"35b76e85ff22","ui_kits/website/app.jsx":"7a2e9ccfaf00","ui_kits/website/content.jsx":"3dbadb741c5d","ui_kits/website/sections.jsx":"a6168d7fc6ca"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ArbutusBookkeepingDesignSystem_5246cf = window.ArbutusBookkeepingDesignSystem_5246cf || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Type-set wordmark. No logo files were supplied with the brief, so the brand mark
 * IS this typographic lockup — do not substitute a drawn symbol.
 */
function Wordmark({
  tone = 'dark',
  size = 22,
  showTagline = false,
  href,
  logoSrc,
  markOnly = false,
  style,
  ...rest
}) {
  const colors = tone === 'light' ? {
    name: 'var(--paper-050)',
    second: 'var(--green-300)',
    rule: 'var(--gold-400)'
  } : {
    name: 'var(--green-700)',
    second: 'var(--ink-500)',
    rule: 'var(--gold-500)'
  };
  const Tag = href ? 'a' : 'span';
  const mark = logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Arbutus Bookkeeping",
    style: {
      height: size * 2,
      width: 'auto',
      display: 'block'
    }
  }) : null;
  if (markOnly && mark) return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    href: href,
    style: {
      display: 'inline-flex',
      ...style
    }
  }), mark);
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    href: href,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.42,
      textDecoration: 'none',
      lineHeight: 1,
      ...style
    }
  }), mark, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: '0.34em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: size,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '-0.015em',
      color: colors.name
    }
  }, "Arbutus"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: size * 0.5,
      height: 2,
      background: colors.rule,
      alignSelf: 'center',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: size * 0.5,
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: colors.second
    }
  }, "Bookkeeping")), showTagline ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: size * 0.42,
      color: colors.second,
      letterSpacing: '0.02em'
    }
  }, "Clean books. Clear numbers. Real answers.") : null));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Paper panel: hairline border, 14px radius, shadow only on hover for clickable cards. */
function Card({
  children,
  tone = 'paper',
  interactive = false,
  padding,
  as = 'div',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    paper: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      color: 'var(--text-body)'
    },
    tint: {
      background: 'var(--surface-card-tint)',
      border: '1px solid var(--green-200)',
      color: 'var(--text-body)'
    },
    inverse: {
      background: 'var(--surface-inverse)',
      border: '1px solid var(--border-inverse)',
      color: 'var(--text-on-inverse)'
    },
    accent: {
      background: 'var(--surface-accent-soft)',
      border: '1px solid var(--gold-200)',
      color: 'var(--text-body)'
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    onMouseEnter: interactive ? () => setHover(true) : undefined,
    onMouseLeave: interactive ? () => setHover(false) : undefined,
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: padding || 'var(--card-pad)',
      boxShadow: interactive && hover ? 'var(--shadow-lift-hover)' : 'var(--shadow-sm)',
      transform: interactive && hover ? 'translateY(-2px)' : 'none',
      transition: 'var(--transition-control)',
      ...tones[tone],
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const PASCAL = n => String(n).split(/[-_\s]+/).filter(Boolean).map(s => s[0].toUpperCase() + s.slice(1)).join('');
function toEl(node, i) {
  if (!Array.isArray(node)) return null;
  const [tag, attrs, children] = node;
  return React.createElement(tag, {
    key: i,
    ...attrs
  }, Array.isArray(children) ? children.map(toEl) : null);
}
function lookup(name) {
  const L = typeof window !== 'undefined' ? window.lucide : null;
  if (!L) return null;
  const key = PASCAL(name);
  const node = L.icons && L.icons[key] || L[key];
  return Array.isArray(node) ? node : null;
}

/** Lucide glyph, sized in ems of the surrounding text by default. */
function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  color = 'currentColor',
  label,
  style,
  ...rest
}) {
  const [, force] = React.useState(0);
  React.useEffect(() => {
    if (lookup(name)) return undefined;
    let tries = 0;
    const t = setInterval(() => {
      if (lookup(name) || tries++ > 60) {
        clearInterval(t);
        force(v => v + 1);
      }
    }, 50);
    return () => clearInterval(t);
  }, [name]);
  const node = lookup(name);
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': label ? undefined : 'true',
    'aria-label': label,
    role: label ? 'img' : undefined,
    style: {
      display: 'block',
      flex: '0 0 auto',
      ...style
    },
    ...rest
  };
  return React.createElement('svg', common, node ? node.map(toEl) : null);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  accent: {
    background: 'var(--surface-accent)',
    color: 'var(--text-on-accent)',
    border: 'transparent'
  },
  gold: {
    background: 'var(--gold-500)',
    color: 'var(--green-900)',
    border: 'transparent'
  },
  soft: {
    background: 'var(--surface-accent-soft)',
    color: 'var(--gold-900)',
    border: 'transparent'
  },
  evergreen: {
    background: 'var(--green-200)',
    color: 'var(--green-800)',
    border: 'transparent'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-muted)',
    border: 'var(--border-strong)'
  }
};

/** Small pill label: "Most popular" on a pricing tier, "Remote across BC" in a hero. */
function Badge({
  children,
  tone = 'accent',
  icon,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.accent;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      background: t.background,
      color: t.color,
      border: `1px solid ${t.border}`,
      borderRadius: 'var(--radius-pill)',
      padding: '5px 12px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-eyebrow)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      lineHeight: 1.2,
      whiteSpace: 'nowrap',
      ...style
    }
  }), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: 'var(--control-h-sm)',
    padding: '0 16px',
    fontSize: 'var(--text-sm)'
  },
  md: {
    height: 'var(--control-h)',
    padding: '0 22px',
    fontSize: 'var(--text-base)'
  },
  lg: {
    height: '56px',
    padding: '0 28px',
    fontSize: 'var(--text-lead)'
  }
};
function skin(variant, hover, active) {
  if (variant === 'primary') return {
    background: active ? 'var(--action-primary-active)' : hover ? 'var(--action-primary-hover)' : 'var(--action-primary)',
    color: 'var(--text-on-accent)',
    border: '1px solid transparent',
    boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)'
  };
  if (variant === 'secondary') return {
    background: hover ? 'var(--green-100)' : 'transparent',
    color: 'var(--action-secondary)',
    border: '1px solid var(--green-600)',
    boxShadow: 'none'
  };
  if (variant === 'inverse') return {
    background: hover ? 'var(--paper-050)' : 'var(--paper-000)',
    color: 'var(--green-800)',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-sm)'
  };
  return {
    background: 'transparent',
    color: hover ? 'var(--text-link-hover)' : 'var(--text-link)',
    border: '1px solid transparent',
    boxShadow: 'none'
  };
}

/** Primary call-to-action control. Two weights carry the site: filled gold, outlined evergreen. */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  disabled = false,
  type = 'button',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const Tag = href && !disabled ? 'a' : 'button';
  const css = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    boxSizing: 'border-box',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--weight-semibold)',
    lineHeight: 1,
    textDecoration: 'none',
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'var(--transition-control)',
    transform: active && !disabled ? 'scale(var(--press-scale))' : 'none',
    opacity: disabled ? 0.45 : 1,
    ...SIZES[size],
    ...skin(variant, hover && !disabled, active && !disabled),
    ...style
  };
  const glyph = icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 15 : 17
  }) : null;
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    type: Tag === 'button' ? type : undefined,
    href: href,
    style: css,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }), iconPosition === 'left' ? glyph : null, /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: 'nowrap'
    }
  }, children), iconPosition === 'right' ? glyph : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/CheckList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Gold checkmark list. The system's only bullet style for inclusions and benefits. */
function CheckList({
  items,
  icon = 'check',
  size = 'md',
  color = 'var(--mark-check)',
  style,
  ...rest
}) {
  const fs = size === 'sm' ? 'var(--text-sm)' : 'var(--text-base)';
  return /*#__PURE__*/React.createElement("ul", _extends({}, rest, {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: size === 'sm' ? 'var(--space-2)' : 'var(--space-3)',
      ...style
    }
  }), items.map((item, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start',
      margin: 0,
      fontSize: fs,
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: size === 'sm' ? 3 : 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 15 : 17,
    strokeWidth: 2.25,
    color: color
  })), /*#__PURE__*/React.createElement("span", null, item))));
}
Object.assign(__ds_scope, { CheckList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CheckList.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Round icon-only control: social marks in the footer, menu toggle on mobile. */
function IconButton({
  icon,
  label,
  href,
  variant = 'outline',
  size = 40,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  const skins = {
    outline: {
      background: hover ? 'var(--green-100)' : 'transparent',
      borderColor: 'var(--border-strong)',
      color: 'var(--green-700)'
    },
    solid: {
      background: hover ? 'var(--action-primary-hover)' : 'var(--action-primary)',
      borderColor: 'transparent',
      color: 'var(--text-on-accent)'
    },
    inverse: {
      background: hover ? 'rgba(250,246,240,.14)' : 'transparent',
      borderColor: 'var(--border-inverse)',
      color: 'var(--paper-050)'
    }
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    href: href,
    onClick: onClick,
    "aria-label": label,
    title: label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      borderStyle: 'solid',
      borderWidth: 1,
      cursor: 'pointer',
      padding: 0,
      transition: 'var(--transition-control)',
      ...skins[variant],
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.45)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Eyebrow + heading + optional lede, used to open every page section. */
function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'left',
  level = 2,
  maxWidth = 'var(--measure-body)',
  style,
  ...rest
}) {
  const H = `h${level}`;
  return /*#__PURE__*/React.createElement("header", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      marginBottom: 'var(--space-10)',
      ...style
    }
  }), eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-eyebrow)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--gold-600)'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement(H, {
    style: {
      margin: 0,
      fontFamily: 'var(--font-heading)',
      fontSize: level === 1 ? 'var(--text-h1)' : 'var(--text-h2)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-display)',
      lineHeight: 'var(--leading-snug)',
      color: 'var(--text-heading)',
      maxWidth: 'var(--measure-wide)'
    }
  }, title), lede ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-lead)',
      color: 'var(--text-muted)',
      maxWidth,
      lineHeight: 'var(--leading-body)'
    }
  }, lede) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/StarRating.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Five-star row in Google review gold, with optional "4.9 · 21 reviews" caption. */
function StarRating({
  rating = 5,
  size = 16,
  count,
  showValue = false,
  style,
  ...rest
}) {
  const full = Math.round(rating);
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 2
    },
    role: "img",
    "aria-label": `${rating} out of 5`
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    key: i,
    name: "star",
    size: size,
    strokeWidth: 0,
    color: i < full ? 'var(--star-500)' : 'var(--paper-300)',
    style: {
      fill: i < full ? 'var(--star-500)' : 'var(--paper-300)'
    }
  }))), showValue || count ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-figures)',
      fontVariantNumeric: 'tabular-nums',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, showValue ? rating.toFixed(1) : null, showValue && count ? ' · ' : null, count ? `${count} Google reviews` : null) : null);
}
Object.assign(__ds_scope, { StarRating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StarRating.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labelled text field. One visual weight across contact forms and email capture. */
function Input({
  label,
  id,
  type = 'text',
  placeholder,
  hint,
  error,
  multiline = false,
  rows = 4,
  value,
  onChange,
  required = false,
  tone = 'light',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || `f-${label ? label.toLowerCase().replace(/\W+/g, '-') : type}`;
  const onDark = tone === 'inverse';
  const field = {
    width: '100%',
    boxSizing: 'border-box',
    minHeight: multiline ? undefined : 'var(--control-h)',
    padding: multiline ? 'var(--space-3) var(--space-4)' : '0 var(--space-4)',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-base)',
    lineHeight: multiline ? 'var(--leading-body)' : 'var(--control-h)',
    color: 'var(--text-body)',
    background: 'var(--field-bg)',
    border: `1px solid ${error ? 'var(--danger-600)' : focus ? 'var(--border-focus)' : 'var(--field-border)'}`,
    borderRadius: 'var(--radius-sm)',
    outline: 'none',
    boxShadow: focus ? 'var(--focus-ring)' : 'none',
    transition: 'var(--transition-control)',
    resize: multiline ? 'vertical' : undefined
  };
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: onDark ? 'var(--text-on-inverse)' : 'var(--text-body)'
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-500)'
    }
  }, " *") : null) : null, /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    id: inputId,
    type: multiline ? undefined : type,
    rows: multiline ? rows : undefined,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: field
  })), error || hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger-600)' : onDark ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)'
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/EmailCaptureForm.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Single-field email capture used in the secondary CTA banner. */
function EmailCaptureForm({
  placeholder = 'you@business.ca',
  buttonLabel = 'Send it over',
  tone = 'inverse',
  note,
  onSubmit,
  style,
  ...rest
}) {
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    if (onSubmit) onSubmit(email);
  };
  const onDark = tone === 'inverse';
  return /*#__PURE__*/React.createElement("form", _extends({}, rest, {
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      maxWidth: 520,
      ...style
    }
  }), sent ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: onDark ? 'var(--text-on-inverse)' : 'var(--text-body)',
      fontSize: 'var(--text-base)'
    }
  }, "Got it \u2014 I\u2019ll be in touch within one business day.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    type: "email",
    tone: tone,
    placeholder: placeholder,
    value: email,
    onChange: e => setEmail(e.target.value),
    required: true,
    style: {
      flex: '1 1 240px'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    variant: onDark ? 'inverse' : 'primary'
  }, buttonLabel)), note ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: onDark ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)'
    }
  }, note) : null);
}
Object.assign(__ds_scope, { EmailCaptureForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/EmailCaptureForm.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CTABanner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Full-bleed evergreen band that closes a page: headline, one line of copy, one action. */
function CTABanner({
  title,
  body,
  children,
  align = 'left',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({}, rest, {
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-inverse)',
      padding: 'var(--section-y) var(--container-pad)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--text-h2)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-display)',
      lineHeight: 'var(--leading-snug)',
      color: 'var(--paper-050)',
      maxWidth: '24ch'
    }
  }, title), body ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-lead)',
      color: 'var(--text-on-inverse-muted)',
      maxWidth: 'var(--measure-body)'
    }
  }, body) : null, children));
}
Object.assign(__ds_scope, { CTABanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CTABanner.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CredentialStrip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Credential row above the footer. No partner logo files were supplied with the brief,
 * so credentials render as glyph + text lockups, not vendor artwork.
 */
function CredentialStrip({
  items = [],
  link,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)',
      flexWrap: 'wrap',
      padding: 'var(--space-6) 0',
      borderTop: '1px solid var(--border-hairline)',
      borderBottom: '1px solid var(--border-hairline)',
      ...style
    }
  }), items.map((item, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: item.icon || 'badge-check',
    size: 19,
    color: "var(--green-600)"
  }), item.label)), link ? /*#__PURE__*/React.createElement("a", {
    href: link.href,
    style: {
      marginLeft: 'auto',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, link.label, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 15
  })) : null);
}
Object.assign(__ds_scope, { CredentialStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CredentialStrip.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PricingCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** One pricing tier. Prices are ranges, never fixed numbers. */
function PricingCard({
  name,
  price,
  pricePrefix,
  cadence = '/ month',
  bestFor,
  features = [],
  badge,
  highlighted = false,
  ctaLabel = 'Book a call',
  ctaHref = '#contact',
  note,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({}, rest, {
    tone: "paper",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      height: '100%',
      boxSizing: 'border-box',
      position: 'relative',
      borderColor: highlighted ? 'var(--green-600)' : 'var(--border-hairline)',
      borderWidth: highlighted ? 2 : 1,
      boxShadow: highlighted ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      ...style
    }
  }), badge ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -13,
      left: 'var(--card-pad)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "gold"
  }, badge)) : null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 var(--space-3)',
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-heading)'
    }
  }, name), pricePrefix ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      marginBottom: 2
    }
  }, pricePrefix) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-figures)',
      fontVariantNumeric: 'tabular-nums',
      fontSize: '1.75rem',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-body)',
      whiteSpace: 'nowrap'
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, cadence)), bestFor ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-3) 0 0',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, bestFor) : null), /*#__PURE__*/React.createElement(__ds_scope.CheckList, {
    items: features,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    href: ctaHref,
    variant: highlighted ? 'primary' : 'secondary',
    fullWidth: true
  }, ctaLabel), note ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-subtle)',
      textAlign: 'center'
    }
  }, note) : null));
}
Object.assign(__ds_scope, { PricingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PricingCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ReviewSummary.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Aggregate review figure that heads the social-proof section. */
function ReviewSummary({
  rating = 4.9,
  count = 21,
  source = 'Google reviews',
  action,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      flexWrap: 'wrap',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-figures)',
      fontVariantNumeric: 'tabular-nums',
      fontSize: '2rem',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-heading)',
      lineHeight: 1
    }
  }, rating.toFixed(1)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StarRating, {
    rating: rating,
    size: 17
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, count, " ", source)), action ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, action) : null);
}
Object.assign(__ds_scope, { ReviewSummary });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ReviewSummary.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** One of the 3-up service offerings: icon, name, short description, inclusions. */
function ServiceCard({
  icon = 'receipt',
  title,
  description,
  items = [],
  footnote,
  href,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({}, rest, {
    interactive: Boolean(href),
    as: href ? 'a' : 'div',
    href: href,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      textDecoration: 'none',
      height: '100%',
      boxSizing: 'border-box',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-card-tint)',
      color: 'var(--green-700)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 21
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 var(--space-2)',
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-body)'
    }
  }, description)), items.length ? /*#__PURE__*/React.createElement(__ds_scope.CheckList, {
    items: items,
    size: "sm",
    style: {
      marginTop: 'auto'
    }
  }) : null, footnote ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-xs)',
      color: 'var(--text-subtle)'
    }
  }, footnote) : null);
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TestimonialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A single client review, styled after the Google-reviews widget the site embeds. */
function TestimonialCard({
  quote,
  name,
  meta,
  rating = 5,
  initials,
  source = 'Posted on Google',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      height: '100%',
      boxSizing: 'border-box',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.StarRating, {
    rating: rating,
    size: 15
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-body)'
    }
  }, quote), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--green-200)',
      color: 'var(--green-800)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, initials || String(name || '?').slice(0, 1)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-subtle)'
    }
  }, meta || source))));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Evergreen footer: wordmark + contact, repeated nav, social marks, copyright. */
function SiteFooter({
  nav = [],
  phone = '(778) 870-2340',
  email = 'arbutusbkkp@gmail.com',
  logoSrc,
  socials = [],
  onNavigate,
  note = 'Tax-ready books for small businesses across the Greater Vancouver Area.',
  style,
  ...rest
}) {
  const go = item => e => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(item);
    }
  };
  const link = {
    fontSize: 'var(--text-sm)',
    color: 'var(--text-on-inverse-muted)',
    textDecoration: 'none'
  };
  return /*#__PURE__*/React.createElement("footer", _extends({}, rest, {
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-inverse)',
      padding: 'var(--space-16) var(--container-pad) var(--space-8)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'minmax(260px,1.4fr) repeat(2,minmax(140px,1fr))',
      gap: 'var(--space-12)'
    },
    className: "ab-foot"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    tone: "light",
    size: 22,
    logoSrc: logoSrc
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-on-inverse-muted)',
      maxWidth: '34ch'
    }
  }, note), socials.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, socials.map(s => /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    key: s.label,
    icon: s.icon,
    label: s.label,
    href: s.href,
    variant: "inverse",
    size: 38
  }))) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--green-400)'
    }
  }, "Pages"), nav.map(item => /*#__PURE__*/React.createElement("a", {
    key: item.label,
    href: item.href,
    onClick: go(item),
    style: link
  }, item.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--green-400)'
    }
  }, "Get in touch"), /*#__PURE__*/React.createElement("a", {
    href: `tel:${phone.replace(/\D/g, '')}`,
    style: {
      ...link,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 14
  }), phone), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${email}`,
    style: {
      ...link,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mail",
    size: 14
  }), email))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: 'var(--space-12) auto 0',
      paddingTop: 'var(--space-5)',
      borderTop: '1px solid var(--border-inverse)',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--green-400)'
    }
  }, "\xA9 ", new Date().getFullYear(), " Arbutus Bookkeeping"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--green-400)'
    }
  }, "CPA \xB7 Certified QuickBooks ProAdvisor")), /*#__PURE__*/React.createElement("style", null, '@media (max-width:760px){.ab-foot{grid-template-columns:1fr!important;gap:var(--space-8)!important}}'));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Sticky site header: wordmark left, nav centre-right, tap-to-call phone, CTA. */
function SiteHeader({
  nav = [],
  active,
  onNavigate,
  phone = '(778) 870-2340',
  ctaLabel = 'Book a free call',
  ctaHref = '#contact',
  logoSrc,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const go = item => e => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(item);
    }
    setOpen(false);
  };
  return /*#__PURE__*/React.createElement("header", _extends({}, rest, {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'color-mix(in srgb, var(--surface-page) 92%, transparent)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border-hairline)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-4) var(--container-pad)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    href: "#top",
    size: 20,
    logoSrc: logoSrc,
    onClick: onNavigate ? go(nav[0]) : undefined
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      marginLeft: 'auto'
    },
    className: "ab-nav"
  }, nav.map(item => {
    const isActive = active === item.label;
    return /*#__PURE__*/React.createElement("a", {
      key: item.label,
      href: item.href,
      onClick: go(item),
      style: {
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--weight-medium)',
        textDecoration: 'none',
        color: isActive ? 'var(--green-700)' : 'var(--text-muted)',
        whiteSpace: 'nowrap',
        paddingBottom: 2,
        borderBottom: `2px solid ${isActive ? 'var(--gold-500)' : 'transparent'}`,
        transition: 'var(--transition-control)'
      }
    }, item.label);
  })), /*#__PURE__*/React.createElement("a", {
    href: `tel:${phone.replace(/\D/g, '')}`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      textDecoration: 'none',
      color: 'var(--green-700)',
      whiteSpace: 'nowrap'
    },
    className: "ab-phone"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 15
  }), phone), /*#__PURE__*/React.createElement("span", {
    className: "ab-cta"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    href: ctaHref,
    size: "sm"
  }, ctaLabel)), /*#__PURE__*/React.createElement("span", {
    className: "ab-burger",
    style: {
      display: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: open ? 'x' : 'menu',
    label: "Menu",
    size: 44,
    onClick: () => setOpen(v => !v)
  }))), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-hairline)',
      padding: 'var(--space-4) var(--container-pad)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      background: 'var(--surface-page)'
    }
  }, nav.map(item => /*#__PURE__*/React.createElement("a", {
    key: item.label,
    href: item.href,
    onClick: go(item),
    style: {
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--weight-medium)',
      textDecoration: 'none',
      color: active === item.label ? 'var(--green-700)' : 'var(--text-muted)'
    }
  }, item.label)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    href: ctaHref
  }, ctaLabel)) : null, /*#__PURE__*/React.createElement("style", null, '@media (max-width:1010px){.ab-nav,.ab-phone,.ab-cta{display:none!important}.ab-burger{display:inline-flex!important;margin-left:auto}}'));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
const SERVICE_OPTIONS = ['Monthly bookkeeping', 'Cleanup & catch-up', 'Sales tax filing', 'Not sure yet'];
function ServiceSelect({
  value,
  onChange
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "svc",
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      color: 'var(--text-body)'
    }
  }, "What do you need?"), /*#__PURE__*/React.createElement("select", {
    id: "svc",
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      height: 'var(--control-h)',
      padding: '0 var(--space-4)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      background: 'var(--field-bg)',
      appearance: 'none',
      border: `1px solid ${focus ? 'var(--border-focus)' : 'var(--field-border)'}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      outline: 'none',
      transition: 'var(--transition-control)'
    }
  }, SERVICE_OPTIONS.map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o))));
}
function Contact() {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    service: SERVICE_OPTIONS[0],
    message: ''
  });
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  return /*#__PURE__*/React.createElement(Section, {
    id: "contact"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Contact",
    title: "Tell me what\u2019s going on with your books",
    lede: "Call, email, or send the form \u2014 whichever is easiest. I reply personally, usually within one business day."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,.75fr) minmax(0,1.25fr)',
      gap: 'clamp(28px,4vw,56px)',
      alignItems: 'start'
    },
    className: "ab-split"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "paper"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: `tel:${BRAND.phone.replace(/\D/g, '')}`,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      textDecoration: 'none',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 18,
    color: "var(--action-primary)"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-subtle)'
    }
  }, "Phone"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      fontWeight: 500
    }
  }, BRAND.phone))), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${BRAND.email}`,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      textDecoration: 'none',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 18,
    color: "var(--action-primary)"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-subtle)'
    }
  }, "Email"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      fontWeight: 500,
      wordBreak: 'break-all'
    }
  }, BRAND.email))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 18,
    color: "var(--action-primary)"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-subtle)'
    }
  }, "Service area"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      fontWeight: 500
    }
  }, BRAND.area))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 18,
    color: "var(--action-primary)"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-subtle)'
    }
  }, "Hours"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      fontWeight: 500
    }
  }, "Mon\u2013Fri, 9:00\u20135:00 PT"))))), /*#__PURE__*/React.createElement(Card, {
    tone: "tint"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 8px',
      fontSize: 'var(--text-h4)',
      fontFamily: 'var(--font-body)'
    }
  }, "What happens next"), /*#__PURE__*/React.createElement(CheckList, {
    size: "sm",
    items: ['A reply within one business day', 'A 20-minute call, no pitch', 'A written quote after I see the file']
  }))), /*#__PURE__*/React.createElement(Card, {
    tone: "paper"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 34,
    color: "var(--success-600)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--text-h3)'
    }
  }, "Thanks \u2014 that\u2019s with me"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)'
    }
  }, "I\u2019ll read it today and come back with two questions and a couple of times to talk. If it\u2019s urgent, call ", BRAND.phone, "."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSent(false)
  }, "Send another")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    },
    className: "ab-2up"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your name",
    value: form.name,
    onChange: set('name'),
    placeholder: "Jordan Lee",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Business name",
    value: form.business,
    onChange: set('business'),
    placeholder: "Lee Contracting Ltd."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    },
    className: "ab-2up"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    value: form.email,
    onChange: set('email'),
    placeholder: "you@business.ca",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    type: "tel",
    value: form.phone,
    onChange: set('phone'),
    placeholder: "(604) 555-0142",
    hint: "Optional"
  })), /*#__PURE__*/React.createElement(ServiceSelect, {
    value: form.service,
    onChange: set('service')
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Anything I should know?",
    multiline: true,
    rows: 5,
    value: form.message,
    onChange: set('message'),
    placeholder: "Two years behind in QuickBooks and a GST deadline in March\u2026",
    hint: "A sentence or two is plenty."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit"
  }, "Send it over"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-subtle)'
    }
  }, "No newsletter, no drip sequence \u2014 just a reply from me."))))));
}
Object.assign(window, {
  Contact,
  ServiceSelect
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
/* Palette switcher — the two directions built from the logo.
   Grove is the default (warm, green + gold); Harbour is the cooler navy-led scope
   defined in tokens/themes.css. This control is a review affordance, not site chrome. */
function PaletteSwitch() {
  const [theme, setTheme] = React.useState(() => localStorage.getItem('ab-theme') || 'grove');
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ab-theme', theme);
  }, [theme]);
  const opt = (id, label, swatches) => {
    const on = theme === id;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => setTheme(id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '7px 12px 7px 9px',
        cursor: 'pointer',
        border: `1px solid ${on ? 'var(--action-primary)' : 'transparent'}`,
        borderRadius: 'var(--radius-pill)',
        background: on ? 'var(--surface-card)' : 'transparent',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-xs)',
        fontWeight: 600,
        color: on ? 'var(--text-heading)' : 'var(--text-muted)',
        transition: 'var(--transition-control)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex'
      }
    }, swatches.map((c, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: 11,
        height: 11,
        borderRadius: '50%',
        background: c,
        marginLeft: i ? -3 : 0,
        boxShadow: '0 0 0 1.5px var(--surface-card)'
      }
    }))), label);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 16,
      top: 88,
      zIndex: 50,
      display: 'flex',
      gap: 4,
      padding: 4,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-alt)',
      border: '1px solid var(--border-hairline)',
      boxShadow: 'var(--shadow-md)'
    }
  }, opt('grove', 'Grove', ['#1B5A2E', '#C09A35', '#FAF8F3']), opt('harbour', 'Harbour', ['#1F4F7E', '#26763C', '#F6F8FA']));
}
function Site() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    nav: NAV,
    phone: BRAND.phone,
    ctaLabel: "Book a free call",
    ctaHref: "#contact",
    logoSrc: BRAND.logo
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(Pricing, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Closing, null), /*#__PURE__*/React.createElement(Container, {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(CredentialStrip, {
    items: CREDENTIALS
  })), /*#__PURE__*/React.createElement(Contact, null)), /*#__PURE__*/React.createElement(SiteFooter, {
    nav: NAV,
    phone: BRAND.phone,
    email: BRAND.email,
    logoSrc: BRAND.logoLight
  }), /*#__PURE__*/React.createElement(PaletteSwitch, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(Site, null));
lucide.createIcons();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/content.jsx
try { (() => {
const {
  Button,
  Card,
  CheckList,
  Badge,
  Icon,
  SectionHeading,
  ServiceCard,
  PricingCard,
  CredentialStrip,
  CTABanner,
  Input,
  EmailCaptureForm,
  SiteHeader,
  SiteFooter,
  Wordmark
} = window.ArbutusBookkeepingDesignSystem_5246cf;
const BRAND = {
  name: 'Arbutus Bookkeeping',
  person: 'Logan Shim, CPA',
  area: 'Greater Vancouver Area',
  phone: '(778) 870-2340',
  email: 'arbutusbkkp@gmail.com',
  logo: '../../assets/logo.png',
  logoLight: '../../assets/logo-white.png',
  headshot: '../../assets/logan-shim.png'
};
const NAV = [{
  label: 'Services',
  href: '#services'
}, {
  label: 'Pricing',
  href: '#pricing'
}, {
  label: 'About',
  href: '#about'
}, {
  label: 'Contact',
  href: '#contact'
}];
const SERVICES = [{
  icon: 'calendar-check',
  title: 'Monthly bookkeeping',
  description: 'Your books closed every month, reconciled and tax-ready, so you always know where the business stands.',
  items: ['Bank & credit cards reconciled monthly', 'P&L and balance sheet each month', 'Payables and receivables kept current', 'Year-end package for your accountant'],
  footnote: 'Best for owners who want to stop thinking about it.'
}, {
  icon: 'archive-restore',
  title: 'Cleanup & catch-up',
  description: 'Behind a quarter or behind three years — I rebuild the file and hand back books a CPA will sign off on.',
  items: ['Full transaction review and re-coding', 'Accounts rebuilt and reconciled', 'Prior-period corrections documented', 'Filing gaps identified and closed'],
  footnote: 'Best for backlogs, shoeboxes and CRA letters.'
}, {
  icon: 'receipt',
  title: 'Sales tax filing',
  description: 'GST and PST prepared, reviewed and filed on schedule, with the working papers behind every number.',
  items: ['GST/HST returns prepared and filed', 'PST registration', 'Input tax credits reviewed for misses', 'Deadline calendar you can see'],
  footnote: 'Best for anyone who dreads the filing window.'
}];
const TIERS = [{
  name: 'Essential',
  price: '$400',
  pricePrefix: 'Starting at',
  cadence: '/ month',
  bestFor: 'Sole proprietors with one account and no payroll.',
  features: ['Monthly reconciliation', 'P&L and balance sheet', 'Annual GST filing', 'Year-end package', 'Email support'],
  ctaLabel: 'Start here'
}, {
  name: 'Professional',
  price: '$650',
  pricePrefix: 'Starting at',
  cadence: '/ month',
  bestFor: 'Incorporated businesses with steady volume and quarterly filings.',
  features: ['Everything in Essential', 'Quarterly GST/PST filing', 'AP and AR management', 'Replies within one business day'],
  badge: 'Most popular',
  highlighted: true,
  ctaLabel: 'Book a free call'
}, {
  name: 'Premium',
  price: '$900+',
  pricePrefix: 'Starting at',
  cadence: '/ month',
  bestFor: 'Multi-entity, high-volume or inventory-heavy operations.',
  features: ['Everything in Professional', 'Multi-entity bookkeeping', 'Monthly GST/PST filing', 'Direct line during business hours'],
  ctaLabel: 'Ask about Premium'
}];
const CREDENTIALS = [{
  icon: 'badge-check',
  label: 'CPA'
}, {
  icon: 'shield-check',
  label: 'Certified QuickBooks ProAdvisor'
}, {
  icon: 'graduation-cap',
  label: 'Accounting degree'
}, {
  icon: 'map-pin',
  label: 'Local to Greater Vancouver'
}];
function Container({
  children,
  narrow = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: narrow ? 'var(--container-narrow)' : 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--container-pad)',
      ...style
    }
  }, children);
}
function Section({
  children,
  tone = 'page',
  id,
  style
}) {
  const bg = {
    page: 'var(--surface-page)',
    alt: 'var(--surface-alt)',
    card: 'var(--surface-card)'
  }[tone];
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: bg,
      padding: 'var(--section-y) 0',
      scrollMarginTop: 80,
      ...style
    }
  }, /*#__PURE__*/React.createElement(Container, null, children));
}
const CARD_GRID = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
  gap: 'var(--gutter)',
  alignItems: 'stretch'
};
Object.assign(window, {
  BRAND,
  NAV,
  SERVICES,
  TIERS,
  CREDENTIALS,
  Container,
  Section,
  CARD_GRID,
  Button,
  Card,
  CheckList,
  Badge,
  Icon,
  SectionHeading,
  ServiceCard,
  PricingCard,
  CredentialStrip,
  CTABanner,
  Input,
  EmailCaptureForm,
  SiteHeader,
  SiteFooter,
  Wordmark
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/content.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Hero() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "top",
    style: {
      paddingTop: 'clamp(40px,5vw,84px)',
      paddingBottom: 'clamp(40px,5vw,84px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,.9fr)',
      gap: 'clamp(32px,5vw,72px)',
      alignItems: 'center'
    },
    className: "ab-split"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "soft",
    icon: "map-pin"
  }, "Serving the ", BRAND.area), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '20px 0 18px',
      fontSize: 'var(--text-hero)',
      lineHeight: 'var(--leading-tight)'
    }
  }, "Clean books.", /*#__PURE__*/React.createElement("br", null), "Clear numbers.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 700
    }
  }, "Real answers.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lead)',
      color: 'var(--text-muted)',
      maxWidth: '48ch'
    }
  }, "I\u2019m Logan Shim, a CPA and QuickBooks ProAdvisor. I keep tax-ready books for small businesses in the Greater Vancouver Area so owners can spend their time growing the business instead of chasing receipts."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap',
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: "calendar-check",
    iconPosition: "left",
    href: "#contact"
  }, "Book a free call"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    href: `tel:${BRAND.phone.replace(/\D/g, '')}`
  }, "Call ", BRAND.phone)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      flexWrap: 'wrap',
      marginTop: 'var(--space-8)'
    }
  }, CREDENTIALS.map(c => /*#__PURE__*/React.createElement("span", {
    key: c.label,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    strokeWidth: 2.25,
    color: "var(--mark-check)"
  }), c.label)))), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: BRAND.headshot,
    alt: "Logan Shim",
    style: {
      width: '100%',
      display: 'block',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      objectFit: 'cover',
      aspectRatio: '4 / 4.2'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: 'absolute',
      left: 'var(--space-5)',
      bottom: 'var(--space-5)',
      right: 'var(--space-5)',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-4) var(--space-5)',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--text-h4)',
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, BRAND.person), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "Owner & bookkeeper \xB7 Certified QuickBooks ProAdvisor")))));
}
function Services() {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "alt",
    id: "services"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Services",
    title: "What I take off your plate",
    lede: "Three ways to work together. Most clients start with a cleanup, then move onto monthly once the backlog is clear."
  }), /*#__PURE__*/React.createElement("div", {
    style: CARD_GRID,
    className: "ab-3up"
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: s.title
  }, s)))));
}
function Pricing() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "pricing"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Pricing",
    title: "You\u2019ll know the number before we start",
    lede: "Flat monthly fees, quoted after a short call and a look at your file. Month to month \u2014 no long-term contract."
  }), /*#__PURE__*/React.createElement("div", {
    style: CARD_GRID,
    className: "ab-3up"
  }, TIERS.map(t => /*#__PURE__*/React.createElement(PricingCard, _extends({
    key: t.name
  }, t, {
    ctaHref: "#contact"
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-8)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "Every plan starts at the price shown. Transaction volume, number of accounts and how far behind the file is are what move the final quote \u2014 nothing else."));
}
function About() {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "alt",
    id: "about"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,.8fr) minmax(0,1.2fr)',
      gap: 'clamp(28px,5vw,64px)',
      alignItems: 'center'
    },
    className: "ab-split"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-md)',
      padding: 'clamp(32px,4vw,56px)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: BRAND.logo,
    alt: "Arbutus Bookkeeping",
    style: {
      width: '100%',
      maxWidth: 300,
      height: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "About"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '12px 0 16px'
    }
  }, "Nine years in accounting firms, now in your corner"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lead)',
      color: 'var(--text-body)'
    }
  }, "I spent nine years inside accounting firms, and the same problem came across my desk every spring: good businesses handing over books that weren\u2019t ready, then paying for the cleanup twice."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "I started Arbutus to fix that earlier in the year. You get a CPA doing the bookkeeping itself, so the file is built the way it will need to be read at year end \u2014 and you get your attention back for the part of the business only you can do."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap',
      margin: 'var(--space-6) 0 var(--space-8)'
    }
  }, CREDENTIALS.map(c => /*#__PURE__*/React.createElement(Badge, {
    key: c.label,
    tone: "evergreen",
    icon: c.icon
  }, c.label))), /*#__PURE__*/React.createElement(Button, {
    href: "#contact",
    icon: "calendar-check",
    iconPosition: "left"
  }, "Book a free call"))));
}
function Closing() {
  return /*#__PURE__*/React.createElement(CTABanner, {
    title: "Every month you wait costs you clarity.",
    body: "Send your email and I\u2019ll come back with two questions and a time to talk. Twenty minutes, no pitch, no obligation."
  }, /*#__PURE__*/React.createElement(EmailCaptureForm, {
    note: "I read and reply to these myself, usually the same day."
  }));
}
Object.assign(window, {
  Hero,
  Services,
  Pricing,
  About,
  Closing
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CheckList = __ds_scope.CheckList;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StarRating = __ds_scope.StarRating;

__ds_ns.EmailCaptureForm = __ds_scope.EmailCaptureForm;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.CTABanner = __ds_scope.CTABanner;

__ds_ns.CredentialStrip = __ds_scope.CredentialStrip;

__ds_ns.PricingCard = __ds_scope.PricingCard;

__ds_ns.ReviewSummary = __ds_scope.ReviewSummary;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
