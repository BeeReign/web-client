import Link from "next/link";

type Props = {
  item: { id: string; name: string; path: string };
  currentPath: string;
};

export default function DropdownItem({ item, currentPath }: Props) {
  return (
    <Link
      href={item.path}
      className={`pl-2 mb-1 rounded block ${
        currentPath == item.path ? "bg-gray-100" : "hover:bg-gray-100"
      }`}
    >
      <div className="text-gray-900  capitalize text-sm py-1.5 truncate">
        {item.name}
      </div>
    </Link>
  );
}
