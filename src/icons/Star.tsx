interface IStarProps {
  size: number;
  color: string;
}

function Star({ size = 40, color = 'black' }: IStarProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_942_2871)'>
        <path
          d='M12.7373 24.48L0.999023 15.5306H15.5145L20 1.04797L24.4855 15.5306H39.001L27.2528 24.48L31.7383 38.9521L20 30.0027L8.25177 38.9521L10.8092 30.7153'
          stroke={color}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_942_2871'>
          <rect width={size} height={size} fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Star;
