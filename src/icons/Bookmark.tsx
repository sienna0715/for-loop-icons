interface IBookmarkProps {
  size: number;
  color: string;
}

function Bookmark({ size = 40, color = 'black' }: IBookmarkProps) {
  return (
    <svg
      width={(size / 40) * 33}
      height={size}
      viewBox='0 0 33 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_542_464)'>
        <path
          d='M31.9 40C31.68 40 31.449 39.9333 31.262 39.7889L16.489 29.1444L1.738 39.7889C1.408 40.0333 0.957 40.0667 0.594 39.8778C0.231 39.6889 0 39.3111 0 38.8889V7.77778C0 7.16667 0.495 6.66667 1.1 6.66667C1.705 6.66667 2.2 7.16667 2.2 7.77778V36.7333L15.851 26.8778C16.236 26.6 16.742 26.6 17.127 26.8778L30.8 36.7333V7.77778C30.8 4.71111 28.336 2.22222 25.3 2.22222H2.2C1.595 2.22222 1.1 1.72222 1.1 1.11111C1.1 0.5 1.595 0 2.2 0H25.3C29.546 0 33 3.48889 33 7.77778V38.8889C33 39.3 32.769 39.6889 32.406 39.8778C32.252 39.9556 32.076 40 31.9 40Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_542_464'>
          <rect width={(size / 40) * 33} height={size} fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Bookmark;
