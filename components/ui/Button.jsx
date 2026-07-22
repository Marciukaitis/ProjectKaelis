import Link from "next/link";
import { cn, scrollToId } from "@/lib/utils";

const variants = {
  primary:
    "bg-kaelis-secondary text-kaelis-ink hover:bg-kaelis-hover border border-transparent",
  secondary:
    "bg-white text-kaelis-ink border border-kaelis-ink/15 hover:border-kaelis-hover hover:text-kaelis-hover",
  ghost: "bg-transparent text-kaelis-ink hover:text-kaelis-hover",
  outline:
    "bg-transparent text-white border border-white/70 hover:bg-white hover:text-kaelis-ink",
};

const sizes = {
  sm: "px-4 py-2 text-xs tracking-[0.12em]",
  md: "px-6 py-3 text-sm tracking-[0.14em]",
  lg: "px-8 py-3.5 text-sm tracking-[0.16em]",
};

function handleHashClick(event, href, onClick) {
  event.preventDefault();
  scrollToId(href);
  onClick?.(event);
}

export function Button(props) {
  const {
    children,
    className,
    variant = "primary",
    size = "md",
    fullWidth,
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center uppercase font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kaelis-secondary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className,
  );

  if ("href" in props && props.href) {
    if (props.href.startsWith("#")) {
      return (
        <a
          href={props.href}
          onClick={(event) => handleHashClick(event, props.href, props.onClick)}
          aria-label={props["aria-label"]}
          className={classes}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={props.href}
        target={props.target}
        rel={props.rel}
        onClick={props.onClick}
        aria-label={props["aria-label"]}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = props;

  return (
    <button
      type={buttonProps.type ?? "button"}
      onClick={buttonProps.onClick}
      disabled={buttonProps.disabled}
      aria-label={buttonProps["aria-label"]}
      className={classes}
    >
      {children}
    </button>
  );
}
