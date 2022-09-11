// ワイヤレスマイク数　コンバート
export const convMikeNumber = (value: string) => {
  switch (value) {
    case "one":
      return 1;
    case "twe":
      return 2;
    default:
      return 0;
  }
};
