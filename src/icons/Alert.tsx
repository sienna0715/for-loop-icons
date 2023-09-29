interface IAlertProps {
  size: number;
  color: string;
}

function Alert({ size, color }: IAlertProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_459_102)'>
        <path
          d='M39.005 34.5035H0.995025C0.447761 34.5035 0 34.0028 0 33.3909C0 32.7789 0.447761 32.2782 0.995025 32.2782H39.005C39.5522 32.2782 40 32.7789 40 33.3909C40 34.0028 39.5522 34.5035 39.005 34.5035Z'
          fill={color}
        />
        <path
          d='M34.189 34.5034C33.6418 34.5034 33.194 34.0027 33.194 33.3908V11.5716C33.194 9.96935 32.6368 8.47839 31.6219 7.34349C30.6169 6.23083 29.2836 5.61887 27.8706 5.61887H27.8308L12.2388 5.76351C9.33331 5.78577 6.96515 8.45614 6.96515 11.7162V28.2503C6.96515 28.8623 6.51739 29.363 5.97012 29.363C5.42286 29.363 4.9751 28.8623 4.9751 28.2503V11.7162C4.9751 7.24335 8.22883 3.58271 12.2288 3.5382L27.8209 3.39355C29.801 3.39355 31.6318 4.21692 33.0248 5.76351C34.4179 7.31011 35.1841 9.36852 35.1841 11.5716V33.3908C35.1841 34.0027 34.7363 34.5034 34.189 34.5034Z'
          fill={color}
        />
        <path
          d='M24.587 40H16.3781C15.8308 40 15.3831 39.4993 15.3831 38.8873C15.3831 38.2754 15.8308 37.7747 16.3781 37.7747H24.587C25.1343 37.7747 25.5821 38.2754 25.5821 38.8873C25.5821 39.4993 25.1343 40 24.587 40Z'
          fill={color}
        />
        <path
          d='M20.2488 5.45202C19.7015 5.45202 19.2538 4.95132 19.2538 4.33936V1.11266C19.2538 0.500695 19.7015 0 20.2488 0C20.7961 0 21.2438 0.500695 21.2438 1.11266V4.33936C21.2438 4.95132 20.7961 5.45202 20.2488 5.45202Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_459_102'>
          <rect width={size} height={size} fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Alert;