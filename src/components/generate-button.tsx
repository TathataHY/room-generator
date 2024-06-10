"use client";

import {
  useImage,
  useLoading,
  useOutput,
  useRoom,
  useTheme,
} from "@/store/use-store";

function GenerateButton() {
  const imageUrl = useImage((state: any) => state.imageUrl);
  const theme = useTheme((state: any) => state.theme);
  const room = useRoom((state: any) => state.room);
  const setOutput = useOutput((state: any) => state.setOutput);
  const setLoading = useLoading((state: any) => state.setLoading);
  const setGenerating = useLoading((state: any) => state.setGenerating);

  const handleClick = async () => {
    if (imageUrl && theme && room) {
      setLoading(true);
      setGenerating(true);
      const response = await fetch("/api/dream", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imageUrl, theme, room }),
      });
      const data = await response.json();

      if (response.status !== 200) {
        alert(data.message);

        setGenerating(false);
        setLoading(false);
        return;
      }
      setOutput(data);
      setGenerating(false);
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${
        imageUrl && theme && room ? "" : "cursor-not-allowed"
      } p-5 w-full bg-blue-700 text-white rounded-lg hover:opacity-90 active:scale-[.98] transition`}
    >
      Generate Room
    </button>
  );
}

export default GenerateButton;
