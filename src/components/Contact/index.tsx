import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const tokenWeb3forms = "ecb3639e-a05b-4852-b28f-8b622ccdc491";

const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);

  const onSubmit = useCallback(async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setIsLoading(true);

    formData.append("access_key", tokenWeb3forms);
    formData.append("from_name", "Ryminds.com");
    formData.append("subject", "Tienes un nuevo mensaje desde la página web Ryminds.com");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setShowThankYouMessage(true);
        event.target.reset();
      } else {
        console.error("Error", data);
      }
    } catch (error) {
      console.error("Error", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, showThankYouMessage, onSubmit };
};

const Contact = ({ config }) => {
  const [hasMounted, setHasMounted] = useState(false);
  const { isLoading, showThankYouMessage, onSubmit } = useContactForm();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <section id="contact" className="px-0 md:px-8 2xl:px-0">
      <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
        <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
        <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
          <img
            src="./images/shape/shape-dotted-light.svg"
            alt="Dotted"
            className="dark:hidden"
            loading="lazy"
            decoding="async"
          />
          <img
            src="./images/shape/shape-dotted-dark.svg"
            alt="Dotted"
            className="hidden dark:block"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
          >
            <h2 className="text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
              Enviar un mensaje
            </h2>

            {showThankYouMessage && (
              <div
                id="success-alert"
                className="mt-5 relative rounded border border-teal-400 bg-teal-100 px-4 py-3 text-teal-700 transition-all delay-150 duration-300 ease-in-out"
                role="alert"
              >
                <strong className="font-bold">¡Hemos recibido tu solicitud!</strong>
                <span className="block sm:inline">Gracias por contactarnos. Nos pondremos en contacto con usted en breve.</span>
              </div>
            )}

            <form onSubmit={onSubmit}>
              <div className="mt-7 mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                <input
                  type="text"
                  required
                  placeholder="Nombre completo"
                  name="name"
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                />

                <input
                  type="email"
                  required
                  name="email"
                  placeholder="Correo"
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                />
              </div>
              <div className="mb-11.5 flex">
                <textarea
                  placeholder="Mensaje"
                  name="message"
                  rows={4}
                  className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                ></textarea>
              </div>

              <button
                aria-label="send message"
                className="rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
              >
                {isLoading ? (
                  <div role="status">
                    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41 .7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2.5">
                    <span>Enviar mensaje</span>
                    <svg
                      className="fill-white"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                        fill=""
                      />
                    </svg>
                  </div>
                )}
              </button>
            </form>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 2, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
          >
            <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
              Encuentranos
            </h2>

            <div className="5 mb-7">
              <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                Correo
              </h3>
              <p>
                <a href={`mailto:${config?.contact?.email}`}>{config?.contact?.email}</a>
              </p>
            </div>
            {/* <div>
              <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                Teléfono
              </h4>
              <p>
                <a href={`tel:${config?.contact?.number}`}>{config?.contact?.number}</a>
              </p>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact