import SingleBrand from "./SingleBrand";

interface PropTypes {
  data: string[];
  dataLight: string[];
}

const Brands = ({ data, dataLight }: PropTypes) => {
  return (
    <>
      <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="grid grid-cols-2 items-center justify-between gap-7.5 md:grid-cols-4 lg:gap-12.5 xl:gap-29">
            {data.map((item, key) => (
              <SingleBrand
                brand={item}
                lightBrand={dataLight[key]}
                id={key}
                key={key}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;
