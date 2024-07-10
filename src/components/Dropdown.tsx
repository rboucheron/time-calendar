import { ChevronDown } from "lucide-react";
import { ReactNode, useState } from "react";

export interface Option {
  value: number;
  label: string;
}

interface DropdownProps {
  children: ReactNode;
  options: Array<Option>;
  onChange: (month: number) => void;
}

const Dropdown = (props: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleValue, setToggleValue] = useState<string>("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = (value: Option) => {
    setToggleValue(value.label);
    setIsOpen(false);
    props.onChange(value.value);
  };

  return (
    <div className="relative w-56 p-2 inline-block text-left">
      <div className="flex w-full">
        <input
          type="text"
          readOnly
          className={`p-2 rounded-l-md border bg-transparent border-r-0 ${
            toggleValue === "" ? "text-gray-400" : "text-white"
          } focus:outline-none focus:shadow-none`}
          value={`${toggleValue === "" ? props.children : toggleValue}`}
        />
        <button className={`p-2  rounded-r-md border`} onClick={toggleDropdown}>
          <div
            className={`transition-all ${isOpen ? "rotate-180" : "rotate-0"}`}
          >
            <ChevronDown color="white" />
          </div>
        </button>{" "}
      </div>

      {isOpen && (
        <div className=" absolute origin-top-right overflow-y-scroll h-24 right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1 px-2 w-full"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {props.options.map((option) => (
              <button
                key={option.value}
                className="block w-full px-4 py-2 text-left text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 border-b mt-2"
                role="menuitem"
                onClick={() => handleButtonClick(option)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
