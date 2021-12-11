import defaultAvatar from "../img/default-avatar.svg";

export default function ProfileImage({ src }) {
  const checkImageSrc = (src) => {
    // Displays a default avatar when the src path is null
    if (src === null) {
      console.warn(`Avatar src seems to be null! (${src})`);
      return defaultAvatar;
    }
    return src;
  };

  return <img src={checkImageSrc(src)} className="profile-img" alt="Profile" />;
}
