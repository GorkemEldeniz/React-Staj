import { cn } from "@/lib/utils";
import { SpinnerGap } from "@phosphor-icons/react";
import { cva, type VariantProps } from "class-variance-authority";

import * as React from "react";

const inputVariants = cva(
	"w-full rounded-md py-[17px] px-5 bg-[#1E1E29] text-gray-100 text-md placeholder:text-gray-400 focus:outline-none"
);

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement>,
		VariantProps<typeof inputVariants> {
	isLoading?: boolean;
	error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, error, isLoading = false, ...props }, ref) => {
		return (
			<div className='relative'>
				<input
					className={cn(inputVariants({ className }), {
						"text-gray-400": isLoading,
						"border border-red-400": !!error,
					})}
					ref={ref}
					{...props}
				/>
				<SpinnerGap
					className={cn(
						"absolute invisible opacity-0 top-3 right-3 fill-blue-light size-8 animate-spin",
						{
							"visible opacity-100": isLoading,
						}
					)}
				/>
				{error ? <p className='mt-2 text-red-200'>{error}</p> : undefined}
			</div>
		);
	}
);

Input.displayName = "Input";
