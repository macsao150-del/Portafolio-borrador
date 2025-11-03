import { useTranslation } from "react-i18next";


export default function DownloadCVButton() {
    const { t } = useTranslation();
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CV_AsherMartinez.pdf";
    link.download = "Asher_Martinez_CV.pdf";
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center mt-10 text-xl gap-2 bg-linear-to-r from-[#2f8dd5] to-[#1f2f7d] text-white px-6 py-3 rounded-2xl font-semibold shadow-md hover:scale-105 transition-all duration-300"
    >
      <span className="text-xl">📄</span>
      {t("downloadCV")}
    </button>
  );
}
