export const phoneNumber = /\([1-9]{2}\) 9[1-9]\d{3}-\d{4}/;

export const cep = /^\d{5}-\d{3}$/;

export const cpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

export const isCpfValid = (cpf: string) => {
  const strCPF = cpf.replace(".", "").replace(".", "").replace("-", "");

  if (
    strCPF === "00000000000" ||
    strCPF === "11111111111" ||
    strCPF === "22222222222" ||
    strCPF === "33333333333" ||
    strCPF === "44444444444" ||
    strCPF === "55555555555" ||
    strCPF === "66666666666" ||
    strCPF === "77777777777" ||
    strCPF === "88888888888" ||
    strCPF === "99999999999" ||
    strCPF.length !== 11
  ) {
    return false;
  }

  if (/^(\d)\1+$/.test(strCPF)) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(strCPF.charAt(i)) * (10 - i);
  }
  let remainder = 11 - (sum % 11);

  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }

  if (remainder !== parseInt(strCPF.charAt(9))) {
    return false;
  }

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(strCPF.charAt(i)) * (11 - i);
  }
  remainder = 11 - (sum % 11);

  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }

  if (remainder !== parseInt(strCPF.charAt(10))) {
    return false;
  }

  return true;
};
