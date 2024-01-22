import { ReactNode } from "react";
import { Select, SelectProps } from "antd";
import "./CustomSelect.less";

type CustomSelectProps = SelectProps & {
  prefixIcon?: ReactNode;
};

const CustomSelect = ({ prefixIcon, children, ...rest }: CustomSelectProps) => {
  return (
    <div className="select-wrapper">
      {prefixIcon && <div className="prefix-icon-wrapper">{prefixIcon}</div>}
      <Select {...rest}>{children}</Select>
    </div>
  );
};

export default CustomSelect;
