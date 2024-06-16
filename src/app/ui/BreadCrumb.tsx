import Link from "next/link";

interface BreadCrumbProps {
  pathname: string;
}

export default function BreadCrumb({ pathname }: BreadCrumbProps) {
  const path = pathname.split("/").filter((p) => p !== "");
  const first = path[0];
  return (
    <div className="flex gap-1">
      <Link className="flex gap-1 items-center" href={`/${first}`}>
        <span className="text-sm text-gray-400 hover:underline">/ {first}</span>
      </Link>
    </div>
  );
}
