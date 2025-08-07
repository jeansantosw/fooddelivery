import { Skeleton } from "@/components/ui/skeleton";

export function PopularProductsChartSkeleton() {
  return (
    <div className="flex items-center justify-center">
      <Skeleton className="h-54 w-54 rounded-full" />
    </div>
  )
}