/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
export const ContactTextArea = ({ row, placeholder, name, defaultValue }:any) => {
  return (
    <>
      <div className="mb-6">
        <textarea
           required={true}
          rows={row}
          placeholder={placeholder}
          name={name}
          className="w-full text-white resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};