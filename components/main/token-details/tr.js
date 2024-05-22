import { Tooltip } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";


const Tr = ({ title, description, value }) => {
  var options = { style: "currency", currency: "USD" };
  var formatter = new Intl.NumberFormat("en-US", options);

  return (
    <>
      <tr className="flex flex-row py-2">
        <td className="flex flex-row text-sm my-auto opacity-75">
          {title}
          <Tooltip title={description}>
            <InfoOutlinedIcon
              style={{ fontSize: "15px" }}
              className="text-xs hover:cursor-pointer my-auto ml-2"
            />
          </Tooltip>
        </td>

        <th className="flex-1 justify-end text-right font-light text-sm my-auto">
          {/* ${formatNumber(value)} */}
          {formatter.format(value)}
        </th>
      </tr>
    </>
  );
};

export default Tr;
