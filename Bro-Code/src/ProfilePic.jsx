import Image from "./assets/girl.jpg";

function ProfilePic() {
  const imgUrl = "Bro-Code/src/assets/girl.jpg";

  const HandelClick = (e) => {
    e.target.style.display = "none";
  };

  return (
    <img className="IMAGE" onDoubleClick={HandelClick} src={Image} alt="Girl" />
  );
}

export default ProfilePic;
