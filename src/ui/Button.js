"use client";

export default function Button({ title, style }) {
  return (
    <button
      className={`bg-gradient-to-r  from-[#FF26B9] to-[#9034ff]  p-3 px-10 rounded-sm  ${style} `}
    >
      {title}
    </button>
  );
}
