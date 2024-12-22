import { Tooltip } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { formatNumber } from "@/lib/validations/validations";

const Tr = ({ title, description, value }) => {
  if (!value) return;
  var options = { style: "currency", currency: "USD" };
  var formatter = new Intl.NumberFormat("en-US", options);

  return (
    <>
      <tr className="flex flex-col lg:flex-row py-2">
        <td className="flex flex-row text-sm my-auto opacity-75">
          {title}
          <Tooltip title={description}>
            <InfoOutlinedIcon
              style={{ fontSize: "15px" }}
              className="text-xs hover:cursor-pointer my-auto ml-2"
            />
          </Tooltip>
        </td>

        <td className="flex-1 justify-end text-right text-sm my-auto font-medium">
          {formatter.format(value)}
        </td>
      </tr>
    </>
  );
};

export default Tr;
