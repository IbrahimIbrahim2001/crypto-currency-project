//components
import SkeletonLoadingForLargeScreens from "@/components/skeletonLoadingForLargeScreens";

const array = [1, 2, 3, 4, 5];

export default function LoadingSkeleton() {
    return (
        <>
            <SkeletonLoadingForLargeScreens array={array} />
            {/* must be a component for xs screens */}
        </>
    )
}
