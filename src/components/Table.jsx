const Table = () => {
  return (
    <section className="relative mb-5 flex h-fit min-w-0 flex-col break-words rounded-xl border-0 bg-white bg-clip-border shadow-card1 xl:mb-9">
      <div className="flex min-h-16 flex-wrap items-stretch justify-between px-9">
        <h3 className="m-2 ml-0 flex flex-col items-start justify-center text-xl font-medium">
          <span className="mb-1 mr-3 font-semibold xl:text-xl">
            Members Statistics
          </span>
          <span className="mt-1 text-base font-medium text-[#99a1b7]">
            Over 500 members
          </span>
        </h3>
        <div className="my-2 flex flex-wrap items-center">
          <button className="cursor-pointer border-0 bg-[#f1faff] px-5 py-2 text-[#009ef7]">
            + New Member
          </button>
        </div>
      </div>
      {/* <div className="mx-auto my-6 flex max-w-7xl flex-col gap-4 rounded-xl bg-white pb-6"> */}
      <div className="flex-auto px-9 py-3">
        <div className="overflow-x-auto">
          <table className="mb-4 w-full caption-bottom border-collapse border-[#f1f1f2] align-middle">
            <thead>
              <tr className="border-b border-dashed border-b-[#f1f1f2] font-semibold text-[#99a1b7]">
                <th className="min-w-[150px] px-3 py-4">Authors</th>
                <th className="min-w-[140px] px-3 py-4">Company</th>
                <th className="min-w-[120px] px-3 py-4">Progress</th>
                <th className="min-w-[100px] px-3 py-4 pr-0 text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        
                    </td>
                </tr>
            </tbody>
          </table>
          <div className="flex flex-col gap-10 md:gap-4">
            <div className="flex w-full flex-wrap items-center gap-4 px-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F3F6F9]">
                {/* <img src={item.thumbnail} alt="plurk" className="h-7 w-7" /> */}
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-sm font-semibold text-[#464E5F]"></h4>
                <p className="text-xs font-semibold text-[#464E5F]">
                  FTP:{" "}
                  <span className="font-medium text-[#B5B5C3]">
                    bprow@bnc.cc
                  </span>
                </p>
              </div>
              <div className="ml-auto flex flex-col gap-1">
                <p className="text-sm font-semibold text-[#464E5F]"></p>
                <p className="text-sm font-medium text-[#B5B5C3]">Paid</p>
              </div>
              {/* text can be text-approved or text-success or text-progress or text-rejected */}
              {/* bg can be bg-approved or bg-success or bg-progress or bg-rejected */}
              <div
                className={`rounded-lg  p-2 text-xs font-medium  capitalize md:mx-8`}
              ></div>
              <div className="flex items-center gap-2">
                <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F3F6F9]"></button>
                <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F3F6F9]"></button>
                <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F3F6F9]"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
