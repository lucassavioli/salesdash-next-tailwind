"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Input from "@/app/components/Form/Input";
import Label from "@/app/components/Form/Label";
import Heading from "@/app/components/Heading/Heading";

export default function CustomerDetail() {
  const params = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/customers/detail/" + params.id
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
      <Heading
        title="Customer Details"
        subtitle="Take a look at customer details"
      />
      {/* <!-- END Page Heading --> */}

      {/* <!-- Page Section --> */}
      <div className="container mx-auto p-4 lg:p-8 xl:max-w-7xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* <!-- Table Title --> */}
          <div className="flex flex-col rounded-lg border bg-white sm:col-span-2 lg:col-span-4">
            <div className="p-5">
              {/* <!-- Responsive Table Container --> */}
              <div className="min-w-full overflow-x-auto rounded">
                {/* <!-- Alternate Responsive Table --> */}
                <div className="p-16">
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    {Object.keys(data).map((key, index) => {
                      return (
                        <div className="w-full" key={index}>
                          <Label title={key} />
                          <Input value={data[key]} />
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* <!-- END Alternate Responsive Table --> */}
              </div>
              {/* <!-- END Responsive Table Container --> */}
            </div>
          </div>
          {/* <!-- END Tickets --> */}
        </div>
      </div>
      {/* <!-- END Page Section --> */}
    </main>
  );
}
