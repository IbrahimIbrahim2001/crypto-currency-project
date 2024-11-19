//components
import SkeletomLoadinForSmallScreens from "@/components/skeletomLoadinForSmallScreens";
import SkeletonLoadingForLargeScreens from "@/components/skeletonLoadingForLargeScreens";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function LoadingSkeleton() {
    return (
        <>
            <div className="hidden md:table">
                <SkeletonLoadingForLargeScreens array={array} />
            </div>
            <div className="md:hidden">
                <SkeletomLoadinForSmallScreens array={array} />
            </div>
        </>
    )
}
