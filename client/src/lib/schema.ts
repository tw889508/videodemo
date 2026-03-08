// AI 视频生成蓝图 - 完整数据结构定义

export interface VideoBlueprint {
  metadata: Metadata;
  scene: SceneDescription;
  visualStyle: VisualStyle;
  cinematography: Cinematography;
  lighting: Lighting;
  audio: AudioDesign;
  motion: MotionPacing;
  technical: TechnicalParameters;
  quality: QualityControl;
  postProcessing: PostProcessing;
}

export interface Metadata {
  blueprint_id: string;
  name: string;
  description: string;
  version: number;
  created_at: string;
  target_model: string;
  project_id: string;
}

export interface SceneDescription {
  subject_type: string;
  subject: string;
  subject_details: string;
  subject_emotion: string;
  environment: string;
  environment_details: string;
  action: string;
  interaction: string;
  mood: string;
  narrative_context: string;
}

export interface VisualStyle {
  art_style: string;
  era_style: string;
  director_reference: string;
  film_reference: string;
  camera_reference: string;
  color_palette: string;
  color_grading: string;
  texture: string;
  visual_reference_url: string;
}

export interface Cinematography {
  shot_type: string;
  camera_angle: string;
  framing: string;
  camera_movement: string;
  movement_speed: string;
  movement_direction: string;
  lens_focal_length: string;
  depth_of_field: string;
  focus_target: string;
  focus_transition: string;
  camera_shake: string;
  pov_type: string;
}

export interface Lighting {
  time_of_day: string;
  key_light_type: string;
  key_light_direction: string;
  fill_light: string;
  rim_light: string;
  light_quality: string;
  color_temperature: string;
  practical_lights: string;
  atmospheric_effects: string[];
  shadow_style: string;
}

export interface AudioDesign {
  ambient_sound: string;
  music_style: string;
  music_tempo: string;
  sound_effects: string[];
  dialogue: string;
  voiceover: string;
  audio_mood: string;
}

export interface MotionPacing {
  subject_motion_speed: string;
  camera_motion_speed: string;
  time_effect: string;
  pacing: string;
  transition_in: string;
  transition_out: string;
  rhythm_reference: string;
}

export interface TechnicalParameters {
  resolution: string;
  aspect_ratio: string;
  duration_seconds: number;
  fps: number;
  seed: number;
  guidance_scale: number;
  motion_strength: number;
  num_inference_steps: number;
  input_image_url: string;
  input_video_url: string;
}

export interface QualityControl {
  negative_prompts: string[];
  quality_boosters: string[];
  style_consistency: string;
  character_consistency: string;
  reference_strength: number;
}

export interface PostProcessing {
  upscaling: string;
  stabilization: boolean;
  loop: boolean;
  color_correction: string;
  speed_adjustment: number;
  output_format: string;
}

