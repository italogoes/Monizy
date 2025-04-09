import { AppSidebar } from "@/components/app-sidebar"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { CategoryChart } from "@/components/category-chart";
import { CompareChart } from "@/components/compare-chart";
import { TransfersTable } from "@/components/transfers-table";

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />

              <div className="w-full flex px-6 gap-6">
                <CategoryChart/>
                <CompareChart/>
              </div>

              <TransfersTable/>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
