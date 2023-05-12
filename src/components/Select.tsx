import clsx from "clsx";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select: React.FC<SelectProps> = ({ className, ...props }) => {
  return (
    <select
      className={clsx(
        "py-2 px-2 bg-gray-100 rounded-lg dark:bg-white/10 outline-none focus:ring-1 ring-sky-500",
        className
      )}
      {...props}
    />
  );
};

export default Select;

interface OptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {}

const Option: React.FC<OptionProps> = ({ ...props }) => {
  return (
    <option
      className="text-black bg-gray-100 dark:text-gray-100 dark:bg-gray-900"
      {...props}
    />
  );
};

export { Option };
