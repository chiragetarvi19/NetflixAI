import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";


const Header = () => {

    const navigate = useNavigate();
    const dispatch=useDispatch();
    const user=useSelector(store => store.user)
    const handleSignOut =()=>{
        signOut(auth).then(() => {})
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
                  photoURL: photoURL 
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

  return (
    <div className="w-full flex justify-between z-10 absolute px-8 py-2 bg-gradient-to-b from-black">
      <div>
        <img
          className="w-44"
          src={LOGO}
          alt="logo"
        />
      </div>
      {user && <div className="flex p-2">
        {/* <h1 className="text-xl">{user?.displayName}</h1> */}
        <img
          className="w-12 h-12 m-2 rounded-sm"
          src={user?.photoURL}
          alt="userIcon"
        />
        <button className="font-bold cursor-pointer text-white text-xl" onClick={handleSignOut}>Sign Out</button>
      </div>}
    </div>
  );
};

export default Header;
