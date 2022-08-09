import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'Arara'", () => {
    const ehPalindromo = checaPalindromo("arara");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'casa'", () => {
    const ehPalindromo = checaPalindromo("casa");
    expect(ehPalindromo).toEqual(false);
  });

  it("retorna true para 'asa'", () => {
    const ehPalindromo = checaPalindromo("asa");
    expect(ehPalindromo).toEqual(true);
  });

  // it("retorna true para 'Asa'", () => {
  //   const ehPalindromo = checaPalindromo("Asa");
  //   expect(ehPalindromo).toEqual(true);
  // }) - a letra maiúscula da palavra A é um exemplo do que pede no 6, pois é esperado que retorne true, mas retorna false. O teste considera as letras maiúsculas e minúsculas  ;
});
