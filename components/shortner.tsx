import axios from 'axios';
import { useEffect, useState } from 'react';
// import useLocalStorage from '../hooks/useLocalStorage';
import Shortlink from './Shortlink';

function Shortner() {
  const [link, setlink] = useState('');
  const [newLinks, setNewLinks] = useState([]);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const savedValue = JSON.parse(localStorage.getItem('links'));
    if (savedValue) setNewLinks(savedValue);
    console.log(newLinks);
  }, []);

  useEffect(() => {
    if (newLinks.length > 0) {
      localStorage.setItem('links', JSON.stringify(newLinks));
    }
  }, [newLinks]);

  const getShortLink = async () => {
    try {
      const data = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${link}`
      );
      const linkObj = {
        full: link,
        short: data.data.result.full_short_link,
      };

      if (!newLinks.find((item) => item.short === linkObj.short)) {
        setNewLinks((curlinks) => [...curlinks, linkObj]);
      }
    } catch (err) {
      console.log(err);
      setErr(true);
    }
  };

  return (
    <div className="mb-[88px] py-2 px-6  maxw">
      <div className="relative -mt-24 sm:-mt-20 p-6 sm:p-12 bg-Primary-DarkViolet bg-[url('/bg-shorten-mobile.svg')] sm:bg-[url('/bg-shorten-desktop.svg')] bg-no-repeat bg-right-top rounded-xl flex flex-col sm:flex-row gap-4">
        <input
          className={`${err && 'inputerr'}`}
          type="text"
          value={link}
          onChange={(e) => setlink(e.target.value)}
          placeholder="Shorten a link here..."
        />
        {err && (
          <em className="text-sm font-semibold text-Secondary-sRed/80 sm:absolute top-[120px] -mt-3 ">
            Please add a link
          </em>
        )}
        <button
          onClick={() => {
            getShortLink();
            setErr(false);
          }}
          className="btn whitespace-nowrap py-3 rounded-md w-full sm:w-auto"
        >
          Shorten It!
        </button>
      </div>
      <div className="mt-6">
        {newLinks[0] &&
          newLinks.map((item, index) => (
            <Shortlink key={index} short={item.short} full={item.full} />
          ))}
      </div>
    </div>
  );
}
export default Shortner;
