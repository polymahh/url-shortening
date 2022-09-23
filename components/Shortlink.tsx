import { useState } from 'react';

function Shortlink({ short, full }) {
  const [copied, setCopied] = useState(false);
  const copyLink = async () => {
    await navigator.clipboard.writeText(short).then(() => {
      setCopied(true);
    });
  };
  return (
    <div className="flex flex-col sm:flex-row sm:justify-end sm:items-center rounded-lg bg-white mb-6 ">
      <div className="flex-grow p-4 border-b-[1px] sm:border-b-0 border-Neutral-VeryDarkViolet/10 ">
        <span className="text-Neutral-VeryDarkViolet cursor-auto hover:text-Neutral-VeryDarkViolet">
          {full}
        </span>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 p-4">
        <span className="text-Primary-Cyan cursor-auto">{short}</span>
        <button
          className={`btn ${
            copied
              ? 'bg-Primary-DarkViolet px-5 hover:bg-Primary-DarkViolet'
              : 'bg-Primary-Cyan px-8'
          } rounded-md py-2 sm:ml-2 `}
          onClick={() => copyLink()}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}
export default Shortlink;
