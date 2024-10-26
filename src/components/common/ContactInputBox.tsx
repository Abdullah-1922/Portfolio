/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
export const ContactInputBox = ({ type, placeholder, name }:any) => {
  return (
    <>
      <div className="mb-6">
        <input
        required={true}
          type={type}
          placeholder={placeholder}
          name={name}
          className="w-full text-white rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
        />
      </div>
    </>
  );
};