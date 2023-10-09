import { useState } from "react";

const [lang, setLang] = useState(true);

  const [translate] = useState({
    ar: {
      home: "الصفحة الرئيسية",
      lang: "اللغة",
      about: "حول",
      name: "687edf53 | محمد حسام",
    },
    en: {
      home: "Home",
      lang: "Lang",
      about: "About",
      name: "Mohammed Hossam | 687edf53",
    },
  });

  export {lang, setLang, translate}