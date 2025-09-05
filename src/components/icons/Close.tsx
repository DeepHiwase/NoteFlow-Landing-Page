import type { SVGProps } from "react";

interface svgProps extends SVGProps<SVGSVGElement> {
  alt?: string;
  activeQuestion: boolean;
}

export default function Close({ width = 1.5, className, alt }: svgProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={alt}
    >
      <path
        d="M6 18L18 6"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 18L6 6"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
