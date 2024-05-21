// const iconNames = ['notion', 'google', 'asana', 'github', 'webflow', 'tinder'];
import { useNavigate } from "react-router-dom";
export default function Footer() {

  const navigate=useNavigate()
  return (
    <footer className="w-full grid grid-cols-5 pt-4 justify-center items-end">
      <div className="flex flex-col justify-between items-center gap-2 border-r border-[#FFC107] bg-black py-2">
        <div>
          <svg
            width="15"
            height="15"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.626 15.5256C22.9563 22.2228 16.1731 26.2986 9.47506 24.6285C2.77982 22.9589 -1.29599 16.1752 0.374399 9.47853C2.04332 2.78055 8.82654 -1.29557 15.5225 0.374085C22.2201 2.04374 26.2956 8.82812 24.6258 15.5257L24.6259 15.5256H24.626Z"
              fill="#FFC107"
            />
            <path
              d="M18.0126 10.7203C18.2614 9.05661 16.9948 8.16232 15.2628 7.56575L15.8247 5.31217L14.4528 4.97035L13.9059 7.16459C13.5452 7.07464 13.1749 6.98989 12.8068 6.90587L13.3577 4.69714L11.9867 4.35532L11.4246 6.60816C11.1261 6.54021 10.833 6.47306 10.5486 6.4023L10.5502 6.39521L8.65843 5.9228L8.29351 7.38799C8.29351 7.38799 9.31129 7.62129 9.28984 7.63565C9.84535 7.7743 9.94581 8.14204 9.92913 8.43351L9.2891 11.0009C9.32736 11.0106 9.37697 11.0246 9.43172 11.0466C9.38596 11.0353 9.33726 11.0229 9.28672 11.0108L8.38963 14.6073C8.32174 14.776 8.14942 15.0293 7.76103 14.9331C7.77478 14.9531 6.76397 14.6843 6.76397 14.6843L6.08289 16.2546L7.86809 16.6996C8.2002 16.7829 8.52565 16.8701 8.84615 16.952L8.27848 19.2314L9.64871 19.5733L10.2109 17.318C10.5852 17.4197 10.9485 17.5134 11.3041 17.6018L10.7438 19.8463L12.1157 20.1882L12.6833 17.913C15.0226 18.3557 16.7815 18.1772 17.5219 16.0614C18.1185 14.3579 17.4922 13.3753 16.2615 12.7346C17.1579 12.5278 17.833 11.9383 18.013 10.7205L18.0126 10.7201L18.0126 10.7203ZM14.8783 15.1154C14.4543 16.8189 11.5861 15.898 10.6562 15.6671L11.4095 12.6472C12.3394 12.8794 15.3213 13.3388 14.8783 15.1154H14.8783ZM15.3025 10.6956C14.9158 12.2451 12.5286 11.4579 11.7542 11.2648L12.4371 8.52603C13.2115 8.71906 15.7054 9.07934 15.3026 10.6956H15.3025Z"
              fill="#141414"
            />
          </svg>
        </div>
        <div className="text-[8px]">Crypto</div>
      </div>

      <div className="flex flex-col justify-between items-center gap-2  bg-black py-2">
        <div>
          <svg
            width="15"
            height="15"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_91_117)">
              <path
                d="M24.2188 12.5C24.426 12.5 24.6247 12.4177 24.7712 12.2712C24.9177 12.1247 25 11.926 25 11.7188V7.03125C25 6.92884 24.9798 6.82744 24.9406 6.73281C24.8605 6.54161 24.7084 6.38954 24.5172 6.30938C24.4226 6.27021 24.3212 6.25004 24.2188 6.25H19.5312C19.324 6.25 19.1253 6.33231 18.9788 6.47882C18.8323 6.62534 18.75 6.82405 18.75 7.03125C18.75 7.23845 18.8323 7.43716 18.9788 7.58368C19.1253 7.73019 19.324 7.8125 19.5312 7.8125H22.3328L13.2812 16.8641L10.7094 14.2906C10.6368 14.2179 10.5506 14.1601 10.4557 14.1208C10.3608 14.0814 10.259 14.0611 10.1562 14.0611C10.0535 14.0611 9.95174 14.0814 9.85682 14.1208C9.76191 14.1601 9.6757 14.2179 9.60312 14.2906L1.5625 22.3328V0.78125C1.5625 0.57405 1.48019 0.375336 1.33368 0.228823C1.18717 0.08231 0.98845 0 0.78125 0C0.57405 0 0.375335 0.08231 0.228822 0.228823C0.0823094 0.375336 0 0.57405 0 0.78125V24.2188C4.02115e-05 24.3212 0.0202146 24.4226 0.0593752 24.5172C0.13954 24.7084 0.291606 24.8605 0.482813 24.9406C0.577439 24.9798 0.678841 25 0.78125 25H24.2188C24.426 25 24.6247 24.9177 24.7712 24.7712C24.9177 24.6247 25 24.426 25 24.2188C25 24.0115 24.9177 23.8128 24.7712 23.6663C24.6247 23.5198 24.426 23.4375 24.2188 23.4375H2.66719L10.1562 15.9484L12.7281 18.5219C12.8008 18.5944 12.8871 18.6518 12.982 18.691C13.0769 18.7301 13.1786 18.7502 13.2812 18.75C13.3839 18.7502 13.4856 18.7301 13.5805 18.691C13.6754 18.6518 13.7617 18.5944 13.8344 18.5219L23.4375 8.91719V11.7188C23.4375 11.926 23.5198 12.1247 23.6663 12.2712C23.8128 12.4177 24.0115 12.5 24.2188 12.5Z"
                fill="#E1E1E1"
              />
            </g>
            <defs>
              <clipPath id="clip0_91_117">
                <rect width="25" height="25" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="text-[8px]">Market</div>
      </div>

      <div className="flex flex-col justify-between items-center  text-[#141414]  pt-4 pb-2 bg-[#FFC107] rounded-t-3xl">
        <div>
          <svg
            width="25"
            height="25"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_91_107)">
              <path
                d="M39.3286 17.8323L33.2664 11.7701V4.76727C33.2664 3.50105 32.2404 2.47489 30.9723 2.47489C29.7071 2.47489 28.681 3.50105 28.681 4.76727V7.1848L24.1673 2.67085C21.9356 0.440401 18.0555 0.444357 15.8289 2.67489L0.671158 17.8323C-0.223638 18.7289 -0.223638 20.1796 0.671158 21.0748C1.56636 21.9711 3.0199 21.9711 3.91477 21.0748L19.0711 5.91697C19.5648 5.42581 20.4351 5.42581 20.9262 5.91551L36.0851 21.0748C36.5346 21.523 37.1206 21.7459 37.7065 21.7459C38.2936 21.7459 38.8806 21.5228 39.3287 21.0748C40.2238 20.1797 40.2238 18.729 39.3286 17.8323Z"
                fill="#141414"
              />
              <path
                d="M20.7963 10.2685C20.356 9.82832 19.6429 9.82832 19.2038 10.2685L5.87103 23.5973C5.66054 23.8077 5.5412 24.095 5.5412 24.3948V34.1164C5.5412 36.3976 7.39086 38.2472 9.67202 38.2472H16.2731V28.0243H23.7256V38.2472H30.3268C32.6078 38.2472 34.4575 36.3976 34.4575 34.1164V24.3948C34.4575 24.095 34.3392 23.8077 34.1277 23.5973L20.7963 10.2685Z"
                fill="#141414"
              />
            </g>
            <defs>
              <clipPath id="clip0_91_107">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div onclick={()=>{
      navigate('/home')
        }} className="text-[8px]">Home</div>
      </div>

      <div className="flex flex-col justify-between items-center gap-2 border-r border-[#FFC107] bg-black py-2">
        <div>
          <svg
            width="15"
            height="15"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_91_72)">
              <mask
                id="mask0_91_72"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="25"
                height="25"
              >
                <path d="M25 0H0V25H25V0Z" fill="white" />
              </mask>
              <g mask="url(#mask0_91_72)">
                <path
                  d="M23.9586 22.739H3.04224C2.83504 22.739 2.63632 22.6568 2.48981 22.5102C2.3433 22.3637 2.26099 22.165 2.26099 21.9578V1.04141C2.26099 0.834212 2.3433 0.635485 2.48981 0.488973C2.63632 0.34246 2.83504 0.260162 3.04224 0.260162C3.24944 0.260162 3.44815 0.34246 3.59466 0.488973C3.74118 0.635485 3.82349 0.834212 3.82349 1.04141V21.1765H23.9586C24.1658 21.1765 24.3646 21.2589 24.5111 21.4054C24.6576 21.5519 24.7399 21.7506 24.7399 21.9578C24.7399 22.165 24.6576 22.3637 24.5111 22.5102C24.3646 22.6568 24.1658 22.739 23.9586 22.739Z"
                  fill="#E1E1E1"
                />
                <path
                  d="M5.04222 4.37499C4.92376 4.375 4.80685 4.34806 4.70033 4.29622C4.59381 4.24438 4.50047 4.169 4.42738 4.07578L3.04222 2.30857L1.65707 4.07578C1.52912 4.23895 1.3416 4.3446 1.13575 4.36951C0.929896 4.39441 0.722582 4.33652 0.559412 4.20857C0.396242 4.08063 0.290581 3.8931 0.265674 3.68725C0.240766 3.4814 0.298653 3.27409 0.426599 3.11092L2.4266 0.56015C2.50266 0.471377 2.59702 0.400107 2.70322 0.351248C2.80942 0.302389 2.92494 0.2771 3.04183 0.2771C3.15873 0.2771 3.27425 0.302389 3.38045 0.351248C3.48664 0.400107 3.58101 0.471377 3.65707 0.56015L5.65707 3.11092C5.7477 3.22621 5.80405 3.36469 5.81967 3.51051C5.83529 3.65632 5.80956 3.80359 5.74542 3.93547C5.68127 4.06734 5.5813 4.17848 5.45695 4.25621C5.33259 4.33394 5.18887 4.37511 5.04222 4.37499Z"
                  fill="#E1E1E1"
                />
                <path
                  d="M21.4063 24.7398C21.2437 24.7398 21.0852 24.6892 20.9529 24.5948C20.8205 24.5005 20.7208 24.3672 20.6678 24.2136C20.6147 24.0599 20.6109 23.8936 20.6569 23.7376C20.7029 23.5817 20.7963 23.444 20.9243 23.3438L22.6914 21.9578L20.9243 20.5727C20.8435 20.5094 20.776 20.4308 20.7257 20.3414C20.6753 20.252 20.643 20.1536 20.6307 20.0517C20.6183 19.9499 20.6262 19.8466 20.6538 19.7478C20.6814 19.6489 20.7281 19.5565 20.7914 19.4758C20.8547 19.395 20.9333 19.3276 21.0227 19.2772C21.1121 19.2268 21.2105 19.1945 21.3124 19.1822C21.4142 19.1699 21.5175 19.1777 21.6163 19.2053C21.7152 19.2329 21.8076 19.2797 21.8883 19.343L24.4399 21.343C24.5333 21.4161 24.6088 21.5094 24.6607 21.616C24.7126 21.7226 24.7396 21.8396 24.7396 21.9582C24.7396 22.0768 24.7126 22.1938 24.6607 22.3004C24.6088 22.407 24.5333 22.5004 24.4399 22.5735L21.8883 24.5734C21.751 24.6816 21.5811 24.7402 21.4063 24.7398Z"
                  fill="#E1E1E1"
                />
                <path
                  d="M8.25234 20.2828H5.625C5.4178 20.2828 5.21909 20.2005 5.07257 20.054C4.92606 19.9075 4.84375 19.7088 4.84375 19.5016V9.76562C4.84375 9.55842 4.92606 9.35972 5.07257 9.21321C5.21909 9.0667 5.4178 8.98438 5.625 8.98438H8.24922C8.45642 8.98438 8.65513 9.0667 8.80165 9.21321C8.94816 9.35972 9.03047 9.55842 9.03047 9.76562V19.5016C9.03047 19.7082 8.94859 19.9065 8.80275 20.0529C8.65691 20.1993 8.459 20.282 8.25234 20.2828ZM6.40938 18.7203H7.47109V10.5469H6.40625L6.40938 18.7203Z"
                  fill="#E1E1E1"
                />
                <path
                  d="M13.5985 20.2828H10.9742C10.767 20.2828 10.5683 20.2005 10.4218 20.054C10.2753 19.9075 10.193 19.7088 10.193 19.5016V7.15781C10.193 6.95061 10.2753 6.7519 10.4218 6.60539C10.5683 6.45888 10.767 6.37656 10.9742 6.37656H13.5985C13.8057 6.37656 14.0044 6.45888 14.1509 6.60539C14.2974 6.7519 14.3797 6.95061 14.3797 7.15781V19.5016C14.3797 19.7088 14.2974 19.9075 14.1509 20.054C14.0044 20.2005 13.8057 20.2828 13.5985 20.2828ZM11.7555 18.7203H12.8172V7.93906H11.7555V18.7203Z"
                  fill="#E1E1E1"
                />
                <path
                  d="M18.9454 20.2828H16.3212C16.114 20.2828 15.9153 20.2005 15.7687 20.054C15.6222 19.9075 15.5399 19.7088 15.5399 19.5016V11.6891C15.5399 11.4819 15.6222 11.2831 15.7687 11.1366C15.9153 10.9901 16.114 10.9078 16.3212 10.9078H18.9454C19.1526 10.9078 19.3513 10.9901 19.4978 11.1366C19.6443 11.2831 19.7266 11.4819 19.7266 11.6891V19.5016C19.7266 19.7088 19.6443 19.9075 19.4978 20.054C19.3513 20.2005 19.1526 20.2828 18.9454 20.2828ZM17.1024 18.7203H18.1641V12.4703H17.1024V18.7203Z"
                  fill="#E1E1E1"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_91_72">
                <rect width="25" height="25" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="text-[8px]">Trade</div>
      </div>
      <div className="flex flex-col justify-between items-center gap-2 bg-black py-2">
        <div>
          <svg
            width="15"
            height="15"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 12.5C14.802 12.5 16.6666 10.6354 16.6666 8.33332C16.6666 6.03124 14.802 4.16666 12.5 4.16666C10.1979 4.16666 8.33329 6.03124 8.33329 8.33332C8.33329 10.6354 10.1979 12.5 12.5 12.5ZM12.5 14.5833C9.71871 14.5833 4.16663 15.9792 4.16663 18.75V20.8333H20.8333V18.75C20.8333 15.9792 15.2812 14.5833 12.5 14.5833Z"
              fill="#E1E1E1"
            />
          </svg>
        </div>
        <div className="text-[8px]">Profile</div>
      </div>
    </footer>
  );
}
