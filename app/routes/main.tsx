import ParentSize from "@visx/responsive/lib/components/ParentSize";
import ZoomLayout from "~/components/ZoomLayout";

export default function MainPage() {
  return (
    <ParentSize>
      {({ height, width }) => <ZoomLayout height={height} width={width} />}
    </ParentSize>
  );
}
