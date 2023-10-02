interface IPlayProps {
  size: number;
  color: string;
}

function Play({ size = 40, color = 'black' }: IPlayProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_942_2866)'>
        <path
          d='M4.51594 0.143764C3.83882 -0.26101 3 0.237173 3 1.03634V26.7758C3 27.3467 3.45478 27.8137 4.01063 27.8137C4.56647 27.8137 5.02125 27.3467 5.02125 26.7758V2.83188L33.9656 19.9985L5.49625 36.8744L3.50531 38.0576C3.19202 38.2444 3 38.5869 3 38.9606C3 39.7597 3.83882 40.2579 4.51594 39.8635L36.4922 20.9014C37.1693 20.507 37.1693 19.5003 36.4922 19.1059L4.51594 0.143764Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_942_2866'>
          <rect width={size} height={size} fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Play;