// 枚举选项定义
export const ENUMS = {
  target_model: [
    { value: "Sora_2_Pro", label: "Sora 2 Pro" },
    { value: "Runway_Gen4", label: "Runway Gen-4" },
    { value: "Runway_Gen4_Turbo", label: "Runway Gen-4 Turbo" },
    { value: "Runway_Gen4.5", label: "Runway Gen-4.5" },
    { value: "Kling_3_Pro", label: "Kling 3 Pro" },
    { value: "Luma_Ray2", label: "Luma Ray 2" },
    { value: "Luma_Ray2_Flash", label: "Luma Ray 2 Flash" },
    { value: "Veo_3.1", label: "Veo 3.1" },
    { value: "Hailuo_2.3_Pro", label: "Hailuo 2.3 Pro" },
    { value: "Wan_2.2", label: "Wan 2.2" },
    { value: "PixVerse_v5.5", label: "PixVerse v5.5" },
    { value: "Seedance_1.5_Pro", label: "Seedance 1.5 Pro" },
    { value: "Vidu_Q3", label: "Vidu Q3" },
    { value: "Generic", label: "通用模式" },
  ],
  subject_type: [
    { value: "Human", label: "人物" },
    { value: "Animal", label: "动物" },
    { value: "Object", label: "物体/产品" },
    { value: "Vehicle", label: "交通工具" },
    { value: "Architecture", label: "建筑/空间" },
    { value: "Landscape", label: "自然风景" },
    { value: "Abstract", label: "抽象概念" },
    { value: "Creature", label: "虚构生物" },
    { value: "Text_Graphics", label: "文字/图形" },
    { value: "Multiple", label: "多主体" },
  ],
  mood: [
    { value: "紧张", label: "紧张 Tense" },
    { value: "悬疑", label: "悬疑 Mysterious" },
    { value: "浪漫", label: "浪漫 Romantic" },
    { value: "孤独", label: "孤独 Lonely" },
    { value: "欢快", label: "欢快 Joyful" },
    { value: "史诗", label: "史诗 Epic" },
    { value: "恐怖", label: "恐怖 Horror" },
    { value: "宁静", label: "宁静 Serene" },
    { value: "忧郁", label: "忧郁 Melancholic" },
    { value: "愤怒", label: "愤怒 Angry" },
    { value: "梦幻", label: "梦幻 Dreamy" },
    { value: "荒诞", label: "荒诞 Absurd" },
    { value: "温暖", label: "温暖 Warm" },
    { value: "压抑", label: "压抑 Oppressive" },
    { value: "震撼", label: "震撼 Awe-inspiring" },
  ],
  art_style: [
    { value: "写实", label: "写实 Photorealistic" },
    { value: "超写实", label: "超写实 Hyperrealistic" },
    { value: "赛博朋克", label: "赛博朋克 Cyberpunk" },
    { value: "蒸汽朋克", label: "蒸汽朋克 Steampunk" },
    { value: "水墨画", label: "水墨画 Ink Wash" },
    { value: "吉卜力", label: "吉卜力 Studio Ghibli" },
    { value: "迪士尼3D", label: "迪士尼3D Disney Pixar" },
    { value: "日式动漫", label: "日式动漫 Anime" },
    { value: "油画", label: "油画 Oil Painting" },
    { value: "水彩", label: "水彩 Watercolor" },
    { value: "极简主义", label: "极简主义 Minimalist" },
    { value: "波普艺术", label: "波普艺术 Pop Art" },
    { value: "哥特", label: "哥特 Gothic" },
    { value: "复古胶片", label: "复古胶片 Vintage Film" },
    { value: "霓虹黑暗", label: "霓虹黑暗 Neon Noir" },
    { value: "超现实主义", label: "超现实主义 Surrealism" },
    { value: "纪录片", label: "纪录片 Documentary" },
    { value: "商业广告", label: "商业广告 Commercial" },
    { value: "MV风格", label: "MV风格 Music Video" },
    { value: "Vlog", label: "Vlog" },
  ],
  shot_type: [
    { value: "大远景", label: "大远景 Extreme Wide" },
    { value: "远景", label: "远景 Wide Shot" },
    { value: "全景", label: "全景 Full Shot" },
    { value: "中远景", label: "中远景 Medium Wide" },
    { value: "中景", label: "中景 Medium Shot" },
    { value: "中近景", label: "中近景 Medium Close-up" },
    { value: "近景", label: "近景 Close-up" },
    { value: "大特写", label: "大特写 Extreme Close-up" },
    { value: "插入镜头", label: "插入镜头 Insert Shot" },
    { value: "双人镜头", label: "双人镜头 Two Shot" },
    { value: "群像镜头", label: "群像镜头 Group Shot" },
  ],
  camera_angle: [
    { value: "鸟瞰", label: "鸟瞰 Bird's Eye" },
    { value: "高角度", label: "高角度 High Angle" },
    { value: "平视", label: "平视 Eye Level" },
    { value: "低角度", label: "低角度 Low Angle" },
    { value: "蚁视", label: "蚁视 Worm's Eye" },
    { value: "荷兰角", label: "荷兰角 Dutch Angle" },
    { value: "过肩", label: "过肩 Over-the-Shoulder" },
    { value: "主观视角", label: "主观视角 POV" },
  ],
  framing: [
    { value: "三分法", label: "三分法 Rule of Thirds" },
    { value: "中心构图", label: "中心构图 Center" },
    { value: "对称构图", label: "对称构图 Symmetrical" },
    { value: "框中框", label: "框中框 Frame within Frame" },
    { value: "引导线", label: "引导线 Leading Lines" },
    { value: "前景遮挡", label: "前景遮挡 Foreground" },
    { value: "负空间", label: "负空间 Negative Space" },
    { value: "紧凑构图", label: "紧凑构图 Tight" },
  ],
  camera_movement: [
    { value: "静态", label: "静态 Static" },
    { value: "推", label: "推 Push In" },
    { value: "拉", label: "拉 Pull Out" },
    { value: "水平平移", label: "水平平移 Pan" },
    { value: "垂直摇移", label: "垂直摇移 Tilt" },
    { value: "轨道环绕", label: "轨道环绕 Orbit" },
    { value: "跟踪", label: "跟踪 Tracking" },
    { value: "手持", label: "手持 Handheld" },
    { value: "稳定器", label: "稳定器 Steadicam" },
    { value: "升降", label: "升降 Crane" },
    { value: "无人机", label: "无人机 Drone" },
    { value: "变焦", label: "变焦 Zoom" },
    { value: "横移", label: "横移 Truck" },
    { value: "旋转", label: "旋转 Roll" },
    { value: "一镜到底", label: "一镜到底 Oner" },
  ],
  movement_speed: [
    { value: "极慢", label: "极慢" },
    { value: "慢", label: "慢" },
    { value: "中等", label: "中等" },
    { value: "快", label: "快" },
    { value: "极快", label: "极快" },
  ],
  lens_focal_length: [
    { value: "14mm", label: "14mm 超广角" },
    { value: "24mm", label: "24mm 广角" },
    { value: "35mm", label: "35mm 小广角" },
    { value: "50mm", label: "50mm 标准" },
    { value: "85mm", label: "85mm 中长焦" },
    { value: "135mm", label: "135mm 长焦" },
    { value: "200mm+", label: "200mm+ 超长焦" },
    { value: "Macro", label: "微距 Macro" },
    { value: "Fisheye", label: "鱼眼 Fisheye" },
    { value: "Tilt-Shift", label: "移轴 Tilt-Shift" },
    { value: "Anamorphic", label: "变形宽银幕 Anamorphic" },
  ],
  depth_of_field: [
    { value: "浅景深", label: "浅景深 Shallow" },
    { value: "中等景深", label: "中等景深 Medium" },
    { value: "深景深", label: "深景深 Deep" },
  ],
  camera_shake: [
    { value: "无", label: "无" },
    { value: "轻微", label: "轻微" },
    { value: "中等", label: "中等" },
    { value: "强烈", label: "强烈" },
  ],
  pov_type: [
    { value: "第三人称", label: "第三人称" },
    { value: "第一人称", label: "第一人称 POV" },
    { value: "上帝视角", label: "上帝视角" },
  ],
  time_of_day: [
    { value: "黎明", label: "黎明 Dawn" },
    { value: "日出", label: "日出 Sunrise" },
    { value: "金色时刻", label: "金色时刻 Golden Hour" },
    { value: "上午", label: "上午 Morning" },
    { value: "正午", label: "正午 Noon" },
    { value: "下午", label: "下午 Afternoon" },
    { value: "日落", label: "日落 Sunset" },
    { value: "蓝色时刻", label: "蓝色时刻 Blue Hour" },
    { value: "黄昏", label: "黄昏 Dusk" },
    { value: "夜晚", label: "夜晚 Night" },
    { value: "午夜", label: "午夜 Midnight" },
    { value: "阴天", label: "阴天 Overcast" },
  ],
  key_light_direction: [
    { value: "正面", label: "正面" },
    { value: "侧面45°", label: "侧面 45°" },
    { value: "侧面90°", label: "侧面 90°" },
    { value: "背面", label: "背面" },
    { value: "顶部", label: "顶部" },
    { value: "底部", label: "底部" },
  ],
  light_quality: [
    { value: "柔光", label: "柔光 Soft" },
    { value: "硬光", label: "硬光 Hard" },
    { value: "漫射光", label: "漫射光 Diffused" },
  ],
  color_temperature: [
    { value: "极暖", label: "极暖 2700K" },
    { value: "暖", label: "暖 3500K" },
    { value: "中性", label: "中性 5000K" },
    { value: "冷", label: "冷 6500K" },
    { value: "极冷", label: "极冷 8000K+" },
  ],
  atmospheric_effects: [
    { value: "体积光", label: "体积光 God Rays" },
    { value: "薄雾", label: "薄雾 Mist" },
    { value: "浓雾", label: "浓雾 Heavy Fog" },
    { value: "烟尘", label: "烟尘 Smoke" },
    { value: "雨中光线", label: "雨中光线" },
    { value: "镜头光晕", label: "镜头光晕 Lens Flare" },
    { value: "光斑", label: "光斑 Bokeh" },
    { value: "霓虹反射", label: "霓虹反射 Neon" },
    { value: "火光", label: "火光 Firelight" },
    { value: "闪电", label: "闪电 Lightning" },
    { value: "极光", label: "极光 Aurora" },
    { value: "水下焦散", label: "水下焦散 Caustics" },
  ],
  shadow_style: [
    { value: "柔和渐变", label: "柔和渐变" },
    { value: "锐利边缘", label: "锐利边缘" },
    { value: "明暗对比", label: "戏剧性明暗对比 Chiaroscuro" },
  ],
  music_tempo: [
    { value: "极慢", label: "极慢 Largo" },
    { value: "慢", label: "慢 Adagio" },
    { value: "中等", label: "中等 Moderato" },
    { value: "快", label: "快 Allegro" },
    { value: "极快", label: "极快 Presto" },
  ],
  time_effect: [
    { value: "正常速度", label: "正常速度" },
    { value: "慢动作", label: "慢动作 Slow Motion" },
    { value: "超级慢动作", label: "超级慢动作 Super Slow Mo" },
    { value: "延时摄影", label: "延时摄影 Time-lapse" },
    { value: "超延时", label: "超延时 Hyperlapse" },
    { value: "定格", label: "定格 Freeze Frame" },
    { value: "速度渐变", label: "速度渐变 Speed Ramp" },
    { value: "倒放", label: "倒放 Reverse" },
  ],
  pacing: [
    { value: "沉思的", label: "沉思的 Contemplative" },
    { value: "平稳的", label: "平稳的 Steady" },
    { value: "紧凑的", label: "紧凑的 Tight" },
    { value: "充满活力的", label: "充满活力的 Energetic" },
    { value: "狂暴的", label: "狂暴的 Frantic" },
  ],
  transition: [
    { value: "无", label: "无 Hard Cut" },
    { value: "淡入淡出", label: "淡入/淡出 Fade" },
    { value: "溶解", label: "溶解 Dissolve" },
    { value: "划变", label: "划变 Wipe" },
    { value: "虹膜", label: "虹膜 Iris" },
    { value: "模糊过渡", label: "模糊过渡 Blur" },
    { value: "闪白", label: "闪白 Flash" },
    { value: "闪黑", label: "闪黑 Blackout" },
    { value: "运动模糊", label: "运动模糊 Motion Blur" },
    { value: "匹配剪辑", label: "匹配剪辑 Match Cut" },
  ],
  resolution: [
    { value: "360p", label: "360p" },
    { value: "480p", label: "480p" },
    { value: "540p", label: "540p" },
    { value: "720p", label: "720p" },
    { value: "768p", label: "768p" },
    { value: "1080p", label: "1080p" },
    { value: "4K", label: "4K" },
  ],
  aspect_ratio: [
    { value: "16:9", label: "16:9 横屏" },
    { value: "9:16", label: "9:16 竖屏" },
    { value: "1:1", label: "1:1 方形" },
    { value: "4:3", label: "4:3 传统" },
    { value: "3:4", label: "3:4 竖版" },
    { value: "21:9", label: "21:9 宽银幕" },
    { value: "3:2", label: "3:2 摄影" },
  ],
  fps: [
    { value: 24, label: "24 fps 电影" },
    { value: 30, label: "30 fps 标准" },
    { value: 60, label: "60 fps 流畅" },
  ],
  style_consistency: [
    { value: "严格一致", label: "严格一致" },
    { value: "大致一致", label: "大致一致" },
    { value: "允许变化", label: "允许变化" },
  ],
  upscaling: [
    { value: "None", label: "不上采样" },
    { value: "2x", label: "2x" },
    { value: "4K", label: "4K" },
  ],
  output_format: [
    { value: "MP4", label: "MP4" },
    { value: "MOV", label: "MOV" },
    { value: "WebM", label: "WebM" },
    { value: "GIF", label: "GIF" },
  ],
};

