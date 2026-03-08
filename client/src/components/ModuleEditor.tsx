import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { ENUMS, MODULES } from "@/lib/schema";
import { X } from "lucide-react";
import { useState } from "react";

// 字段配置：每个模块有哪些字段、类型、标签
const FIELD_CONFIGS: Record<string, FieldDef[]> = {
  metadata: [
    { key: "blueprint_id", label: "蓝图 ID", type: "text" },
    { key: "name", label: "蓝图名称", type: "text", required: true },
    { key: "description", label: "描述", type: "textarea" },
    { key: "version", label: "版本号", type: "number" },
    { key: "target_model", label: "目标模型", type: "select", options: "target_model" },
    { key: "project_id", label: "项目 ID", type: "text" },
  ],
  scene: [
    { key: "subject_type", label: "主体类型", type: "select", options: "subject_type", required: true },
    { key: "subject", label: "核心主体", type: "text", required: true, placeholder: "如：一位穿着黑色风衣的中年侦探" },
    { key: "subject_details", label: "主体细节", type: "textarea", placeholder: "外观、服装、体态、材质等详细描述" },
    { key: "subject_emotion", label: "主体情感", type: "text", placeholder: "如：眼神中透着警惕与疲倦" },
    { key: "environment", label: "环境/场景", type: "text", required: true, placeholder: "如：雨夜的东京新宿歌舞伎町" },
    { key: "environment_details", label: "环境细节", type: "textarea", placeholder: "天气、季节、特殊元素等" },
    { key: "action", label: "核心动作", type: "text", required: true, placeholder: "建议只描述一个核心动作" },
    { key: "interaction", label: "交互行为", type: "text", placeholder: "主体与环境或其他角色的交互" },
    { key: "mood", label: "情感基调", type: "select", options: "mood" },
    { key: "narrative_context", label: "叙事背景", type: "textarea", placeholder: "故事上下文，帮助 AI 理解场景" },
  ],
  visualStyle: [
    { key: "art_style", label: "艺术风格", type: "select", options: "art_style" },
    { key: "era_style", label: "年代风格", type: "text", placeholder: "如：1980年代复古" },
    { key: "director_reference", label: "导演参考", type: "text", placeholder: "如：Wes Anderson, Denis Villeneuve" },
    { key: "film_reference", label: "电影参考", type: "text", placeholder: "如：Blade Runner 2049" },
    { key: "camera_reference", label: "设备参考", type: "text", placeholder: "如：Shot on ARRI Alexa" },
    { key: "color_palette", label: "色彩方案", type: "text", placeholder: "如：青橙对比 (Teal and Orange)" },
    { key: "color_grading", label: "色彩分级", type: "text", placeholder: "如：高对比度冷色调" },
    { key: "texture", label: "画面质感", type: "text", placeholder: "如：35mm 胶片颗粒" },
    { key: "visual_reference_url", label: "参考图 URL", type: "text", placeholder: "https://..." },
  ],
  cinematography: [
    { key: "shot_type", label: "镜头景别", type: "select", options: "shot_type", required: true },
    { key: "camera_angle", label: "拍摄角度", type: "select", options: "camera_angle" },
    { key: "framing", label: "画面构图", type: "select", options: "framing" },
    { key: "camera_movement", label: "摄像机运动", type: "select", options: "camera_movement" },
    { key: "movement_speed", label: "运动速度", type: "select", options: "movement_speed" },
    { key: "movement_direction", label: "运动方向", type: "text", placeholder: "如：从左到右" },
    { key: "lens_focal_length", label: "镜头焦距", type: "select", options: "lens_focal_length" },
    { key: "depth_of_field", label: "景深", type: "select", options: "depth_of_field" },
    { key: "focus_target", label: "焦点目标", type: "text", placeholder: "如：主体的眼睛" },
    { key: "focus_transition", label: "焦点变化", type: "text", placeholder: "如：从前景转焦到背景人物" },
    { key: "camera_shake", label: "画面抖动", type: "select", options: "camera_shake" },
    { key: "pov_type", label: "视角类型", type: "select", options: "pov_type" },
  ],
  lighting: [
    { key: "time_of_day", label: "时间段", type: "select", options: "time_of_day" },
    { key: "key_light_type", label: "主光源类型", type: "text", placeholder: "如：柔和的窗光" },
    { key: "key_light_direction", label: "主光源方向", type: "select", options: "key_light_direction" },
    { key: "fill_light", label: "辅助光", type: "text", placeholder: "如：微弱的蓝色反射光" },
    { key: "rim_light", label: "轮廓光", type: "text", placeholder: "如：来自背后的暖色轮廓光" },
    { key: "light_quality", label: "光线质感", type: "select", options: "light_quality" },
    { key: "color_temperature", label: "色温", type: "select", options: "color_temperature" },
    { key: "practical_lights", label: "画面内光源", type: "text", placeholder: "如：桌上的台灯" },
    { key: "atmospheric_effects", label: "大气效果", type: "multi-select", options: "atmospheric_effects" },
    { key: "shadow_style", label: "阴影风格", type: "select", options: "shadow_style" },
  ],
  audio: [
    { key: "ambient_sound", label: "环境音", type: "textarea", placeholder: "如：雨水打在金属屋顶上的声音" },
    { key: "music_style", label: "音乐风格", type: "text", placeholder: "如：低沉的合成器脉冲" },
    { key: "music_tempo", label: "音乐节奏", type: "select", options: "music_tempo" },
    { key: "sound_effects", label: "关键音效", type: "tags", placeholder: "输入音效后回车添加" },
    { key: "dialogue", label: "对话", type: "textarea", placeholder: "场景中的对话内容" },
    { key: "voiceover", label: "旁白", type: "textarea", placeholder: "画外旁白内容与风格" },
    { key: "audio_mood", label: "音频情绪", type: "text", placeholder: "如：紧张而克制" },
  ],
  motion: [
    { key: "subject_motion_speed", label: "主体运动速度", type: "select", options: "movement_speed" },
    { key: "camera_motion_speed", label: "摄像机运动速度", type: "select", options: "movement_speed" },
    { key: "time_effect", label: "时间效果", type: "select", options: "time_effect" },
    { key: "pacing", label: "节奏感", type: "select", options: "pacing" },
    { key: "transition_in", label: "开始过渡", type: "select", options: "transition" },
    { key: "transition_out", label: "结束过渡", type: "select", options: "transition" },
    { key: "rhythm_reference", label: "节奏参考", type: "text", placeholder: "如：如同心跳一般逐渐加速" },
  ],
  technical: [
    { key: "resolution", label: "分辨率", type: "select", options: "resolution", required: true },
    { key: "aspect_ratio", label: "宽高比", type: "select", options: "aspect_ratio", required: true },
    { key: "duration_seconds", label: "时长 (秒)", type: "number", required: true },
    { key: "fps", label: "帧率", type: "select-number", options: "fps" },
    { key: "seed", label: "随机种子", type: "number" },
    { key: "guidance_scale", label: "引导强度", type: "slider", min: 1, max: 20, step: 0.5 },
    { key: "motion_strength", label: "运动强度", type: "slider", min: 1, max: 10, step: 1 },
    { key: "num_inference_steps", label: "推理步数", type: "number" },
    { key: "input_image_url", label: "输入图像 URL", type: "text", placeholder: "https://..." },
    { key: "input_video_url", label: "输入视频 URL", type: "text", placeholder: "https://..." },
  ],
  quality: [
    { key: "negative_prompts", label: "负面提示词", type: "tags", placeholder: "输入后回车添加，如：模糊、变形" },
    { key: "quality_boosters", label: "质量增强词", type: "tags", placeholder: "输入后回车添加，如：超高清、电影感" },
    { key: "style_consistency", label: "风格一致性", type: "select", options: "style_consistency" },
    { key: "character_consistency", label: "角色一致性", type: "select", options: "style_consistency" },
    { key: "reference_strength", label: "参考强度", type: "slider", min: 0, max: 1, step: 0.05 },
  ],
  postProcessing: [
    { key: "upscaling", label: "上采样", type: "select", options: "upscaling" },
    { key: "stabilization", label: "画面稳定", type: "switch" },
    { key: "loop", label: "无缝循环", type: "switch" },
    { key: "color_correction", label: "色彩校正", type: "text", placeholder: "如：冷色调电影" },
    { key: "speed_adjustment", label: "速度调整", type: "slider", min: 0.1, max: 4, step: 0.1 },
    { key: "output_format", label: "输出格式", type: "select", options: "output_format" },
  ],
};

