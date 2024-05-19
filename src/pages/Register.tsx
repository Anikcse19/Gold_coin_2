import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="flex flex-col items-center px-5 xl:px-[120px] pt-10 min-h-screen">
      <div className="text-2xl text-[#FFC107] text-center">
        Registration Now
      </div>
      <div className="text-center text-sm pt-2.5">
        Register your account with your personal information
      </div>

      <div className="w-full flex flex-col gap-7 pt-7">
        <div className="relative h-[55px]">
          <label
            htmlFor="fullName"
            className="absolute z-10 left-4 -top-3 bg-[#141414] px-2"
          >
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter Your Full Name"
            className="bg-transparent border border-[#FFC107] w-full h-full rounded-xl outline-none text-left pl-7"
          ></input>
        </div>

        <div className="relative h-[55px]">
          <label
            htmlFor="fullName"
            className="absolute z-10 left-4 -top-3 bg-[#141414] px-2"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="bg-transparent border border-[#FFC107] w-full h-full rounded-xl outline-none text-left pl-7"
          ></input>
        </div>

        <div className="relative h-[55px]">
          <label
            htmlFor="fullName"
            className="absolute z-10 left-4 -top-3 bg-[#141414] px-2"
          >
            Phone Number
          </label>
          <input
            type="text"
            placeholder="Enter Your phone number"
            className="bg-transparent border border-[#FFC107] w-full h-full rounded-xl outline-none text-left pl-7"
          ></input>
        </div>

        <div className="relative h-[55px]">
          <label
            htmlFor="password"
            className="absolute z-10 left-4 -top-3 bg-[#141414] px-2"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Enter 8 digits password"
            className="bg-transparent border border-[#FFC107] w-full h-full rounded-xl outline-none text-left pl-7"
          ></input>
        </div>

        <div className="relative h-[55px]">
          <label
            htmlFor="reTypePassword"
            className="absolute z-10 left-4 -top-3 bg-[#141414] px-2"
          >
            Retype Password
          </label>
          <input
            type="password"
            placeholder="Enter 8 digits password"
            className="bg-transparent border border-[#FFC107] w-full h-full rounded-xl outline-none text-left pl-7"
          ></input>
        </div>

        <div className="relative h-[55px]">
          <label
            htmlFor="dateOfBirth"
            className="absolute z-10 left-4 -top-3 bg-[#141414] px-2"
          >
            Date of Birth
          </label>
          <input
            type="text"
            placeholder="16/12/1990"
            className="bg-transparent border border-[#FFC107] w-full h-full rounded-xl outline-none text-left pl-7"
          ></input>
        </div>
      </div>

      <div className="w-full pt-3.5">
        <button className="bg-[#FFC107] text-2xl w-full text-[#141414] font-medium h-[58px] rounded-full">
          Register Now
        </button>
        <p className="pt-2">
          <Link to="/" className="font-bold underline">
            Already have an account?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
