import { Link, useLocation } from 'react-router-dom';
import { Image } from '../utils/Image';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="p-3 flex items-center bg-black justify-between">
      <div>
        <svg
          width="117"
          height="36"
          viewBox="0 0 117 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="117" height="36" fill="url(#pattern0_91_51)" />
          <defs>
            <pattern
              id="pattern0_91_51"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_91_51"
                transform="matrix(0.00502513 0 0 0.0163317 0 0.263191)"
              />
            </pattern>
            <image
              id="image0_91_51"
              width="199"
              height="29"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      </div>

      <div className="flex items-center gap-[36px]">
        <div>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_91_52)">
              <path
                d="M7.4451 1.23142C5.32123 2.45753 3.80185 4.43762 3.16716 6.80647C2.53234 9.17532 2.85825 11.6497 4.08437 13.7736C5.71978 16.606 8.76915 18.3656 12.0428 18.3656C13.0765 18.3656 14.1021 18.1877 15.0744 17.8463L19.2046 25L22.1495 23.2997L18.02 16.1472C19.4149 14.9537 20.4191 13.3708 20.9046 11.5591C21.5393 9.19028 21.2134 6.71602 19.9873 4.59201C18.352 1.7596 15.3025 0 12.0289 0C10.4255 0 8.84042 0.425753 7.4451 1.23142ZM17.0424 6.2923C17.8144 7.62955 18.0195 9.18756 17.6199 10.6791C17.2203 12.1706 16.2636 13.4172 14.9264 14.1893C14.0474 14.6968 13.0502 14.965 12.0428 14.965C9.9803 14.965 8.05924 13.857 7.02941 12.0733C6.25734 10.736 6.05222 9.17817 6.45199 7.68654C6.85163 6.19505 7.80828 4.94839 9.14552 4.17619C10.0244 3.66882 11.0216 3.40058 12.0289 3.40058C14.0916 3.40058 16.0125 4.50863 17.0424 6.2923Z"
                fill="#E1E1E1"
              />
            </g>
            <defs>
              <clipPath id="clip0_91_52">
                <rect width="25" height="25" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M28.5 6C28.5 6.39782 28.342 6.77936 28.0607 7.06066C27.7794 7.34196 27.3978 7.5 27 7.5H3C2.60218 7.5 2.22064 7.34196 1.93934 7.06066C1.65804 6.77936 1.5 6.39782 1.5 6C1.5 5.60218 1.65804 5.22064 1.93934 4.93934C2.22064 4.65804 2.60218 4.5 3 4.5H27C27.3978 4.5 27.7794 4.65804 28.0607 4.93934C28.342 5.22064 28.5 5.60218 28.5 6ZM28.5 15C28.5 15.3978 28.342 15.7794 28.0607 16.0607C27.7794 16.342 27.3978 16.5 27 16.5H3C2.60218 16.5 2.22064 16.342 1.93934 16.0607C1.65804 15.7794 1.5 15.3978 1.5 15C1.5 14.6022 1.65804 14.2206 1.93934 13.9393C2.22064 13.658 2.60218 13.5 3 13.5H27C27.3978 13.5 27.7794 13.658 28.0607 13.9393C28.342 14.2206 28.5 14.6022 28.5 15ZM27 25.5C27.3978 25.5 27.7794 25.342 28.0607 25.0607C28.342 24.7794 28.5 24.3978 28.5 24C28.5 23.6022 28.342 23.2206 28.0607 22.9393C27.7794 22.658 27.3978 22.5 27 22.5H3C2.60218 22.5 2.22064 22.658 1.93934 22.9393C1.65804 23.2206 1.5 23.6022 1.5 24C1.5 24.3978 1.65804 24.7794 1.93934 25.0607C2.22064 25.342 2.60218 25.5 3 25.5H27Z"
              fill="#E1E1E1"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
