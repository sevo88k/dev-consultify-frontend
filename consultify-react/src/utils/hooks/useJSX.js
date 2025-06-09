import { useEffect, useState } from "react";
import parse from "html-react-parser";
const useJsx = (html) => {
  const [jsxText, setJsxText] = useState();

  useEffect(() => {
    setJsxText(parse(html, options));
  }, []);

  const options = {
    replace: (domNode) => {
      if (domNode.attribs && domNode.attribs.class === "remove") {
        return <div></div>;
      }
    },
  };
  console.log(jsxText);
  return jsxText;
};
export default useJsx;
