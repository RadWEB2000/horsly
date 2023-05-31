export default function LocationIcon({...props}:T_SVG){
    return (
          <svg
    xmlns="http://www.w3.org/2000/svg"
    width={512}
    height={512}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <title>Location icon</title>
    <g fill="#000">
      <path
        fillRule="evenodd"
        d="M6.285 2.367a8.082 8.082 0 0 1 11.431.002 8.094 8.094 0 0 1 .456 10.949l-5.409 6.393a1 1 0 0 1-1.527-.001l-5.41-6.41a8.087 8.087 0 0 1 .46-10.933zm1.716 5.698A4 4 0 1 1 16 8.063a4 4 0 0 1-7.999.002z"
        clipRule="evenodd"
      />
      <path d="M4.702 17.456a1 1 0 0 0-1.78-.912l-1.59 3.106C.295 21.68 1.825 24 4.054 24h15.894c2.23 0 3.76-2.32 2.72-4.35l-1.589-3.106a1 1 0 1 0-1.78.912l1.59 3.105c.322.63-.127 1.439-.941 1.439H4.053c-.814 0-1.263-.81-.94-1.439z" />
    </g>
  </svg>
    )
}