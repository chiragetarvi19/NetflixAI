import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import LOGO from "../assets/logo.png";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="w-full flex justify-between z-10 absolute px-8 py-4 bg-gradient-to-b from-black">
      <div>
        <img className="w-60 mt-2" src={LOGO} alt="logo" />
      </div>
      {user && (
        <div className="flex p-2">
          {showGPTSearch && (
            <select
              className="bg-gray-900 text-white p-2 m-2"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="px-6 py-1 m-1 text-white font-bold bg-blue-700 rounded-md"
            onClick={handleGPTSearchClick}
          >
            <div className="flex gap-x-1">
              {(!showGPTSearch)?<>
              <img
                className="w-8"
                src="https://copilot.microsoft.com/rp/vE266_E90czuUc-Fs55Qoq9hIBc.svg"
                alt="AI"
                />
              <p className="text-xl align-middle">AI Search</p>
              </> : <p className="text-xl align-middle">HomePage</p>}
              
            </div>
          </button>
          <img
            className="w-14 mx-4 rounded-sm"
            src={user?.photoURL}
            alt="userIcon"
          />
          <button
            className="font-bold cursor-pointer text-white text-xl"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
