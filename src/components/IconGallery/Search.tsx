import { Input, Portal } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { ChangeEvent, startTransition, useEffect, useRef } from "react";

interface Props {
  setSearch: (value: string) => void;
}
export const IconGallerySearch = ({ setSearch }: Props) => {
  const initialRef = useRef(false);
  const [input, setInput] = useLocalStorage<string>({
    key: "poco.eraser-io.icon-gallery.search",
    defaultValue: "",
    getInitialValueInEffect: true,
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setInput(value);
    startTransition(() => setSearch(value));
  };
  useEffect(() => {
    // initial search
    console.log("gogo, input:", input);
    if (!initialRef.current) return;
    if (input) {
      initialRef.current = true;
      startTransition(() => setSearch(input));
    }
  }, [input, setSearch]);

  return (
    <Portal target="#search-target">
      <Input value={input} onChange={handleChange} flex="1 0 auto" />
    </Portal>
  );
};
