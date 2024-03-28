import { cn } from "@/lib/utils";
import { ImgHTMLAttributes } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

export default function Image({ className, ...rest }: ImageProps) {
	return <img className={cn("", className)} {...rest} />;
}
