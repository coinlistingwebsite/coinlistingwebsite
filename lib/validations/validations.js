export const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,20}$/i.test(email);

export const isPassword = (password) => {
  if (password.length < 7 || password.length > 15) {
    return false;
  } else {
    return true;
  }
};

export const isName = (name) => {
  if (name.length < 3 || name.length > 50) {
    return false;
  } else {
    return true;
  }
};

export function formatNumber(num) {
  if (!num) return;

  if (num >= 1000 && num < 1000000) {
    return (num / 1000).toFixed(0) + "K";
  } else if (num >= 1000000 && num < 1000000000) {
    return (num / 1000000).toFixed(0) + "M";
  } else if (num >= 1000000000) {
    return (num / 1000000000).toFixed(0) + "B";
  }

  if (num < 1000) {
    return num.toFixed(0);
  }

  return "-";
}

export async function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export const formatSmallNumber = (number) => {
  if (typeof number !== "number" || isNaN(number)) return "0";

  // Convert scientific notation to decimal string
  const decimalStr = number.toFixed(20);

  // Find first non-zero digit after decimal
  const match = decimalStr.match(/^0\.0*[1-9]/);
  if (!match) return number.toFixed(8); // fallback to 8 decimals

  // Count leading zeros after decimal point
  const leadingZeros = match[0].length - 2;

  // Show at least 2 significant digits after first non-zero
  const significantDigits = Math.max(leadingZeros + 3, 8);

  // Format the number
  if (number < 0.000001) {
    // For very small numbers, use scientific notation
    return number.toExponential(6);
  } else {
    // For small but not tiny numbers, show decimal
    return number.toFixed(significantDigits);
  }
};

export const PriceDisplay = ({ price }) => {
  const formattedPrice = formatSmallNumber(price);

  return (
    <span className="font-mono">
      <span className="text-sm">$</span>
      {formattedPrice}
    </span>
  );
};

const formatNumberTwo = (number) => {
  if (typeof number !== "number" || isNaN(number)) return "0.00";

  // Handle small numbers (less than 1)
  if (number < 1) {
    // Convert scientific notation to decimal string
    const decimalStr = number.toFixed(20);

    // Find first non-zero digit after decimal
    const match = decimalStr.match(/^0\.0*[1-9]/);
    if (!match) return number.toFixed(8);

    // Count leading zeros after decimal point
    const leadingZeros = match[0].length - 2;

    // Show at least 2 significant digits after first non-zero
    const significantDigits = Math.max(leadingZeros + 3, 8);

    // Format the number
    if (number < 0.000001) {
      return number.toExponential(6);
    } else {
      return number.toFixed(significantDigits);
    }
  }

  // Handle large numbers (1 or greater)
  // Keep 2 decimal places and format with commas
  return number.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const LargeNumberDisplay = ({ price }) => {
  const formattedPrice = formatNumberTwo(price);

  return (
    <div className="font-mono">
      <span className="text-sm">$</span>
      {formattedPrice}
    </div>
  );
};
