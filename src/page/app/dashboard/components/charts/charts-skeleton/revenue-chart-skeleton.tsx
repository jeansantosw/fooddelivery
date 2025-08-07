import { Skeleton } from "@/components/ui/skeleton";

export function RevenueChartSkeleton() {
  return (
    <div className="flex flex-col gap-2.5">
      <Skeleton className="h-10 w-200 " />
      <Skeleton className="h-10 w-200 " />
      <Skeleton className="h-10 w-200 " />
      <Skeleton className="h-10 w-200 " />
      <Skeleton className="h-10 w-200 " />
    </div>
  )
}