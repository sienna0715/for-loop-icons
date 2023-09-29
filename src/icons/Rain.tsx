interface IRainProps {
  size: number;
  color: string;
}

function Rain({ size, color }: IRainProps) {
  return (
    <svg
      width={size}
      height={(size / 40) * 36}
      viewBox='0 0 40 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_542_457)'>
        <path
          d='M30.7767 10.1948C30.2702 10.1948 29.7832 10.2536 29.2963 10.3319C29.2768 10.3319 29.267 10.3319 29.2573 10.3319C29.1209 10.3515 29.0041 10.3907 28.8677 10.4201C28.6632 10.4592 28.4587 10.4886 28.2639 10.5474L28.2444 10.567C23.4526 12.0164 22.4591 16.9326 22.4104 17.148C22.3033 17.7063 22.6637 18.2449 23.2188 18.3526C23.287 18.3624 23.3552 18.3722 23.4136 18.3722C23.8908 18.3722 24.3194 18.0294 24.4168 17.5398C24.4557 17.3635 25.3225 13.2307 29.4326 12.3885C29.8709 12.3102 30.3092 12.2514 30.7474 12.2514C34.7017 12.2514 37.9254 15.444 37.9254 19.3613C37.9254 23.2786 34.7114 26.4712 30.7474 26.4712H29.6664C29.1015 26.4712 28.6437 26.9315 28.6437 27.4995C28.6437 28.0675 29.1015 28.5278 29.6664 28.5278H30.7474C35.8412 28.5278 39.9707 24.4244 39.9707 19.3613C39.9707 14.2982 35.8412 10.1948 30.7474 10.1948H30.7767Z'
          fill={color}
        />
        <path
          d='M9.18432 25.9619C9.18432 25.5702 8.96031 25.2274 8.61943 25.0414C4.72364 22.9946 2.05503 18.9304 2.05503 14.259C2.05503 7.54081 7.56757 2.06638 14.356 2.06638C17.6479 2.06638 20.6964 3.37867 22.9364 5.56257C23.365 5.98368 24.0662 5.93471 24.4461 5.45484C24.7675 5.04353 24.748 4.44614 24.3779 4.08379C21.7969 1.55713 18.2615 0 14.356 0C6.42805 0 0 6.3852 0 14.2688C0 19.7628 3.12637 24.5125 7.69418 26.9021C8.37594 27.2546 9.18432 26.7454 9.18432 25.9717V25.9619Z'
          fill={color}
        />
        <path
          d='M12.668 23.2646C12.4586 22.7664 11.8872 22.5332 11.3917 22.7438C10.8963 22.9543 10.6644 23.5289 10.8738 24.0271L15.6548 35.4022C15.8642 35.9004 16.4356 36.1336 16.931 35.9231C17.4265 35.7125 17.6584 35.138 17.449 34.6398L12.668 23.2646Z'
          fill={color}
        />
        <path
          d='M18.7317 24.1878C18.5223 23.6896 17.9509 23.4564 17.4555 23.667C16.96 23.8775 16.7281 24.4521 16.9375 24.9503L20.7593 34.0432C20.9686 34.5414 21.54 34.7746 22.0355 34.564C22.531 34.3535 22.7629 33.7789 22.5535 33.2807L18.7317 24.1878Z'
          fill={color}
        />
        <path
          d='M24.2784 23.2587C24.069 22.7605 23.4976 22.5274 23.0021 22.7379C22.5066 22.9485 22.2747 23.523 22.4841 24.0212L27.0338 34.8461C27.2432 35.3443 27.8146 35.5775 28.3101 35.3669C28.8056 35.1564 29.0375 34.5818 28.8281 34.0836L24.2784 23.2587Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_542_457'>
          <rect width={size} height={(size / 40) * 36} fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Rain;
