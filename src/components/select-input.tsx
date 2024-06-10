"use client";

import Select from "react-select";

import { useRoom } from "@/store/use-store";

const options = [
  { value: "living room", label: "Living Room" },
  { value: "bedroom", label: "Bedroom" },
  { value: "bathroom", label: "Bathroom" },
  { value: "kitchen", label: "Kitchen" },
];

function SelectInput() {
  const [setRoom] = useRoom((state: any) => [state.setRoom]);

  const handleChange = (e: any) => {
    setRoom(e.value);
  };

  return (
    <div className="w-full">
      <Select
        onChange={handleChange}
        options={options}
        defaultValue={options[0]}
      />
    </div>
  );
}

export default SelectInput;
