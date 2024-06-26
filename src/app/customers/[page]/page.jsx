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
          "http://localhost:5000/api/customers/" + params.page
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
      <Heading title="Customers" subtitle="Here you can see all customers" />
      {/* <!-- END Page Heading --> */}

      {/* <!-- Page Section --> */}
      <div className="container mx-auto p-4 lg:p-8 xl:max-w-7xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* <!-- Table Title --> */}
          <div className="flex flex-col rounded-lg border bg-white sm:col-span-2 lg:col-span-4">
            <div className="flex flex-col items-center justify-between gap-4 border-b border-neutral-100 p-5 text-center sm:flex-row sm:text-start">
              <TableTitle
                title="Recent Sales"
                description="All open tickets"                
              >                
              </TableTitle>
            </div>
            <div className="p-5">
              {/* <!-- Responsive Table Container --> */}
              <div className="min-w-full overflow-x-auto rounded">
                {/* <!-- Alternate Responsive Table --> */}
                <table className="min-w-full align-middle text-sm">
                  {/* <!-- Table Header --> */}
                  <thead>
                    <tr className="border-b-2 border-neutral-100">
                      <TableHeader title="Customer ID" />
                      <TableHeader title="First Name" />
                      <TableHeader title="Last Name" />
                      <TableHeader title="Age" />
                      <TableHeader title="Country" />
                      <TableHeader title="" />
                    </tr>
                  </thead>
                  {/* <!-- END Table Header --> */}

                  {/* <!-- Table Body --> */}
                  <tbody>
                    {data.customers.map((customer) => (
                      <tr
                        key={customer._id}
                        className="border-b border-neutral-100 hover:bg-neutral-50"
                      >
                        <TableData value={customer._id} />
                        <TableData value={customer.name} />
                        <TableData value={customer.last_name} />
                        <TableData value={customer.age} />
                        <TableData value={customer.country} />
                        <Button
                          title="View"
                          href={`/customers/detail/${customer._id}`}
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
            href={"/customers/"}
          />
          {/* <!-- END Tickets --> */}
        </div>
      </div>
      {/* <!-- END Page Section --> */}
    </main>
  );
}
