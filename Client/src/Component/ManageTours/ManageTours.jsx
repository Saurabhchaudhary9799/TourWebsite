import React from "react";
import { useUser } from "../ContextConfig/ContextConfig";
import Loading from "../Loading/Loading";


import SingleTour from "../SingleTour/SingleTour";

const ManageTours = () => {
  const { tours, loading, error } = useUser();
  if (loading) return <Loading />;
  if (error) return <h1>Error...</h1>;

  return (
    <section className="manage-tours-section ">
      <div className="container  flex flex-col gap-y-10 px-5">
        {tours.map((tour) => {
          return (
            <SingleTour key={tour.id} tour={tour}/>
          );
        })}
      </div>
    </section>
  );
};

export default ManageTours;
