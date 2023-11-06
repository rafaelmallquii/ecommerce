import React from "react";

export default function MenuDaisy() {
  return (
    <div>
      <ul className="menu lg:menu-horizontal bg-base-200 gap-5 ">
        <li>
          <details>
            <summary>Parent item</summary>
            <ul className="bg-white text-black w-[200px]">
              <li>
                <a >PC GAMA MEDIA</a>
              </li>
              <li>
                <a>PC GAMA INTEL</a>
              </li>
              <li>
                <a>PC AMD RYZEN</a>
              </li>
              <li></li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>Parent item</summary>
            <ul className="bg-white">
              <li>
                <a >item 1</a>
              </li>
              <li>
                <a>level </a>
              </li>
              <li></li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>Parent item</summary>
            <ul className="bg-white">
              <li>
                <a >item 1</a>
              </li>
              <li>
                <a>level </a>
              </li>
              <li></li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>Parent item</summary>
            <ul className="bg-white">
              <li>
                <a >item 1</a>
              </li>
              <li>
                <a>level </a>
              </li>
              <li></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
}
