import React, { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/services");
        const data = await res.json();
        console.log(data);
        setServices(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(services, "services");
  return (
    <div className=' bg-[url("/greyCloud.png")] min-h-[100vh] flex  items-center flex-col'>
      <h1 className=" text-4xl text-center">Services we offer ?</h1>
      <div className=" w-[100%] flex flex-wrap p-2 justify-center gap-3">
        {services ? (
          <>
            {services?.map((i, index) => (
              <ServicesCard
                key={index}
                title={i.title}
                description={i.description}
                img={i.image}
              />
            ))}
          </>
        ) : (
          <p className=" text-3xl">
            Looks like the Json server in not turned on or working
          </p>
        )}
      </div>
    </div>
  );
};

export default Services;
