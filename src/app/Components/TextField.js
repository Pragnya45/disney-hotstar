import { Input } from "antd";

export default function TextInputField({
  type,
  placeholder,
  value,
  name,
  onChange,
  onBlur,
  readOnly,
  onKeyDown,
  onKeyUp,
  autoFocus,
  className,
  addonBefore,
  onPaste,
}) {
  return (
    <Input
      className={`w-full h-10 font-primary-font ${className}`}
      name={name}
      type={type}
      readOnly={readOnly}
      addonBefore={addonBefore ? "+91" : null}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      autoFocus={autoFocus}
      onPaste={onPaste}
    />
  );
}
