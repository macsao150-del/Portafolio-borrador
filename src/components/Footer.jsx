import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:macsao@gmail.com?subject=Contacto%20de%20${encodeURIComponent(
      name
    )}%20<${encodeURIComponent(email)}>&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <footer
      id="footer"
      className="relative z-0 flex items-center justify-center w-full lg:h-[95vh] bg-linear-to-b from-[#1e2128] to-[#111318] text-gray-300 overflow-hidden"
    >
      <div className="w-[90%] pt-10 lg:pt-1 h-[80%] flex flex-col justify-start">
        <div className="absolute inset-0 opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
            <h2 className="text-2xl font-[Goldman,sans-serif] text-white tracking-wide">
              Asher <span className="text-[#65e8ff]">Martínez</span>
            </h2>
            <p className="text-gray-400 text-sm">{t("phrase_footer")} ⋅˚₊‧ଳ‧₊˚⋅</p>
            <p className="text-gray-400 text-base mt-2">{t("contact_footer")}</p>

          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-5">General</h3>
            <ul className="lg:leading-6 leading-8 text-gray-400 text-sm">
              <li>
                <a href="#seccion-principal" className="hover:text-blue-400">
                  {t("home")}
                </a>
              </li>
              <li>
                <a href="#seccion-sobre-mi" className="hover:text-blue-400">
                  {t("about")}
                </a>
              </li>
              <li>
                <a href="#seccion-proyectos" className="hover:text-blue-400">
                  {t("portfolio_footer")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              {t("send_me_footer")}
            </h3>

            {!sent ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("your_name_footer")}
                  required
                  className="px-4 py-2 rounded-md bg-[#1b1f27] border border-gray-700 text-white placeholder-gray-500 focus:border-cyan-400 outline-none"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("your_email_footer")}
                  required
                  className="px-4 py-2 rounded-md bg-[#1b1f27] border border-gray-700 text-white placeholder-gray-500 focus:border-cyan-400 outline-none"
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t("your_message_footer")}
                  required
                  className="px-4 resize-none py-2 rounded-md bg-[#1b1f27] border border-gray-700 text-white placeholder-gray-500 focus:border-cyan-400 outline-none min-h-[100px]"
                ></textarea>

                <button
                  type="submit"
                  className="bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-2 rounded-md transition-all duration-300"
                >{t("send_footer")}
                </button>

                <p className="text-sm text-gray-400 mt-2">
                  {t("or_footer")}{" "}
                  <a
                    href="mailto:2024030475@upsin.edu.mx"
                    className="text-cyan-400 hover:underline"
                  >
                    2024030475@upsin.edu.mx
                  </a>
                </p>
              </form>
            ) : (
              <p className="text-cyan-400 text-center mt-10 text-lg font-semibold">
                {t("thanks_footer")} 💫
              </p>
            )}
          </div>
        </div>

        <div className="relative z-10 border-t border-gray-700 mt-12 pt-6 flex flex-col pb-10 md:flex-row justify-center items-center max-w-7xl mx-auto px-6">
          <p className="text-sm text-gray-500 text-center md:text-center">
            © {new Date().getFullYear()} {t("footer")}
          </p>
        </div>
      </div>
    </footer>
  );
}
