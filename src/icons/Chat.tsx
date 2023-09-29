interface IChatProps {
  size: number;
  color: string;
}

function Chat({ size, color }: IChatProps) {
  return (
    <svg
      width={size}
      height={(size / 40) * 26}
      viewBox='0 0 40 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_542_466)'>
        <path
          d='M33 0H7C3.13 0 0 3.13 0 7V19C0 19.55 0.45 20 1 20C1.55 20 2 19.55 2 19V7C2 4.24 4.24 2 7 2H33C35.76 2 38 4.24 38 7V19C38 21.76 35.76 24 33 24H7C6.45 24 6 24.45 6 25C6 25.55 6.45 26 7 26H33C36.87 26 40 22.87 40 19V7C40 3.13 36.87 0 33 0Z'
          fill={color}
        />
        <path
          d='M20 15C20.8284 15 21.5 14.3284 21.5 13.5C21.5 12.6716 20.8284 12 20 12C19.1716 12 18.5 12.6716 18.5 13.5C18.5 14.3284 19.1716 15 20 15Z'
          fill={color}
        />
        <path
          d='M10.5 15C11.3284 15 12 14.3284 12 13.5C12 12.6716 11.3284 12 10.5 12C9.67157 12 9 12.6716 9 13.5C9 14.3284 9.67157 15 10.5 15Z'
          fill={color}
        />
        <path
          d='M29.5 15C30.3284 15 31 14.3284 31 13.5C31 12.6716 30.3284 12 29.5 12C28.6716 12 28 12.6716 28 13.5C28 14.3284 28.6716 15 29.5 15Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_542_466'>
          <rect width={size} height={(size / 40) * 26} fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Chat;
