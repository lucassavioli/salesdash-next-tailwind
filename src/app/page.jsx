import Heading from "@/app/components/Heading/Heading";
import StatusItem from "@/app/components/StatusItem/StatusItem";
import TableTitle from "@/app/components/TableTitle/TableTitle";
import TableHeader from "@/app/components/TableHeader/TableHeader";
import TableData from "@/app/components/TableData/TableData";
import {
  IconCurrencyDollar,
  IconLocationDollar,
  IconShoppingCartDollar,
  IconTicket,
} from "@tabler/icons-react";

export default function Dashboard() {
  return (
    <main id="page-content" className="flex max-w-full flex-auto flex-col">
      {/* <!-- Page Heading --> */}
      <Heading title="Dashboard" subtitle="Welcome to your dashboard" />
      {/* <!-- END Page Heading --> */}

      {/* <!-- Page Section --> */}
      <div className="container mx-auto p-4 lg:p-8 xl:max-w-7xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* <!-- Quick Statistics --> */}
          <StatusItem
            value="3"
            label="Sales"
            description="Total number of sales"
          >
            <IconCurrencyDollar size={26} />
          </StatusItem>
          <StatusItem
            value="3"
            label="Locations"
            icon="none"
            description="Total number of locations"
          >
            <IconLocationDollar size={26} />
          </StatusItem>
          <StatusItem
            value="3"
            label="Sales"
            icon="none"
            description="Total number of sales online"
          >
            <IconShoppingCartDollar size={26} />
          </StatusItem>
          <StatusItem
            value="3"
            label="Sales"
            icon="none"
            description="Using coupon"
          >
            <IconTicket size={26} />
          </StatusItem>
          {/* <!-- END Quick Statistics --> */}

          {/* <!-- Table Title --> */}
          <div className="flex flex-col rounded-lg border bg-white sm:col-span-2 lg:col-span-4">
            <div className="flex flex-col items-center justify-between gap-4 border-b border-neutral-100 p-5 text-center sm:flex-row sm:text-start">
              <TableTitle
                title="Recent Sales"
                description="All open tickets"
                btnName="View All"
              />
            </div>
            <div className="p-5">
              {/* <!-- Responsive Table Container --> */}
              <div className="min-w-full overflow-x-auto rounded">
                {/* <!-- Alternate Responsive Table --> */}
                <table className="min-w-full align-middle text-sm">
                  {/* <!-- Table Header --> */}
                  <thead>
                    <tr className="border-b-2 border-neutral-100">
                      <TableHeader title="Ticket ID" />
                      <TableHeader title="Date" />
                      <TableHeader title="Customer" />
                      <TableHeader title="Subject" />
                      <TableHeader title="Status" />
                    </tr>
                  </thead>
                  {/* <!-- END Table Header --> */}

                  {/* <!-- Table Body --> */}
                  <tbody>
                    <tr className="border-b border-neutral-100 hover:bg-neutral-50">
                      <TableData value="1" />
                      <TableData value="23/09/2022" />
                      <TableData value="John Doe" />
                      <TableData value="Lorem ipsum dolor sit amet" />
                      <TableData value="Open" />                      
                    </tr>
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
