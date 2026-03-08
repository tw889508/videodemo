import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ENUMS, MODULES } from "@/lib/schema";
import { X, ImageIcon, Info, Plus, Check } from "lucide-react";
import { useState } from "react";

// ============================================================
// 字段配置 - 内容增强版
// 新增：group 分组、desc 字段说明、preset 预置选项
// ============================================================

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
  desc?: string;
  group?: string;
  presetGroups?: { label: string; options: string }[];
}

const FIELD_CONFIGS: Record<string, FieldDef[]> = {
  metadata: [
    { key: "blueprint_id", label: "蓝图 ID", type: "text", desc: "自动生成的唯一标识符" },
    { key: "name", label: "蓝图名称", type: "text", required: true, placeholder: "如：赛博朋克城市夜景追逐戏-开场" },
    { key: "description", label: "描述", type: "textarea", placeholder: "对该蓝图用途的简要说明" },
    { key: "version", label: "版本号", type: "number", desc: "用于迭代管理" },
    { key: "target_model", label: "目标模型", type: "select-with-desc", options: "target_model", desc: "选择目标 AI 视频生成模型，不同模型支持的参数范围不同" },
    { key: "project_id", label: "项目 ID", type: "text", placeholder: "所属项目标识符，用于多镜头管理" },
  ],
  scene: [
    // 主体基础信息
    { key: "subject_type", label: "主体类型", type: "select-with-desc", options: "subject_type", required: true, group: "主体信息" },
    { key: "subject_count", label: "主体数量", type: "number", group: "主体信息", desc: "画面中同类主体的数量" },
    { key: "subject", label: "核心主体", type: "textarea", required: true, placeholder: "描述画面中的核心主体，如：一位穿着黑色风衣的中年侦探", group: "主体信息", desc: "尽量具体，避免模糊描述" },
    // 主体详细描述
    { key: "subject_age", label: "年龄段", type: "select", options: "subject_age", group: "主体外观", desc: "仅当主体为人物时适用" },
    { key: "subject_gender", label: "性别", type: "select", options: "subject_gender", group: "主体外观" },
    { key: "subject_appearance", label: "面部/外观特征", type: "textarea", placeholder: "如：面容疲惫，三天未刮的胡茬，左眼角有一道旧疤，深邃的棕色眼睛", group: "主体外观", desc: "描述面部特征、肤色、发型等" },
    { key: "subject_clothing", label: "服装/装备", type: "textarea", placeholder: "如：黑色长风衣，内搭深灰色高领毛衣，脚穿磨损的皮靴", group: "主体外观", desc: "描述穿着、配饰、装备等" },
    { key: "subject_body", label: "体态/姿势", type: "text", placeholder: "如：身材高瘦，微微驼背，双手插在风衣口袋里", group: "主体外观", desc: "描述体型、身高、姿态等" },
    { key: "subject_emotion", label: "情感/表情", type: "select-with-desc", options: "subject_emotion", group: "主体外观", desc: "选择预设或自定义描述" },
    // 环境
    { key: "environment", label: "环境/场景", type: "textarea", required: true, placeholder: "如：雨夜的东京新宿歌舞伎町，霓虹招牌倒映在湿润的路面", group: "环境设定", desc: "描述场景的地点、空间和整体氛围" },
    { key: "environment_weather", label: "天气", type: "select", options: "environment_weather", group: "环境设定" },
    { key: "environment_season", label: "季节", type: "select", options: "environment_season", group: "环境设定" },
    { key: "environment_details", label: "环境补充细节", type: "textarea", placeholder: "如：蒸汽从地下通风口升起，远处有警车闪烁的红蓝灯，地面积水反射霓虹灯光", group: "环境设定", desc: "补充环境中的特殊元素、道具、背景细节" },
    // 动作与叙事
    { key: "action", label: "核心动作", type: "textarea", required: true, placeholder: "如：在拥挤的人群中快速穿行（建议只描述一个核心动作）", group: "动作与叙事", desc: "每次只描述一个核心动作，避免复合动作导致混乱" },
    { key: "interaction", label: "交互行为", type: "textarea", placeholder: "如：肩膀撞到一个撑伞的路人，头也不回地继续前进", group: "动作与叙事", desc: "主体与环境或其他角色的交互" },
    { key: "mood", label: "情感基调", type: "select-with-desc", options: "mood", group: "动作与叙事", desc: "场景的整体情感氛围" },
    { key: "narrative_context", label: "叙事背景", type: "textarea", placeholder: "如：他刚刚在一间酒吧里发现了关键线索，但追踪者已经逼近", group: "动作与叙事", desc: "为 AI 提供故事上下文，帮助理解场景意图" },
  ],
  visualStyle: [
    { key: "art_style", label: "艺术风格", type: "select-with-desc", options: "art_style", group: "风格定义", desc: "整体的艺术风格流派" },
    { key: "era_style", label: "年代风格", type: "text", placeholder: "如：1980年代复古、未来主义2077、维多利亚时代", group: "风格定义", desc: "特定年代的视觉风格" },
    { key: "render_engine", label: "渲染引擎", type: "select-with-desc", options: "render_engine", group: "风格定义", desc: "指定渲染引擎可获得特定的 3D 渲染质感" },
    { key: "director_reference", label: "导演参考", type: "text", placeholder: "如：Wes Anderson, Denis Villeneuve, 王家卫", group: "创作参考", desc: "模仿特定导演的视觉语言，比模糊词汇更有效" },
    { key: "film_reference", label: "电影参考", type: "text", placeholder: "如：Blade Runner 2049, 花样年华, Interstellar", group: "创作参考", desc: "模仿特定电影的摄影美学" },
    { key: "camera_reference", label: "设备参考", type: "text", placeholder: "如：Shot on ARRI Alexa Mini LF, Shot on 16mm film", group: "创作参考", desc: "模仿特定摄影设备的画面质感" },
    { key: "color_palette", label: "色彩方案", type: "select-with-desc", options: "color_palette", group: "色彩与质感", desc: "画面的主色调方案" },
    { key: "color_grading", label: "色彩分级", type: "select-with-desc", options: "color_grading", group: "色彩与质感", desc: "色彩分级/调色风格" },
    { key: "texture", label: "画面质感", type: "select-with-desc", options: "texture", group: "色彩与质感", desc: "画面的质感与纹理" },
    { key: "visual_reference_url", label: "参考图 URL", type: "image-url", placeholder: "输入图片 URL 后可预览", group: "色彩与质感", desc: "用于风格参考的图像链接" },
  ],
  cinematography: [
    { key: "shot_type", label: "镜头景别", type: "select-with-desc", options: "shot_type", required: true, group: "镜头设置", desc: "镜头的景别大小，决定画面范围" },
    { key: "camera_angle", label: "拍摄角度", type: "select-with-desc", options: "camera_angle", group: "镜头设置", desc: "摄像机的拍摄角度" },
    { key: "framing", label: "画面构图", type: "select-with-desc", options: "framing", group: "镜头设置", desc: "画面的构图方式" },
    { key: "pov_type", label: "视角类型", type: "select", options: "pov_type", group: "镜头设置" },
    { key: "camera_movement", label: "摄像机运动", type: "select-with-desc", options: "camera_movement", group: "运动控制", desc: "建议仅选一种运动方式，避免复合运动" },
    { key: "movement_speed", label: "运动速度", type: "select", options: "movement_speed", group: "运动控制" },
    { key: "movement_direction", label: "运动方向", type: "select", options: "movement_direction", group: "运动控制", desc: "摄像机运动的具体方向" },
    { key: "camera_shake", label: "画面抖动", type: "select-with-desc", options: "camera_shake", group: "运动控制" },
    { key: "lens_focal_length", label: "镜头焦距", type: "select-with-desc", options: "lens_focal_length", group: "光学参数", desc: "镜头焦距影响视角和透视效果" },
    { key: "depth_of_field", label: "景深", type: "select-with-desc", options: "depth_of_field", group: "光学参数" },
    { key: "focus_target", label: "焦点目标", type: "text", placeholder: "如：主体的眼睛、前景的雨滴", group: "光学参数", desc: "焦点所在的位置或对象" },
    { key: "focus_transition", label: "焦点变化", type: "select-with-desc", options: "focus_transition", group: "光学参数", desc: "焦点的变化方式" },
  ],
  lighting: [
    { key: "time_of_day", label: "时间段", type: "select-with-desc", options: "time_of_day", group: "自然光", desc: "场景的自然光时间段" },
    { key: "key_light_type", label: "主光源类型", type: "select-with-desc", options: "key_light_type", group: "三点布光", desc: "主光源的类型" },
    { key: "key_light_direction", label: "主光源方向", type: "select", options: "key_light_direction", group: "三点布光" },
    { key: "fill_light", label: "辅助光", type: "textarea", placeholder: "如：微弱的蓝色反射光填充暗部，来自左侧墙壁的漫反射", group: "三点布光", desc: "辅助光用于控制阴影深度" },
    { key: "rim_light", label: "轮廓光", type: "textarea", placeholder: "如：来自背后的暖色轮廓光勾勒出发丝轮廓", group: "三点布光", desc: "轮廓光用于勾勒主体边缘" },
    { key: "light_quality", label: "光线质感", type: "select-with-desc", options: "light_quality", group: "光线属性" },
    { key: "color_temperature", label: "色温", type: "select-with-desc", options: "color_temperature", group: "光线属性" },
    { key: "shadow_style", label: "阴影风格", type: "select-with-desc", options: "shadow_style", group: "光线属性" },
    { key: "practical_lights", label: "画面内光源", type: "select-with-desc", options: "practical_lights", group: "环境光效", desc: "画面中可见的实际光源" },
    { key: "atmospheric_effects", label: "大气效果", type: "multi-select-with-desc", options: "atmospheric_effects", group: "环境光效", desc: "大气/环境光效（可多选）" },
  ],
  audio: [
    { key: "ambient_sound", label: "环境音", type: "select-with-desc", options: "ambient_sound", group: "环境声音", desc: "持续的环境背景音" },
    { key: "music_style", label: "音乐风格", type: "select-with-desc", options: "music_style", group: "背景音乐", desc: "背景音乐的风格与情绪" },
    { key: "music_tempo", label: "音乐节奏", type: "select-with-desc", options: "music_tempo", group: "背景音乐" },
    { key: "music_instrument", label: "主要乐器", type: "select", options: "music_instrument", group: "背景音乐", desc: "主导乐器或音色" },
    { key: "audio_mood", label: "音频情绪", type: "select", options: "audio_mood", group: "背景音乐", desc: "整体音频的情绪基调" },
    { key: "sound_effects", label: "关键音效", type: "tags", placeholder: "输入音效后回车添加，如：急促的脚步声、水花飞溅", group: "音效与人声", desc: "与画面动作同步的关键音效" },
    { key: "dialogue", label: "对话", type: "textarea", placeholder: "如：\"我们没有时间了。\"——低沉、急促的男声", group: "音效与人声", desc: "场景中的对话内容，包含语气描述" },
    { key: "voiceover", label: "旁白", type: "textarea", placeholder: "如：沉稳的男性旁白：\"那一夜，一切都改变了。\"", group: "音效与人声", desc: "画外旁白内容与风格" },
  ],
  motion: [
    { key: "subject_motion_speed", label: "主体运动速度", type: "select", options: "movement_speed", group: "速度控制", desc: "画面中主体运动的速度" },
    { key: "camera_motion_speed", label: "摄像机运动速度", type: "select", options: "movement_speed", group: "速度控制" },
    { key: "time_effect", label: "时间效果", type: "select-with-desc", options: "time_effect", group: "时间控制", desc: "特殊的时间效果" },
    { key: "pacing", label: "节奏感", type: "select-with-desc", options: "pacing", group: "时间控制", desc: "场景的内在节奏感" },
    { key: "transition_in", label: "开始过渡", type: "select-with-desc", options: "transition", group: "过渡效果", desc: "镜头开始的过渡方式" },
    { key: "transition_out", label: "结束过渡", type: "select-with-desc", options: "transition", group: "过渡效果", desc: "镜头结束的过渡方式" },
    { key: "rhythm_reference", label: "节奏参考", type: "textarea", placeholder: "如：如同心跳一般，从平静逐渐加速到急促", group: "过渡效果", desc: "用自然语言描述节奏变化" },
  ],
  technical: [
    { key: "resolution", label: "分辨率", type: "select-with-desc", options: "resolution", required: true, group: "输出规格" },
    { key: "aspect_ratio", label: "宽高比", type: "select-with-desc", options: "aspect_ratio", required: true, group: "输出规格" },
    { key: "duration_seconds", label: "时长 (秒)", type: "number", required: true, group: "输出规格", desc: "视频时长，不同模型支持范围不同" },
    { key: "fps", label: "帧率", type: "select-number", options: "fps", group: "输出规格" },
    { key: "seed", label: "随机种子", type: "number", group: "生成控制", desc: "固定种子可复现结果，用于迭代优化" },
    { key: "guidance_scale", label: "引导强度", type: "slider", min: 1, max: 20, step: 0.5, group: "生成控制", desc: "值越高越严格遵循提示词，过高可能导致过拟合" },
    { key: "motion_strength", label: "运动强度", type: "slider", min: 1, max: 10, step: 1, group: "生成控制", desc: "控制画面中运动的幅度" },
    { key: "num_inference_steps", label: "推理步数", type: "number", group: "生成控制", desc: "步数越多质量越高但速度越慢" },
    { key: "input_image_url", label: "输入图像 URL", type: "image-url", placeholder: "输入图片 URL 后可预览（图生视频模式）", group: "输入素材", desc: "图生视频模式的参考图像" },
    { key: "input_video_url", label: "输入视频 URL", type: "text", placeholder: "https://...（视频生视频模式）", group: "输入素材", desc: "视频生视频模式的参考视频" },
  ],
  quality: [
    { key: "negative_prompts", label: "负面提示词", type: "preset-tags", group: "负面约束", desc: "需要避免的元素，点击预置标签快速添加",
      presetGroups: [
        { label: "画质问题", options: "negative_preset_quality" },
        { label: "人体畸变", options: "negative_preset_body" },
        { label: "画面瑕疵", options: "negative_preset_artifact" },
        { label: "运动问题", options: "negative_preset_motion" },
        { label: "风格偏差", options: "negative_preset_style" },
      ],
    },
    { key: "quality_boosters", label: "质量增强词", type: "preset-tags", group: "正向增强", desc: "质量增强关键词，点击预置标签快速添加",
      presetGroups: [
        { label: "分辨率", options: "booster_preset_resolution" },
        { label: "电影感", options: "booster_preset_cinematic" },
        { label: "光影", options: "booster_preset_lighting" },
        { label: "动态", options: "booster_preset_motion" },
        { label: "整体", options: "booster_preset_overall" },
      ],
    },
    { key: "style_consistency", label: "风格一致性", type: "select-with-desc", options: "style_consistency", group: "一致性控制", desc: "与系列其他镜头的风格一致性要求" },
    { key: "character_consistency", label: "角色一致性", type: "select-with-desc", options: "style_consistency", group: "一致性控制", desc: "角色外观跨镜头的一致性要求" },
    { key: "reference_strength", label: "参考强度", type: "slider", min: 0, max: 1, step: 0.05, group: "一致性控制", desc: "参考图像/视频的影响强度 (0-1)" },
  ],
  postProcessing: [
    { key: "upscaling", label: "上采样", type: "select", options: "upscaling", group: "画质增强" },
    { key: "stabilization", label: "画面稳定", type: "switch", group: "画质增强", desc: "是否进行画面稳定处理" },
    { key: "loop", label: "无缝循环", type: "switch", group: "画质增强", desc: "是否生成无缝循环视频" },
    { key: "color_correction", label: "色彩校正", type: "select-with-desc", options: "color_correction", group: "色彩与速度", desc: "后期色彩校正方案" },
    { key: "speed_adjustment", label: "速度调整", type: "slider", min: 0.1, max: 4, step: 0.1, group: "色彩与速度", desc: "播放速度倍率：0.5=半速, 1.0=原速, 2.0=倍速" },
    { key: "output_format", label: "输出格式", type: "select-with-desc", options: "output_format", group: "色彩与速度" },
  ],
};

