"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Input from "@/app/components/Form/Input";
import Label from "@/app/components/Form/Label";
import Heading from "@/app/components/Heading/Heading";
import { formatFormLabels } from "@/app/utils/formatFormLabels";

export default function SalesDetail() {
  const params = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/sales/detail/" + params.id
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
        title="Sales Details"
        subtitle="Take a look at sales details"
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
                    {Object.entries(data).map(([key, value]) => {                      
                      return (
                        <div className="w-full" key={value}>
                          <Label title={formatFormLabels(key)} />
                          <Input value={value} />
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