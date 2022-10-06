import { useState } from "react";
import Select from "./Select";
const selectOptions = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
];

function App() {
  const [value, setValue] = useState<typeof selectOptions[0] | undefined>(
    selectOptions[0]
  );
  return (
    <>
      <Select
        options={selectOptions}
        value={value}
        onChange={(value) => setValue(value)}
      />
    </>
  );
}

export default App;
