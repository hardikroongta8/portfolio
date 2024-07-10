type props = {
  url: string;
  iconName: string;
};

export default function Social({ url, iconName }: props) {
  return (
    <li>
      <a href={url}>
        <img
          src={iconName}
          className="h-7 hover:scale-125 transition duration-75"
        />
      </a>
    </li>
  );
}
