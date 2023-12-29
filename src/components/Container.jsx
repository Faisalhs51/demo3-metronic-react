import Cards1 from "./Cards1";
import Table from "./Table";

const Container = () => {
  return (
    <div className="flex flex-auto flex-col lg:pl-[350px] lg:pt-12">
      <div className="flex shrink-0 grow basis-auto flex-col lg:pt-6">
        <div className="mx-auto w-full lg:px-12">
          <Cards1 />
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Container;
