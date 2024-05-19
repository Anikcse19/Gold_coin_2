import { Link } from 'react-router-dom';

const ForgetPass = () => {
  return (
    <div className="flex flex-col items-center px-5 xl:px-[120px] min-h-screen">
      <div className="pt-10">
        <svg
          width="80"
          height="77"
          viewBox="0 0 80 77"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_36_162)">
            <path
              d="M64.2424 76.1905H15.7576C13.7493 76.1905 12.1212 74.6399 12.1212 72.7273V33.4776C12.1212 31.565 13.7493 30.0144 15.7576 30.0144H19.3939V19.6248C19.3939 8.80369 28.6378 0 40 0C51.3622 0 60.6061 8.80369 60.6061 19.6248V30.0144H64.2424C66.2507 30.0144 67.8788 31.565 67.8788 33.4776V72.7273C67.8788 74.6399 66.2507 76.1905 64.2424 76.1905ZM36.3636 54.2536V58.8745C36.3636 60.7871 37.9918 62.3377 40 62.3377C42.0082 62.3377 43.6364 60.7871 43.6364 58.8745V54.2536C45.1074 53.1997 46.0606 51.5237 46.0606 49.6392C46.0606 46.4566 43.3418 43.8672 40 43.8672C36.6582 43.8672 33.9394 46.4566 33.9394 49.6392C33.9394 51.5237 34.8926 53.1997 36.3636 54.2536ZM53.3333 19.6248C53.3333 12.6229 47.352 6.92641 40 6.92641C32.648 6.92641 26.6667 12.6229 26.6667 19.6248V30.0144H53.3333V19.6248Z"
              fill="#FFC107"
            />
          </g>
          <defs>
            <clipPath id="clip0_36_162">
              <rect
                width="80"
                height="76.1905"
                fill="white"
                transform="matrix(-1 0 0 1 80 0)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="text-[32px] text-center">Reset Your Password!</div>
      <div className="text-center text-sm pt-5">
        Please enter your email address, so we will send you a password reset
        link via email
      </div>

      <div className="flex flex-col gap-10 w-full pt-14">
        <div className="w-full h-[55px] relative">
          <div className="absolute left-[20px] top-1/2 -translate-y-1/2">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 14C10.3166 14 7.33331 11.0167 7.33331 7.33333C7.33331 3.65 10.3166 0.666664 14 0.666664C17.6833 0.666664 20.6666 3.65 20.6666 7.33333C20.6666 11.0167 17.6833 14 14 14ZM14 17.3333C18.45 17.3333 27.3333 19.5667 27.3333 24V27.3333H0.666647V24C0.666647 19.5667 9.54998 17.3333 14 17.3333Z"
                fill="#E1E1E1"
              />
            </svg>
          </div>
          <input
            type="email"
            name="emailId"
            id="emailId"
            placeholder="Your Email Address"
            className="bg-transparent border border-[#FFC107] w-full h-full rounded-full pl-6 outline-none text-center"
          />
        </div>

        <div className="w-full pt-3.5">
          <button className="bg-[#FFC107] text-2xl w-full text-[#141414] font-medium h-[58px] rounded-full">
            Reset Password
          </button>

          <p className="pt-2">
            Go to{' '}
            <Link to="/" className="font-bold underline">
              login page?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
