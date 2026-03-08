import { ScrollArea } from "@/components/ui/scroll-area";
import type { VideoBlueprint } from "@/lib/schema";

interface Props {
  blueprint: VideoBlueprint;
}

export function JsonPreview({ blueprint }: Props) {
  const json = JSON.stringify(blueprint, null, 2);

  return (
    <div className="h-full flex flex-col">
      <div className="h-10 border-b border-border flex items-center px-4 shrink-0">
        <span className="text-xs font-semibold text-muted-foreground tracking-wide">JSON 预览</span>
      </div>
      <ScrollArea className="flex-1">
        <pre className="p-4 text-xs font-mono text-foreground/80 leading-relaxed whitespace-pre-wrap break-all">
          {json}
        </pre>
      </ScrollArea>
    </div>
  );
}
