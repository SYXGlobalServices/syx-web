
export function Icon({ color, width, height, src }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      viewBox="0 0 24 24"
      width={width}
      height={height}
    >
        {src}
    </svg>
  );
}
