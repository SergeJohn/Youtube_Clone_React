import { Stack } from "@mui/system";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  const btns = categories.map((item) => {
    return (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(item.name)}
        style={{
          background: selectedCategory === item.name && "#FC1503",
          color: "#fff",
        }}
        key={item.name}
      >
        <span
          style={{
            color: item.name === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {item.icon}
        </span>
        <span style={{ opacity: item.name === selectedCategory ? "1" : "0.8" }}>
          {item.name}
        </span>
      </button>
    );
  });
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {btns}
    </Stack>
  );
};
export default Sidebar;
