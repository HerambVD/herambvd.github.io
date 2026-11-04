import type { ContactField } from "../model/validation";

type FormFieldProps = {
  name: ContactField;
  label: string;
  value: string;
  invalid: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  multiline?: boolean;
};

const inputClass = (invalid: boolean) =>
  `${invalid ? "border-red-300" : ""} appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`;

/** Labelled text input (or textarea) styled for the contact form. */
export default function FormField({ name, label, invalid, multiline, type = "text", ...rest }: FormFieldProps) {
  const id = `contact-${name}`;
  const props = { id, name, className: inputClass(invalid), "aria-invalid": invalid, ...rest };
  return (
    <div>
      <label
        htmlFor={id}
        className={`${invalid ? "text-red-800" : "text-gray-700 dark:text-gray-100"} block uppercase tracking-wide text-xs font-bold mb-2`}
      >
        {label}:
      </label>
      {multiline ? <textarea rows={4} {...props} /> : <input type={type} {...props} />}
    </div>
  );
}
