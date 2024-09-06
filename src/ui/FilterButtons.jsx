import { useSearchParams } from "react-router-dom";

function FilterButtons({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get(filterField) || options[1].value;
  const handleClick = (value) => {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex items-center justify-center gap-x-2 text-sm">
      <span>وضعیت</span>
      <div className="flex items-center justify-center gap-x-2 border border-secondary-100 bg-secondary-0 rounded-lg">
        {options.map((item) => {
          const isActive = item.value === currentFilter;
          return (
            <button
            key={item.value}
            disabled={isActive}
              onClick={() => handleClick(item.value)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-lg transition-all duration-300 font-bold ${
                isActive
                  ? "!bg-secondary-400 text-white"
                  : "bg-secondary-0 text-secondary-400"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FilterButtons;
