import type { CSSProperties } from "react";

type MaterialIconProps = {
  name: string;
  className?: string;
  fill?: boolean;
};

export function MaterialIcon({
  name,
  className = "",
  fill = false,
}: MaterialIconProps) {
  const style = {
    fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' 500, 'GRAD' 0, 'opsz' 24`,
  } as CSSProperties;

  return (
    <span className={`material-symbols-outlined ${className}`.trim()} style={style}>
      {name}
    </span>
  );
}
