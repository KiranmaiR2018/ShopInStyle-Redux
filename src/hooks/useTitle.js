import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Redux-ShopInStyle`;
  }, [title]);

  return null;
};
