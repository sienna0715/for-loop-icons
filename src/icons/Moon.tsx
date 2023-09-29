interface IMoonProps {
  size: number;
  color: string;
}

function Moon({ size, color }: IMoonProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_542_458)'>
        <path
          d='M20 40C8.97143 40 0 31.0286 0 20C0 8.97143 8.97143 0 20 0C22.6381 0 25.2 0.514286 27.6381 1.51429C28.0571 1.68571 28.2952 2.12381 28.2095 2.5619C28.1238 3 27.7524 3.33333 27.2952 3.34286C21.3333 3.51429 16.6571 8.31429 16.6571 14.2762C16.6571 20.2381 21.5714 25.2286 27.6095 25.2286C32.3619 25.2286 36.5524 22.1905 38.019 17.6667C38.1619 17.2381 38.5714 16.9619 39.0286 17.019C39.4762 17.0667 39.8286 17.419 39.8762 17.8667C39.9524 18.6 39.9905 19.3143 39.9905 20C39.9905 31.0286 31.019 40 19.9905 40H20ZM20 1.90476C10.019 1.90476 1.90476 10.019 1.90476 20C1.90476 29.981 10.019 38.0952 20 38.0952C29.3429 38.0952 37.0571 30.981 38 21.8762C35.6286 25.1333 31.8095 27.1429 27.619 27.1429C20.5333 27.1429 14.7619 21.3714 14.7619 14.2857C14.7619 8.69524 18.2571 3.97143 23.2381 2.19048C22.1714 2 21.0952 1.90476 20 1.90476Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_542_458'>
          <rect width={size} height={size} fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Moon;
