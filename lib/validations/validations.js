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
