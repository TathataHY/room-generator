import GenerateButton from "@/components/generate-button";
import PreviewImage from "@/components/preview-image";
import SelectInput from "@/components/select-input";
import ThemeOptions from "@/components/theme-options";
import UploadDnd from "@/components/upload-dnd";

export default function Room() {
  return (
    <div className="container mx-auto py-10">
      <div className="w-full flex flex-col md:flex-row items-center md:items-stretch gap-20 px-10">
        <div className="flex flex-col items-center gap-8 md:w-1/3">
          <div className="flex flex-col items-center gap-5 w-full">
            <h3 className="font-bold text-white text-xl">
              Upload a photo of your room
            </h3>
            <UploadDnd />
          </div>
          <div className="flex flex-col items-center gap-5 w-full">
            <h3 className="font-bold text-white text-xl">Select Room Type</h3>
            <SelectInput />
          </div>
          <div className="flex flex-col items-center gap-5 w-full">
            <h3 className="font-bold text-white text-xl">Select Room Theme</h3>
            <ThemeOptions />
          </div>
          <GenerateButton />
        </div>
        <div className="md:w-2/3 flex flex-col items-center pb-10">
          <div className="md:flex hidden flex-col gap-5 text-center">
            <h1 className="text-6xl text-white font-bold">
              Redesign your <span className="text-blue-500">room</span> in
              seconds
            </h1>
            <p className="text-2xl text-white">
              Upload a room, specify the room type, and select your room theme
              to redesign.
            </p>
          </div>
          <PreviewImage />
        </div>
      </div>
    </div>
  );
}
