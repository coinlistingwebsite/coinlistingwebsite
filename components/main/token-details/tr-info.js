const TrInfo = ({ title, link, icon }) => {

  if (!link.props.children) return;
  return (
    <>
      <tr className="flex flex-row py-2 w-full">
        <td className="flex flex-row text-sm my-auto opacity-75">{title}</td>

        <th className="flex-1 justify-end text-right font-light text-sm my-auto">
          <a
            href={link.props.children}
            className="btn btn-neutral btn-xs break-words"
            target="_blank line-clamp-1"
          >
            {icon}
            {link.props.children.substring(0, 20)}
          </a>
        </th>
      </tr>
    </>
  );
};

export default TrInfo;
