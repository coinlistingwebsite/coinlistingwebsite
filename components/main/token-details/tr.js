import { Tooltip } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { formatNumber } from "@/lib/validations/validations";

const Tr = ({ title, description, value }) => {
  var options = { style: "currency", currency: "USD" };
  var formatter = new Intl.NumberFormat("en-US", options);

  return (
    <>
      <tr className="flex flex-row py-2 ">
        <td className="flex flex-row text-sm my-auto opacity-75">
          {title}
          <Tooltip title={description}>
            <InfoOutlinedIcon
              style={{ fontSize: "15px" }}
              className="text-xs hover:cursor-pointer my-auto ml-2"
            />
          </Tooltip>
        </td>

        <td className="flex-1 justify-end text-right text-lg my-auto line-clamp-1 truncate break-words">
          {/* ${formatNumber(value)}
          <br /> */}
          {/* {value} */}
          {/* {formatter.format(value)} */}
        </td>
      </tr>
    </>
  );
};

export default Tr;
