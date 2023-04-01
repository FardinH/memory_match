import { useEffect, useState } from "react";

export const usePreview = (time = 1000) => {
  const [preview, setPreview] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => setPreview(false), time);

    return () => {
      clearTimeout(id)
    }
  }, []);

  return preview;
};
