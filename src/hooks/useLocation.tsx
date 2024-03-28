import type { RootState } from "@/lib/Redux/store";
import { useSelector } from "react-redux";

export const useLocation = () =>
	useSelector((state: RootState) => state.location);