// 模块配置
export const MODULES = [
  { key: "metadata", label: "元数据", icon: "FileText", desc: "蓝图身份与项目信息" },
  { key: "scene", label: "场景描述", icon: "Clapperboard", desc: "主体、环境与叙事" },
  { key: "visualStyle", label: "视觉风格", icon: "Palette", desc: "艺术风格与色彩方案" },
  { key: "cinematography", label: "摄影控制", icon: "Camera", desc: "镜头语言与构图" },
  { key: "lighting", label: "光照系统", icon: "Sun", desc: "布光方案与氛围" },
  { key: "audio", label: "音频设计", icon: "Music", desc: "声音与音乐规划" },
  { key: "motion", label: "运动与节奏", icon: "Zap", desc: "动态与时间控制" },
  { key: "technical", label: "技术参数", icon: "Settings", desc: "模型级生成参数" },
  { key: "quality", label: "质量控制", icon: "Shield", desc: "增强与约束指令" },
  { key: "postProcessing", label: "后期处理", icon: "Wand2", desc: "上采样与后处理" },
] as const;

// 默认蓝图数据
export function createDefaultBlueprint(): VideoBlueprint {
  return {
    metadata: {
      blueprint_id: `vid-bp-${Date.now()}`,
      name: "",
      description: "",
      version: 1,
      created_at: new Date().toISOString(),
      target_model: "Generic",
      project_id: "",
    },
    scene: {
      subject_type: "",
      subject: "",
      subject_details: "",
      subject_emotion: "",
      environment: "",
      environment_details: "",
      action: "",
      interaction: "",
      mood: "",
      narrative_context: "",
    },
    visualStyle: {
      art_style: "",
      era_style: "",
      director_reference: "",
      film_reference: "",
      camera_reference: "",
      color_palette: "",
      color_grading: "",
      texture: "",
      visual_reference_url: "",
    },
    cinematography: {
      shot_type: "",
      camera_angle: "",
      framing: "",
      camera_movement: "",
      movement_speed: "",
      movement_direction: "",
      lens_focal_length: "",
      depth_of_field: "",
      focus_target: "",
      focus_transition: "",
      camera_shake: "",
      pov_type: "",
    },
    lighting: {
      time_of_day: "",
      key_light_type: "",
      key_light_direction: "",
      fill_light: "",
      rim_light: "",
      light_quality: "",
      color_temperature: "",
      practical_lights: "",
      atmospheric_effects: [],
      shadow_style: "",
    },
    audio: {
      ambient_sound: "",
      music_style: "",
      music_tempo: "",
      sound_effects: [],
      dialogue: "",
      voiceover: "",
      audio_mood: "",
    },
    motion: {
      subject_motion_speed: "",
      camera_motion_speed: "",
      time_effect: "",
      pacing: "",
      transition_in: "",
      transition_out: "",
      rhythm_reference: "",
    },
    technical: {
      resolution: "1080p",
      aspect_ratio: "16:9",
      duration_seconds: 5,
      fps: 24,
      seed: 0,
      guidance_scale: 7.5,
      motion_strength: 5,
      num_inference_steps: 50,
      input_image_url: "",
      input_video_url: "",
    },
    quality: {
      negative_prompts: [],
      quality_boosters: [],
      style_consistency: "大致一致",
      character_consistency: "大致一致",
      reference_strength: 0.8,
    },
    postProcessing: {
      upscaling: "None",
      stabilization: false,
      loop: false,
      color_correction: "",
      speed_adjustment: 1.0,
      output_format: "MP4",
    },
  };
}
