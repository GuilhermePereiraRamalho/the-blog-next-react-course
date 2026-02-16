import { SpinLoader } from "@/components/SpinLoader";
import clsx from "clsx";

export default function HomePage() {
  console.log("HOMEPAGE");
  return (
    <div>
      <SpinLoader containerClasses={clsx("min-h-40", "bg-amber-500")} />
    </div>
  );
}
