interface IDownloadProps {
  size: number;
  color: string;
}

function Download({ size = 40, color = 'black' }: IDownloadProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_542_460)'>
        <path
          d='M39.0476 38.0957H22.1905L39.7238 20.6713C40.0952 20.2999 40.0952 19.7001 39.7238 19.3287C39.3524 18.9574 38.7524 18.9574 38.381 19.3287L20.9619 36.6484V0.952154C20.9619 0.428469 20.5333 0 20.0095 0C19.4857 0 19.0571 0.428469 19.0571 0.952154V36.8579L1.62857 19.3287C1.25714 18.9574 0.657143 18.9574 0.285714 19.3287C-0.0857143 19.7001 -0.0857143 20.2999 0.285714 20.6713L17.6 38.1052H0.952381C0.428571 38.0957 0 38.5242 0 39.0478C0 39.5715 0.428571 40 0.952381 40H39.0476C39.5714 40 40 39.5715 40 39.0478C40 38.5242 39.5714 38.0957 39.0476 38.0957Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_542_460'>
          <rect width={size} height={size} fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Download;