interface FieldDef {
  key: string;
  label: string;
  type: string;
  options?: string;
  required?: boolean;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
}

interface Props {
  moduleKey: string;
  data: any;
  onChange: (data: any) => void;
}

export function ModuleEditor({ moduleKey, data, onChange }: Props) {
  const fields = FIELD_CONFIGS[moduleKey] || [];
  const moduleInfo = MODULES.find((m) => m.key === moduleKey);

  const updateField = (key: string, value: any) => {
    onChange({ ...data, [key]: value });
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold">{moduleInfo?.label}</h2>
        <p className="text-sm text-muted-foreground mt-1">{moduleInfo?.desc}</p>
      </div>
      <div className="space-y-5">
        {fields.map((field) => (
          <FieldRenderer
            key={field.key}
            field={field}
            value={data?.[field.key]}
            onChange={(v) => updateField(field.key, v)}
          />
        ))}
      </div>
    </div>
  );
}

function FieldRenderer({ field, value, onChange }: { field: FieldDef; value: any; onChange: (v: any) => void }) {
  const [tagInput, setTagInput] = useState("");

  switch (field.type) {
    case "text":
      return (
        <div className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">
            {field.label} {field.required && <span className="text-primary">*</span>}
          </Label>
          <Input
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder}
            className="bg-input/50 border-border h-9 text-sm"
          />
        </div>
      );

    case "textarea":
      return (
        <div className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">
            {field.label} {field.required && <span className="text-primary">*</span>}
          </Label>
          <Textarea
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder}
            className="bg-input/50 border-border text-sm min-h-[72px] resize-y"
          />
        </div>
      );

    case "number":
      return (
        <div className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">
            {field.label} {field.required && <span className="text-primary">*</span>}
          </Label>
          <Input
            type="number"
            value={value ?? ""}
            onChange={(e) => onChange(Number(e.target.value))}
            className="bg-input/50 border-border h-9 text-sm font-mono"
          />
        </div>
      );

    case "select": {
      const options = field.options ? (ENUMS as any)[field.options] || [] : [];
      return (
        <div className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">
            {field.label} {field.required && <span className="text-primary">*</span>}
          </Label>
          <Select value={value || ""} onValueChange={onChange}>
            <SelectTrigger className="bg-input/50 border-border h-9 text-sm">
              <SelectValue placeholder="请选择..." />
            </SelectTrigger>
            <SelectContent>
              {options.map((opt: any) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      );
    }

    case "select-number": {
      const options = field.options ? (ENUMS as any)[field.options] || [] : [];
      return (
        <div className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">{field.label}</Label>
          <Select value={String(value || "")} onValueChange={(v) => onChange(Number(v))}>
            <SelectTrigger className="bg-input/50 border-border h-9 text-sm">
              <SelectValue placeholder="请选择..." />
            </SelectTrigger>
            <SelectContent>
              {options.map((opt: any) => (
                <SelectItem key={opt.value} value={String(opt.value)}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      );
    }

    case "multi-select": {
      const options = field.options ? (ENUMS as any)[field.options] || [] : [];
      const selected: string[] = value || [];
      return (
        <div className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">{field.label}</Label>
          <div className="flex flex-wrap gap-1.5">
            {options.map((opt: any) => {
              const isSelected = selected.includes(opt.value);
              return (
                <Badge
                  key={opt.value}
                  variant={isSelected ? "default" : "outline"}
                  className={`cursor-pointer text-xs transition-colors ${
                    isSelected ? "bg-primary text-primary-foreground" : "hover:bg-accent"
                  }`}
                  onClick={() => {
                    if (isSelected) {
                      onChange(selected.filter((v) => v !== opt.value));
                    } else {
                      onChange([...selected, opt.value]);
                    }
                  }}
                >
                  {opt.label}
                </Badge>
              );
            })}
          </div>
        </div>
      );
    }

    case "tags": {
      const tags: string[] = value || [];
      return (
        <div className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">{field.label}</Label>
          <div className="flex flex-wrap gap-1.5 mb-2">
            {tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="text-xs gap-1 pr-1">
                {tag}
                <button
                  onClick={() => onChange(tags.filter((_, idx) => idx !== i))}
                  className="hover:text-destructive"
                >
                  <X size={12} />
                </button>
              </Badge>
            ))}
          </div>
          <Input
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && tagInput.trim()) {
                e.preventDefault();
                onChange([...tags, tagInput.trim()]);
                setTagInput("");
              }
            }}
            placeholder={field.placeholder}
            className="bg-input/50 border-border h-9 text-sm"
          />
        </div>
      );
    }

    case "switch":
      return (
        <div className="flex items-center justify-between py-1">
          <Label className="text-xs text-muted-foreground">{field.label}</Label>
          <Switch checked={!!value} onCheckedChange={onChange} />
        </div>
      );

    case "slider":
      return (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-xs text-muted-foreground">{field.label}</Label>
            <span className="text-xs font-mono text-primary">{value ?? field.min}</span>
          </div>
          <Slider
            value={[value ?? field.min ?? 0]}
            onValueChange={([v]) => onChange(v)}
            min={field.min}
            max={field.max}
            step={field.step}
            className="w-full"
          />
        </div>
      );

    default:
      return null;
  }
}
