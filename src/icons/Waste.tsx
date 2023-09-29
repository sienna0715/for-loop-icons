interface IWasteProps {
  size: number;
  color: string;
}

function Waste({ size, color }: IWasteProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_542_451)'>
        <path
          d='M39 4.7619H26C25.45 4.7619 25 5.19048 25 5.71429C25 6.2381 25.45 6.66667 26 6.66667H33.92L34 38.0952H7V6.66667H19.97C20.52 6.66667 20.97 6.2381 20.97 5.71429V0.952381C20.97 0.428571 20.52 0 19.97 0C19.42 0 18.97 0.428571 18.97 0.952381V4.7619H1C0.45 4.7619 0 5.19048 0 5.71429C0 6.2381 0.45 6.66667 1 6.66667H5V39.0476C5 39.5714 5.45 40 6 40H35C35.27 40 35.52 39.8952 35.71 39.7238C35.9 39.5429 36 39.3048 36 39.0476L35.92 6.66667H39C39.55 6.66667 40 6.2381 40 5.71429C40 5.19048 39.55 4.7619 39 4.7619Z'
          fill={color}
        />
        <path
          d='M15 11.4286V27.6191'
          stroke={color}
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M25 11.4286V27.6191'
          stroke={color}
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_542_451'>
          <rect width={size} height={size} fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Waste;
