interface IDownload2Props {
  size: number;
  color: string;
}

function Download2({ size, color }: IDownload2Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_542_463)'>
        <path
          d='M39.0476 39.0476H0.952393V0.952393'
          stroke={color}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M0.952321 39.9999C0.704701 39.9999 0.466606 39.9047 0.27613 39.7237C-0.0952985 39.3523 -0.0952985 38.7523 0.27613 38.3809L38.3714 0.27613C38.7428 -0.0952985 39.3428 -0.0952985 39.7142 0.27613C40.0857 0.647559 40.0857 1.24756 39.7142 1.61899L1.62851 39.7237C1.43803 39.9142 1.19994 39.9999 0.952321 39.9999Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_542_463'>
          <rect width={size} height={size} fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Download2;
