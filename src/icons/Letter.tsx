interface ILetterProps {
  size: number;
  color: string;
}

function Letter({ size = 40, color = 'black' }: ILetterProps) {
  return (
    <svg
      width={size}
      height={(size / 40) * 26}
      viewBox='0 0 40 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_942_2867)'>
        <path
          d='M38.77 26H1C0.45 26 0 25.55 0 25V8C0 7.67 0.16 7.37 0.43 7.18C0.7 6.99 1.04 6.95 1.35 7.06L19.91 13.94L37.77 8.27V2H1C0.45 2 0 1.55 0 1C0 0.45 0.45 0 1 0H38.77C39.32 0 39.77 0.45 39.77 1V9C39.77 9.44 39.49 9.82 39.07 9.95L20.19 15.95C19.98 16.02 19.75 16.01 19.54 15.93L2 9.44V24H37.77V15C37.77 14.45 38.22 14 38.77 14C39.32 14 39.77 14.45 39.77 15V25C39.77 25.55 39.32 26 38.77 26Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_942_2867'>
          <rect width='39.77' height={(size / 40) * 26} fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Letter;
