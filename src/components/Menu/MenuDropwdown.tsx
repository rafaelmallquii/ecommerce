import React from "react";

export default function MenuDropwdown() {
  return (
    <div>
    <ul className="menu bg-[#F51300] text-white lg:menu-horizontal  ">
      <li>
        <details className="w-[100px]">
          <summary>Todas </summary>
            <ul className="bg-white w-[200px] text-black">
            <li>
              <a >PC GAMA MEDIA</a>
            </li>
            <li>
              <a>PC GAMA INTEL</a>
            </li>
            <li>
              <a>PC AMD RYZEN</a>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  );
}
