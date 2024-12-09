import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const TrInfo = ({ title, link, icon }) => {
  if (!link.props.children) return;
  return (
    <>
      <span className="flex flex-row p-1 rounded-xl mb-1 mr-2">
        <span className="lg:flex lg:flex-row text-sm my-auto opacity-75 hidden">
          {title}
        </span>

        <span className="flex-1 justify-end text-right font-light text-sm my-auto">
          <a
            href={link.props.children}
            className="btn-xs break-words"
            target="_blank line-clamp-1"
          >
            {icon}
          </a>
        </span>
      </span>
    </>
  );
};

export default TrInfo;
