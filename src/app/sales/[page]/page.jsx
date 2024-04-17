"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Heading from "@/app/components/Heading/Heading";
import TableTitle from "@/app/components/TableTitle/TableTitle";
import TableHeader from "@/app/components/TableHeader/TableHeader";
import TableData from "@/app/components/TableData/TableData";
import Pagination from "@/app/components/Pagination/Pagination";
import Button from "@/app/components/UI/Button";

export default function Customers() {
  const params = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/sales/" + params.page
        );
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <main id="page-content" className="flex max-w-full flex-auto flex-col">
      {/* <!-- Page Heading --> */}
      <Heading title="Sales" subtitle="Know more about your sales" />
      {/* <!-- END Page Heading --> */}

      {/* <!-- Page Section --> */}
      <div className="container mx-auto p-4 lg:p-8 xl:max-w-7xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* <!-- Table Title --> */}
          <div className="flex flex-col rounded-lg border bg-white sm:col-span-2 lg:col-span-4">
            <div className="flex flex-col items-center justify-between gap-4 border-b border-neutral-100 p-5 text-center sm:flex-row sm:text-start">
              <TableTitle
                title="Sales"
                description="All Sales"
              ></TableTitle>
            </div>
            <div className="p-5">
              {/* <!-- Responsive Table Container --> */}
              <div className="min-w-full overflow-x-auto rounded">
                {/* <!-- Alternate Responsive Table --> */}
                <table className="min-w-full align-middle text-sm">
                  {/* <!-- Table Header --> */}
                  <thead>
                    <tr className="border-b-2 border-neutral-100">
                      <TableHeader title="Sales ID" />
                      <TableHeader title="Date" />
                      <TableHeader title="Store Location" />
                      <TableHeader title="Purchase Method" />
                      <TableHeader title="Total" />
                      <TableHeader title="" />
                    </tr>
                  </thead>
                  {/* <!-- END Table Header --> */}

                  {/* <!-- Table Body --> */}
                  <tbody>
                    {data.sales.map((sale) => (
                      <tr
                        key={sale._id}
                        className="border-b border-neutral-100 hover:bg-neutral-50"
                      >
                        <TableData value={sale._id} />
                        <TableData value={sale.sale_date} />
                        <TableData value={sale.store_location} />
                        <TableData value={sale.purchase_method} />
                        <TableData value={sale.total.$numberDecimal} />
                        <Button
                          title="View"
                          href={`/sales/detail/${sale._id}`}
                        />
                      </tr>
                    ))}
                  </tbody>
                  {/* <!-- END Table Body --> */}
                </table>
                {/* <!-- END Alternate Responsive Table --> */}
              </div>
              {/* <!-- END Responsive Table Container --> */}
            </div>
          </div>
          <Pagination
            currentPage={params.page}
            lastPage={data.totalPages}
            href={"/sales/"}
          />
          {/* <!-- END Tickets --> */}
        </div>
      </div>
      {/* <!-- END Page Section --> */}
    </main>
  );
}
