import { RiDashboard2Line } from "react-icons/ri";
import { FaWarehouse, FaUserTie, FaHome, FaBox } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { LuPackagePlus } from "react-icons/lu";
import { GiHoneyJar } from "react-icons/gi";

const items = [
  {
    id: "home",
    name: "home",
    icon: FaHome,
    path: "/",
  },
  {
    id: "dashboard",
    name: "dashboard",
    icon: RiDashboard2Line,
    path: "/dashboard",
  },
  {
    id: "warehouses",
    name: "warehouses",
    icon: FaWarehouse,
    path: "/warehouses",
  },
  {
    id: "settings",
    name: "settings",
    icon: MdSettings,
    path: "/settings",
  },
  {
    id: "employees",
    name: "employees",
    icon: FaUserTie,
    path: "/employees",
    childrens: [
      {
        id: "employees",
        name: "employees",
        path: "/employees",
      },
      {
        id: "profiles",
        name: "profiles",
        path: "/employees/profiles",
      },
    ],
  },
  {
    id: "packing",
    name: "packing",
    icon: LuPackagePlus,
    path: "/packing",
  },
  {
    id: "products",
    name: "products",
    icon: FaBox,
    path: "/products",
    childrens: [
      {
        id: "products",
        name: "products",
        path: "/products",
      },
      {
        id: "products_lots",
        name: "products lots",
        path: "/products/lots",
      },
    ],
  },
  {
    id: "raw_materials",
    name: "raw materials",
    icon: GiHoneyJar,
    path: "/raw-materials",
    childrens: [
      {
        id: "raw_materials",
        name: "raw materials",
        path: "/raw-materials",
      },
      {
        id: "raw_materials_lots",
        name: "raw materials lots",
        path: "/raw-materials/lots",
      },
    ],
  },
];

export default items;
