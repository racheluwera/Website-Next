// import TimeDisplay from "./components/TimeDisplay";

import TimeDisplay from "./components/TimeDisplay";

export default function HomePage(){

  return(
    <section className ="text-center py-20">
      <h1 className ="text-3xl font-bold mb-4">Welcome to My Website!</h1>
      <p className ="text-gray-700 mb-8">This is the home page- explore and enjoy!</p>
      <div className="inline-block bg-white shadow-md rounded-lg p-6">
        <TimeDisplay/>
        </div>
    </section>
  );

}