import Image from "next/image";
export default function CoinImage({ coinImage }: { coinImage: string }) {
    return (
        <Image src={coinImage} alt={"coin image"} width={35} height={35} />
    )
}
