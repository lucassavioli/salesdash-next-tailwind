"use client";
import { useState } from "react";
import { useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import options from "@/app/utils/chart-options";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import Heading from "@/app/components/Heading/Heading";
import StatusItem from "@/app/components/StatusItem/StatusItem";
import TableTitle from "@/app/components/TableTitle/TableTitle";
import TableHeader from "@/app/components/TableHeader/TableHeader";
import TableData from "@/app/components/TableData/TableData";
import Button from "@/app/components/UI/Button";
import ChartHeaderWrapper from "@/app/components/ChartHeaderWrapper/ChartHeaderWrapper";
import { IconUsersGroup, IconUsers, IconWorld } from "@tabler/icons-react";

export default function CustomersDashboard() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const chartData = {
    labels: data?.customerCountByAge.map((item) => item.age),
    datasets: [
      {
        label: "",
        data: data?.customerCountByAge.map((item) => item.count),
        backgroundColor: "rgba(243, 232, 255, 1.0)",
      },
    ],
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/customers");
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
      <Heading title="Customers" subtitle="Check out your customers" />
      {/* <!-- END Page Heading --> */}

      {/* <!-- Page Section --> */}
      <div className="container mx-auto p-4 lg:p-8 xl:max-w-7xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* <!-- Quick Statistics --> */}
          <StatusItem
            value={data.totalNumberOfCustomers}
            label="Customers"
            description="Total number of customers"
          >
            <IconUsersGroup size={26} />
          </StatusItem>
          <StatusItem
            value={data.customerCountByGender[1].count}
            label="Male Customers"
            icon="none"
            description="Total number of male customers"
          >
            <IconUsers size={26} />
          </StatusItem>
          <StatusItem
            value={data.customerCountByGender[0].count}
            label="Female Customers"
            icon="none"
            description="Total number of female customers"
          >
            <IconUsers size={26} />
          </StatusItem>
          <StatusItem
            value={data.totalNumberOfCountries}
            label="Countries"
            icon="none"
            description="Where customers are from"
          >
            <IconWorld size={26} />
          </StatusItem>
          {/* <!-- END Quick Statistics --> */}

          <div className="flex flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50/50 active:border-purple-200 lg:col-span-2">
            <ChartHeaderWrapper title="Customers" description="By Age">
              <Bar data={chartData} options={options} />
            </ChartHeaderWrapper>
          </div>

          <div className="flex flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50/50 active:border-purple-200 lg:col-span-2">
            <ChartHeaderWrapper title="Customers" description="By Age">
              <div className="w-auto">
                <Bar data={chartData} options={options} />
              </div>
            </ChartHeaderWrapper>
          </div>

          {/* <!-- Table Title --> */}
          <div className="flex flex-col rounded-lg border bg-white sm:col-span-2 lg:col-span-4">
            <div className="flex flex-col items-center justify-between gap-4 border-b border-neutral-100 p-5 text-center sm:flex-row sm:text-start">
              <TableTitle
                title="Recent Customers"
                description="All recent customers"
              >
                <Button title="View All" href="/customers/1" />
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
                    {data.customerTable.map((customer) => (
                      <tr
                        key={customer._id}
                        className="border-b border-neutral-100 hover:bg-neutral-50"
                      >
                        <TableData value={customer._id} />
                        <TableData value={customer.first_name} />
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
          {/* <!-- END Tickets --> */}
        </div>
      </div>
      {/* <!-- END Page Section --> */}
    </main>
  );
}
