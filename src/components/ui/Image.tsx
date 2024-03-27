import * as React from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export default function Image(props: ImageProps) {
	return <img {...props} />;
}