// ============================================================
// 组件
// ============================================================

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

  // 按 group 分组
  const groups: { label: string; fields: FieldDef[] }[] = [];
  let currentGroup: string | null = null;
  fields.forEach((f) => {
    const g = f.group || "";
    if (g !== currentGroup || groups.length === 0) {
      groups.push({ label: g, fields: [f] });
      currentGroup = g;
    } else {
      groups[groups.length - 1].fields.push(f);
    }
  });

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold">{moduleInfo?.label}</h2>
        <p className="text-sm text-muted-foreground mt-1">{moduleInfo?.desc}</p>
      </div>
      <div className="space-y-6">
        {groups.map((group, gi) => (
          <div key={gi}>
            {group.label && (
              <div className="flex items-center gap-2 mb-3 mt-2">
                <div className="h-px flex-1 bg-border" />
                <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">{group.label}</span>
                <div className="h-px flex-1 bg-border" />
              </div>
            )}
            <div className="space-y-4">
              {group.fields.map((field) => (
                <FieldRenderer
                  key={field.key}
                  field={field}
                  value={data?.[field.key]}
                  onChange={(v) => updateField(field.key, v)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// 字段渲染器
// ============================================================

function FieldLabel({ field }: { field: FieldDef }) {
  return (
    <div className="flex items-center gap-1.5">
      <Label className="text-xs text-muted-foreground">
        {field.label} {field.required && <span className="text-primary">*</span>}
      </Label>
      {field.desc && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Info size={12} className="text-muted-foreground/50 cursor-help" />
          </TooltipTrigger>
          <TooltipContent side="top" className="max-w-xs text-xs">
            {field.desc}
          </TooltipContent>
        </Tooltip>
      )}
    </div>
  );
}

function FieldRenderer({ field, value, onChange }: { field: FieldDef; value: any; onChange: (v: any) => void }) {
  const [tagInput, setTagInput] = useState("");

  switch (field.type) {
    case "text":
      return (
        <div className="space-y-1.5">
          <FieldLabel field={field} />
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
          <FieldLabel field={field} />
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
          <FieldLabel field={field} />
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
          <FieldLabel field={field} />
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

    // 带说明文字的下拉选择
    case "select-with-desc": {
      const options = field.options ? (ENUMS as any)[field.options] || [] : [];
      return (
        <div className="space-y-1.5">
          <FieldLabel field={field} />
          <Select value={value || ""} onValueChange={onChange}>
            <SelectTrigger className="bg-input/50 border-border h-9 text-sm">
              <SelectValue placeholder="请选择..." />
            </SelectTrigger>
            <SelectContent className="max-h-72">
              {options.map((opt: any) => (
                <SelectItem key={opt.value} value={opt.value}>
                  <div className="flex items-baseline gap-2">
                    <span>{opt.label}</span>
                    {opt.desc && <span className="text-[10px] text-muted-foreground">{opt.desc}</span>}
                  </div>
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
          <FieldLabel field={field} />
          <Select value={String(value || "")} onValueChange={(v) => onChange(Number(v))}>
            <SelectTrigger className="bg-input/50 border-border h-9 text-sm">
              <SelectValue placeholder="请选择..." />
            </SelectTrigger>
            <SelectContent>
              {options.map((opt: any) => (
                <SelectItem key={opt.value} value={String(opt.value)}>
                  <div className="flex items-baseline gap-2">
                    <span>{opt.label}</span>
                    {opt.desc && <span className="text-[10px] text-muted-foreground">{opt.desc}</span>}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      );
    }

    // 带说明的多选
    case "multi-select-with-desc": {
      const options = field.options ? (ENUMS as any)[field.options] || [] : [];
      const selected: string[] = value || [];
      return (
        <div className="space-y-1.5">
          <FieldLabel field={field} />
          <div className="flex flex-wrap gap-1.5">
            {options.map((opt: any) => {
              const isSelected = selected.includes(opt.value);
              return (
                <Tooltip key={opt.value}>
                  <TooltipTrigger asChild>
                    <Badge
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
                      {isSelected && <Check size={10} className="mr-0.5" />}
                      {opt.label}
                    </Badge>
                  </TooltipTrigger>
                  {opt.desc && (
                    <TooltipContent side="top" className="text-xs max-w-xs">
                      {opt.desc}
                    </TooltipContent>
                  )}
                </Tooltip>
              );
            })}
          </div>
        </div>
      );
    }

    case "multi-select": {
      const options = field.options ? (ENUMS as any)[field.options] || [] : [];
      const selected: string[] = value || [];
      return (
        <div className="space-y-1.5">
          <FieldLabel field={field} />
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
                  {isSelected && <Check size={10} className="mr-0.5" />}
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
          <FieldLabel field={field} />
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

    // 带预置推荐的标签输入（用于质量控制模块）
    case "preset-tags": {
      const tags: string[] = value || [];
      const presetGroups = field.presetGroups || [];
      return (
        <div className="space-y-2">
          <FieldLabel field={field} />
          {/* 已选标签 */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
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
          )}
          {/* 预置推荐分组 */}
          <div className="space-y-2 rounded-md border border-border/50 p-3 bg-card/30">
            {presetGroups.map((pg) => {
              const presets = (ENUMS as any)[pg.options] || [];
              return (
                <div key={pg.options}>
                  <span className="text-[10px] text-muted-foreground font-medium">{pg.label}</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {presets.map((p: any) => {
                      const isAdded = tags.includes(p.value);
                      return (
                        <Badge
                          key={p.value}
                          variant={isAdded ? "default" : "outline"}
                          className={`cursor-pointer text-[11px] transition-colors ${
                            isAdded ? "bg-primary/80 text-primary-foreground" : "hover:bg-accent border-dashed"
                          }`}
                          onClick={() => {
                            if (isAdded) {
                              onChange(tags.filter((t) => t !== p.value));
                            } else {
                              onChange([...tags, p.value]);
                            }
                          }}
                        >
                          {isAdded ? <Check size={10} className="mr-0.5" /> : <Plus size={10} className="mr-0.5" />}
                          {p.label}
                        </Badge>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          {/* 自定义输入 */}
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
            placeholder="自定义输入后回车添加"
            className="bg-input/50 border-border h-9 text-sm"
          />
        </div>
      );
    }

    case "image-url": {
      const url = value || "";
      return (
        <div className="space-y-1.5">
          <FieldLabel field={field} />
          <Input
            value={url}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder}
            className="bg-input/50 border-border h-9 text-sm"
          />
          {url && (
            <div className="mt-2 rounded-md border border-border overflow-hidden bg-black/20">
              <img
                src={url}
                alt="参考图预览"
                className="max-h-48 w-auto object-contain mx-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
                }}
              />
              <div className="hidden flex items-center justify-center gap-2 py-6 text-muted-foreground text-xs">
                <ImageIcon size={16} /> 图片加载失败
              </div>
            </div>
          )}
        </div>
      );
    }

    case "switch":
      return (
        <div className="flex items-center justify-between py-1">
          <FieldLabel field={field} />
          <Switch checked={!!value} onCheckedChange={onChange} />
        </div>
      );

    case "slider":
      return (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <FieldLabel field={field} />
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
