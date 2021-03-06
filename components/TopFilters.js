import Button from "./Button";
import RadioGroup from "./RadioGroup";
import SelectGroup from "./SelectGroup";

export default function TopFilters() {
  return (
    <div className="content-center justify-center lg:flex lg:flex-row w-full max-w-screen-md mx-auto px-4 pt-4 sm:px-0">
      <div className="border-b py-4 border-gray-300">
        <RadioGroup
          name="sort"
          label="Sort"
          radios={[
            {
              value: "top",
              label: "Top Rated",
              checked: true,
            },
            {
              value: "latest",
              label: "Latest",
            },
            {
              value: "oldest",
              label: "Oldest",
            },
          ]}
          horizontal
        />
      </div>

      <div className="border-b py-4 border-gray-300">
        <RadioGroup
          name="media"
          label="Media type"
          radios={[
            {
              value: "photo",
              label: "Photo",
              checked: true,
            },
            {
              value: "video",
              label: "Video",
            },
          ]}
          horizontal
        />
      </div>

      <div className="border-b py-4 border-gray-300">
        <div className="lg:flex lg:flex-row">
        <SelectGroup
          label="Select tags"
          placeholder="Select..."
          name="tags"
          options={[
            {
              value: "crowd",
              label: "Crowd",
            },
            {
              value: "portrait",
              label: "Portrait",
            },
            {
              value: "venue",
              label: "Venue",
            },
          ]}
        />
        </div>
      </div>
    </div>
  );
}
