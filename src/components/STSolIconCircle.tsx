type Props = React.SVGAttributes<SVGElement>;

export function STSolIconCircle(props: Props) {
  return (
    <svg
      {...props}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z"
        fill="url(#patternstsol)"
      />
      <defs>
        <pattern
          id="patternstsol"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_33_3182" transform="scale(0.015625)" />
        </pattern>
        <image
          id="image0_33_3182"
          width="64"
          height="64"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}
