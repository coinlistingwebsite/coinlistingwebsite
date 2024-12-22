const TrInfo = ({ title, link, icon }) => {
  if (!link.props.children) return;

  return (
    <a
      href={link.props.children}
      target="_blank"
      className="block hover:cursor-pointer hover:underline"
    >
      <span className="flex flex-row p-1 rounded-xl mb-1 mr-2">
        <span className="lg:flex lg:flex-row text-md my-auto opacity-75 hidden">
          {title}
        </span>

        <span className="flex-1 justify-end text-right font-light text-lg my-auto">
          <span className="btn-xs break-words line-clamp-1">{icon}</span>
        </span>
      </span>
    </a>
  );
};

export default TrInfo;
