import clsx from "clsx";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea: React.FC<TextareaProps> = ({ className, ...props }) => {
  return (
    <textarea
      className={clsx(
        "w-full rounded-xl p-4 bg-gray-100 dark:bg-white/10 outline-none focus:ring-1 ring-sky-500 dark:ring-sky-500 overflow-hidden dark:text-gray-300 text-gray-600",
        className
      )}
      {...props}
    />
  );
};

export default Textarea;
