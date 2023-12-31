import { useEffect, useContext, useState, useRef } from "react"; // Removed CreatePortal import
import { createPortal } from "react-dom"; // Added import for createPortal
import Carousel from "../../src/components/Carousel-new2";
import { useLocation } from "react-router-dom";
import Share from "../components/Share";

export default function AiRemover() {
  let data = useLocation().state?.data;
  const [noName, setNoName] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div>
      <form
        action=""
        className="search-bar"
        onSubmit={(e) => {
          e.preventDefault();
          setQuery(e.target.query.value);
        }}
      >
        <input type="text" placeholder="search" name="query" />
      </form>
      <button onClick={() => setNoName((prev) => !prev)}>
        No Name {noName}
      </button>
      {noName
        ? data.map((item, index) => {
            if (!item?.title?.trim())
              return (
                <div key={index}>
                  <Carousel
                    images={item.images}
                    name={item.title?.replace("-", " ").replace("?", "")}
                  />
                </div>
              );
          })
        : data.map((item, index) => {
            if (
              item?.title
                ?.replace("-", " ")
                ?.replace("?", "")
                ?.toLowerCase()
                ?.includes(query.toLowerCase())
            )
              return (
                <div key={index}>
                  <Carousel
                    images={item.images}
                    name={item.title?.replace("-", " ").replace("?", "")}
                  />
                </div>
              );
          })}
      {/* {createPortal(, document.getElementById("root"))}{" "} */}
    </div>
  );
}
