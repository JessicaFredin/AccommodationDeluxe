// eslint-disable-next-line no-unused-vars
import React from "react";

function CilPrint(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 512 512"
			{...props}
		>
			<path
				fill="currentColor"
				d="M420 128.1V16H92v112.1A80.1 80.1 0 0 0 16 208v192h68v-32H48V208a48.054 48.054 0 0 1 48-48h320a48.054 48.054 0 0 1 48 48v160h-44v32h76V208a80.1 80.1 0 0 0-76-79.9m-32-.1H124V48h264Z"
			></path>
			<path
				fill="currentColor"
				d="M396 200h32v32h-32zm-280 64H76v32h40v200h272V296h40v-32zm240 200H148V296h208Z"
			></path>
		</svg>
	);
}

export default CilPrint
