import { useEffect, useState } from "react";

export default function Bar() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(intervalId);
          setStatus(true);
          return 100;
        }
      });
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flex flex-col gap-10 my-10">
      <h1 className="text-4xl">ProgressBar</h1>
      <div className="py-2 rounded-full overflow-hidden relative">
        {count}%{" "}
        <div
          className="absolute transition-all ease-in-out top-0 bottom-0 -z-10 bg-green-600 h-full"
          style={{ width: `${count}%` }}
        ></div>
      </div>
      <h1 className={`text-xl ${status ? "text-green-500 " : "text-yellow-500 "}`}>
        {!status ? "Loading..." : "Completed"}
      </h1>
    </div>
  );
}
