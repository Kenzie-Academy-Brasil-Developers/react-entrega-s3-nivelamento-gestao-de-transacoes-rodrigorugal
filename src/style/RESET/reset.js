import { createGlobalStyle } from "styled-components";

const RESet = createGlobalStyle`

 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
	 font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

 }

ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

::-webkit-scrollbar {
  width: 4px;               /* width of the entire scrollbar */
  height: 6px;               /* width of the entire scrollbar */
}

::-webkit-scrollbar-thumb {
  background-color: #0a0a0a;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
}


`;

export default RESet;
