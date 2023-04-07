import { Textarea } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

type WritingSampleProps = {
  writingSample: string;
  setWritingSample: Dispatch<SetStateAction<string>>;
};

const WritingSample = ({
  writingSample,
  setWritingSample,
}: WritingSampleProps) => {
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setWritingSample(inputValue);
  };
  return (
    <>
      <Textarea
        value={writingSample}
        onChange={handleInputChange}
        placeholder="Paste a sample of your writing here."
        size="sm"
      />
    </>
  );
};

export default WritingSample;
