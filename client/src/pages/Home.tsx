import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";
import {
  Clapperboard, Palette, Camera, Sun, Music, Zap, Settings, Shield, Wand2,
  Download, Upload, Eye, Copy, ChevronRight, Film
} from "lucide-react";
import { createDefaultBlueprint, MODULES, type VideoBlueprint } from "@/lib/schema";
import { ModuleEditor } from "@/components/ModuleEditor";
import { JsonPreview } from "@/components/JsonPreview";

const ICONS: Record<string, React.ReactNode> = {
  Clapperboard: <Clapperboard size={18} />,
  Palette: <Palette size={18} />,
  Camera: <Camera size={18} />,
  Sun: <Sun size={18} />,
  Music: <Music size={18} />,
  Zap: <Zap size={18} />,
  Settings: <Settings size={18} />,
  Shield: <Shield size={18} />,
  Wand2: <Wand2 size={18} />,
};

export default function Home() {
  const [blueprint, setBlueprint] = useState<VideoBlueprint>(createDefaultBlueprint);
  const [activeModule, setActiveModule] = useState("scene");
  const [showPreview, setShowPreview] = useState(false);

  const updateModule = useCallback((moduleKey: string, data: any) => {
    setBlueprint((prev) => ({ ...prev, [moduleKey]: data }));
  }, []);

  const handleExport = useCallback(() => {
    const json = JSON.stringify(blueprint, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "blueprint.json";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("蓝图已导出");
  }, [blueprint]);

  const handleImport = useCallback(() => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const data = JSON.parse(ev.target?.result as string);
          setBlueprint(data);
          toast.success("蓝图已导入");
        } catch {
          toast.error("文件格式错误");
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }, []);

  const handleCopyJson = useCallback(() => {
    navigator.clipboard.writeText(JSON.stringify(blueprint, null, 2));
    toast.success("JSON 已复制到剪贴板");
  }, [blueprint]);

  const handleReset = useCallback(() => {
    setBlueprint(createDefaultBlueprint());
    toast.success("蓝图已重置");
  }, []);

  // 计算填写进度
  const getModuleProgress = (key: string) => {
    const data = blueprint[key as keyof VideoBlueprint];
    if (!data || typeof data !== "object") return 0;
    const entries = Object.values(data);
    const filled = entries.filter((v) => {
      if (Array.isArray(v)) return v.length > 0;
      if (typeof v === "boolean") return true;
      if (typeof v === "number") return v !== 0;
      return v !== "" && v !== undefined && v !== null;
    }).length;
    return Math.round((filled / entries.length) * 100);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* 顶栏 */}
      <header className="h-12 border-b border-border flex items-center justify-between px-4 shrink-0 bg-card/50">
        <div className="flex items-center gap-2">
          <Film size={20} className="text-primary" />
          <span className="font-semibold text-sm tracking-wide">AI 视频蓝图编辑器</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Button variant="ghost" size="sm" onClick={handleImport} className="text-xs gap-1.5 h-8">
            <Upload size={14} /> 导入
          </Button>
          <Button variant="ghost" size="sm" onClick={handleExport} className="text-xs gap-1.5 h-8">
            <Download size={14} /> 导出
          </Button>
          <Button variant="ghost" size="sm" onClick={handleCopyJson} className="text-xs gap-1.5 h-8">
            <Copy size={14} /> 复制
          </Button>
          <Button
            variant={showPreview ? "default" : "ghost"}
            size="sm"
            onClick={() => setShowPreview(!showPreview)}
            className="text-xs gap-1.5 h-8"
          >
            <Eye size={14} /> 预览
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* 左侧导航 */}
        <nav className="w-56 border-r border-border shrink-0 flex flex-col bg-sidebar">
          <ScrollArea className="flex-1">
            <div className="p-2 space-y-0.5">
              {MODULES.map((m) => {
                const progress = getModuleProgress(m.key);
                const isActive = activeModule === m.key;
                return (
                  <button
                    key={m.key}
                    onClick={() => setActiveModule(m.key)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-md text-left transition-colors text-sm ${
                      isActive
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                    }`}
                  >
                    <span className={isActive ? "text-primary" : "text-muted-foreground"}>
                      {ICONS[m.icon]}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="truncate">{m.label}</span>
                        {progress > 0 && (
                          <span className="text-[10px] text-primary font-mono">{progress}%</span>
                        )}
                      </div>
                      <div className="text-[11px] text-muted-foreground truncate">{m.desc}</div>
                    </div>
                    {isActive && <ChevronRight size={14} className="text-muted-foreground shrink-0" />}
                  </button>
                );
              })}
            </div>
          </ScrollArea>
          <div className="p-3 border-t border-sidebar-border">
            <Button variant="outline" size="sm" className="w-full text-xs" onClick={handleReset}>
              重置蓝图
            </Button>
          </div>
        </nav>

        {/* 主编辑区 */}
        <main className="flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="p-6 max-w-3xl">
              <ModuleEditor
                moduleKey={activeModule}
                data={blueprint[activeModule as keyof VideoBlueprint]}
                onChange={(data) => updateModule(activeModule, data)}
              />
            </div>
          </ScrollArea>
        </main>

        {/* 右侧 JSON 预览 */}
        {showPreview && (
          <aside className="w-96 border-l border-border shrink-0 overflow-hidden">
            <JsonPreview blueprint={blueprint} />
          </aside>
        )}
      </div>
    </div>
  );
}
