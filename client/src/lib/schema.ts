// AI 视频生成蓝图 - 完整数据结构定义（内容增强版）

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
  subject_count: number;
  subject_age: string;
  subject_gender: string;
  subject_appearance: string;
  subject_clothing: string;
  subject_body: string;
  subject_emotion: string;
  environment: string;
  environment_weather: string;
  environment_season: string;
  environment_details: string;
  action: string;
  interaction: string;
  mood: string;
  narrative_context: string;
}

export interface VisualStyle {
  art_style: string;
  era_style: string;
  render_engine: string;
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
  music_instrument: string;
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

// ============================================================
// 枚举选项定义（内容增强版：补充说明文字与更多选项）
// ============================================================

export const ENUMS = {
  target_model: [
    { value: "Sora_2_Pro", label: "Sora 2 Pro", desc: "最长 25 秒，720p/1080p" },
    { value: "Runway_Gen4", label: "Runway Gen-4", desc: "5/10 秒，24fps，多宽高比" },
    { value: "Runway_Gen4_Turbo", label: "Runway Gen-4 Turbo", desc: "更快速度，更低成本" },
    { value: "Runway_Gen4.5", label: "Runway Gen-4.5", desc: "增强质量与一致性" },
    { value: "Kling_3_Pro", label: "Kling 3 Pro", desc: "最高 1080p，3-15 秒" },
    { value: "Luma_Ray2", label: "Luma Ray 2", desc: "540p-4K，5 秒" },
    { value: "Luma_Ray2_Flash", label: "Luma Ray 2 Flash", desc: "更快生成速度" },
    { value: "Veo_3.1", label: "Veo 3.1", desc: "最高 4K，4-8 秒，支持音频" },
    { value: "Hailuo_2.3_Pro", label: "Hailuo 2.3 Pro", desc: "1080p，约 6 秒" },
    { value: "Wan_2.2", label: "Wan 2.2", desc: "480p/720p，开源模型" },
    { value: "PixVerse_v5.5", label: "PixVerse v5.5", desc: "360p-1080p，5 秒" },
    { value: "Seedance_1.5_Pro", label: "Seedance 1.5 Pro", desc: "约 5 秒" },
    { value: "Vidu_Q3", label: "Vidu Q3", desc: "1-16 秒" },
    { value: "Generic", label: "通用模式", desc: "不针对特定模型优化" },
  ],

  // ---- 场景描述 ----
  subject_type: [
    { value: "Human", label: "人物", desc: "叙事、广告、短片" },
    { value: "Animal", label: "动物", desc: "自然纪录片、创意内容" },
    { value: "Object", label: "物体/产品", desc: "产品展示、广告" },
    { value: "Vehicle", label: "交通工具", desc: "汽车广告、动作场景" },
    { value: "Architecture", label: "建筑/空间", desc: "建筑展示、场景建立" },
    { value: "Landscape", label: "自然风景", desc: "风光片、氛围镜头" },
    { value: "Abstract", label: "抽象概念", desc: "艺术创作、MV" },
    { value: "Creature", label: "虚构生物", desc: "奇幻、科幻" },
    { value: "Text_Graphics", label: "文字/图形", desc: "片头、标题卡" },
    { value: "Multiple", label: "多主体", desc: "群戏、复杂场景" },
  ],
  subject_age: [
    { value: "婴儿", label: "婴儿 (0-2岁)" },
    { value: "幼儿", label: "幼儿 (3-6岁)" },
    { value: "儿童", label: "儿童 (7-12岁)" },
    { value: "青少年", label: "青少年 (13-17岁)" },
    { value: "青年", label: "青年 (18-30岁)" },
    { value: "中年", label: "中年 (31-55岁)" },
    { value: "老年", label: "老年 (55岁以上)" },
    { value: "不确定", label: "不确定/不适用" },
  ],
  subject_gender: [
    { value: "男性", label: "男性" },
    { value: "女性", label: "女性" },
    { value: "中性", label: "中性/不确定" },
    { value: "不适用", label: "不适用" },
  ],
  subject_emotion: [
    { value: "平静", label: "平静 Calm" },
    { value: "微笑", label: "微笑 Smiling" },
    { value: "大笑", label: "大笑 Laughing" },
    { value: "悲伤", label: "悲伤 Sad" },
    { value: "哭泣", label: "哭泣 Crying" },
    { value: "愤怒", label: "愤怒 Angry" },
    { value: "恐惧", label: "恐惧 Fearful" },
    { value: "惊讶", label: "惊讶 Surprised" },
    { value: "厌恶", label: "厌恶 Disgusted" },
    { value: "困惑", label: "困惑 Confused" },
    { value: "坚定", label: "坚定 Determined" },
    { value: "疲倦", label: "疲倦 Exhausted" },
    { value: "警惕", label: "警惕 Alert" },
    { value: "沉思", label: "沉思 Contemplative" },
    { value: "狂喜", label: "狂喜 Ecstatic" },
    { value: "绝望", label: "绝望 Desperate" },
    { value: "冷漠", label: "冷漠 Indifferent" },
    { value: "自定义", label: "自定义（在下方描述）" },
  ],
  environment_weather: [
    { value: "晴天", label: "晴天 Clear" },
    { value: "多云", label: "多云 Cloudy" },
    { value: "阴天", label: "阴天 Overcast" },
    { value: "小雨", label: "小雨 Light Rain" },
    { value: "大雨", label: "大雨 Heavy Rain" },
    { value: "暴风雨", label: "暴风雨 Storm" },
    { value: "小雪", label: "小雪 Light Snow" },
    { value: "大雪", label: "大雪 Heavy Snow" },
    { value: "暴风雪", label: "暴风雪 Blizzard" },
    { value: "雾", label: "雾 Foggy" },
    { value: "冰雹", label: "冰雹 Hail" },
    { value: "沙尘暴", label: "沙尘暴 Sandstorm" },
    { value: "龙卷风", label: "龙卷风 Tornado" },
    { value: "极光", label: "极光 Aurora" },
    { value: "无", label: "无/室内" },
  ],
  environment_season: [
    { value: "春", label: "春天 Spring" },
    { value: "夏", label: "夏天 Summer" },
    { value: "秋", label: "秋天 Autumn" },
    { value: "冬", label: "冬天 Winter" },
    { value: "不适用", label: "不适用" },
  ],
  mood: [
    { value: "紧张", label: "紧张 Tense", desc: "悬疑、惊悚场景" },
    { value: "悬疑", label: "悬疑 Mysterious", desc: "侦探、悬疑场景" },
    { value: "浪漫", label: "浪漫 Romantic", desc: "爱情、温馨场景" },
    { value: "孤独", label: "孤独 Lonely", desc: "文艺、内省场景" },
    { value: "欢快", label: "欢快 Joyful", desc: "喜剧、广告场景" },
    { value: "史诗", label: "史诗 Epic", desc: "战争、奇幻场景" },
    { value: "恐怖", label: "恐怖 Horror", desc: "恐怖片场景" },
    { value: "宁静", label: "宁静 Serene", desc: "自然、冥想场景" },
    { value: "忧郁", label: "忧郁 Melancholic", desc: "文艺、回忆场景" },
    { value: "愤怒", label: "愤怒 Angry", desc: "动作、冲突场景" },
    { value: "梦幻", label: "梦幻 Dreamy", desc: "超现实、MV 场景" },
    { value: "荒诞", label: "荒诞 Absurd", desc: "实验、创意场景" },
    { value: "温暖", label: "温暖 Warm", desc: "家庭、治愈场景" },
    { value: "压抑", label: "压抑 Oppressive", desc: "反乌托邦、心理场景" },
    { value: "震撼", label: "震撼 Awe-inspiring", desc: "自然奇观、科幻场景" },
    { value: "幽默", label: "幽默 Humorous", desc: "喜剧、轻松场景" },
    { value: "怀旧", label: "怀旧 Nostalgic", desc: "回忆、复古场景" },
    { value: "神圣", label: "神圣 Sacred", desc: "宗教、仪式场景" },
  ],

  // ---- 视觉风格 ----
  art_style: [
    { value: "写实", label: "写实 Photorealistic", desc: "接近真实世界的视觉效果" },
    { value: "超写实", label: "超写实 Hyperrealistic", desc: "超越现实的极致细节" },
    { value: "赛博朋克", label: "赛博朋克 Cyberpunk", desc: "霓虹灯、高科技低生活" },
    { value: "蒸汽朋克", label: "蒸汽朋克 Steampunk", desc: "维多利亚时代、齿轮机械" },
    { value: "水墨画", label: "水墨画 Ink Wash", desc: "中国传统水墨风格" },
    { value: "吉卜力", label: "吉卜力 Studio Ghibli", desc: "宫崎骏式温暖手绘动画" },
    { value: "迪士尼3D", label: "迪士尼3D Disney Pixar", desc: "皮克斯/迪士尼 3D 动画" },
    { value: "日式动漫", label: "日式动漫 Anime", desc: "日本动画风格" },
    { value: "油画", label: "油画 Oil Painting", desc: "古典油画质感" },
    { value: "水彩", label: "水彩 Watercolor", desc: "水彩画风格" },
    { value: "极简主义", label: "极简主义 Minimalist", desc: "简洁、大量留白" },
    { value: "波普艺术", label: "波普艺术 Pop Art", desc: "安迪·沃霍尔式鲜艳色块" },
    { value: "哥特", label: "哥特 Gothic", desc: "黑暗、尖拱、神秘" },
    { value: "复古胶片", label: "复古胶片 Vintage Film", desc: "老式胶片褪色与颗粒感" },
    { value: "霓虹黑暗", label: "霓虹黑暗 Neon Noir", desc: "黑色电影与霓虹灯结合" },
    { value: "超现实主义", label: "超现实主义 Surrealism", desc: "达利式梦境与扭曲现实" },
    { value: "纪录片", label: "纪录片 Documentary", desc: "真实、手持、自然光" },
    { value: "商业广告", label: "商业广告 Commercial", desc: "干净、明亮、产品导向" },
    { value: "MV风格", label: "MV风格 Music Video", desc: "快速剪辑、强烈视觉冲击" },
    { value: "Vlog", label: "Vlog", desc: "个人化、轻松、日常" },
    { value: "像素艺术", label: "像素艺术 Pixel Art", desc: "复古游戏像素风格" },
    { value: "剪纸", label: "剪纸 Paper Cut", desc: "剪纸/拼贴艺术风格" },
    { value: "黑白", label: "黑白 Black & White", desc: "经典黑白影像" },
    { value: "低多边形", label: "低多边形 Low Poly", desc: "几何化 3D 风格" },
  ],
  render_engine: [
    { value: "无", label: "无/不指定" },
    { value: "Unreal Engine 5", label: "Unreal Engine 5", desc: "游戏级实时渲染" },
    { value: "Octane Render", label: "Octane Render", desc: "GPU 光线追踪渲染" },
    { value: "V-Ray", label: "V-Ray", desc: "专业建筑/产品渲染" },
    { value: "Blender Cycles", label: "Blender Cycles", desc: "开源路径追踪渲染" },
    { value: "Cinema 4D", label: "Cinema 4D", desc: "运动图形渲染" },
    { value: "Arnold", label: "Arnold", desc: "电影级光线追踪" },
    { value: "Redshift", label: "Redshift", desc: "GPU 加速渲染" },
  ],
  color_palette: [
    { value: "青橙对比", label: "青橙对比 Teal & Orange", desc: "好莱坞经典电影配色" },
    { value: "莫兰迪", label: "莫兰迪 Morandi", desc: "低饱和度灰调色系" },
    { value: "暖色调", label: "暖色调 Warm Tones", desc: "红橙黄为主的温暖色系" },
    { value: "冷色调", label: "冷色调 Cool Tones", desc: "蓝绿紫为主的冷峻色系" },
    { value: "单色", label: "单色 Monochromatic", desc: "单一色相的深浅变化" },
    { value: "互补色", label: "互补色 Complementary", desc: "色轮对角的强烈对比" },
    { value: "类似色", label: "类似色 Analogous", desc: "色轮相邻的和谐配色" },
    { value: "黑白灰", label: "黑白灰 Achromatic", desc: "无彩色系" },
    { value: "霓虹色", label: "霓虹色 Neon", desc: "高饱和荧光色" },
    { value: "大地色", label: "大地色 Earth Tones", desc: "棕褐绿的自然色系" },
    { value: "粉彩色", label: "粉彩色 Pastel", desc: "柔和淡雅的低饱和色" },
    { value: "金属色", label: "金属色 Metallic", desc: "金银铜的金属质感色" },
    { value: "自定义", label: "自定义" },
  ],
  color_grading: [
    { value: "高对比度冷色调", label: "高对比度冷色调", desc: "暗部偏青，高光偏白" },
    { value: "褪色胶片感", label: "褪色胶片感 Faded Film", desc: "黑位提升，色彩褪色" },
    { value: "金色时刻暖调", label: "金色时刻暖调", desc: "整体偏暖金色" },
    { value: "银翼杀手风", label: "银翼杀手风 Blade Runner", desc: "暗部偏青，高光偏橙" },
    { value: "矩阵绿调", label: "矩阵绿调 Matrix Green", desc: "整体偏绿的科技感" },
    { value: "复古暖黄", label: "复古暖黄 Vintage Warm", desc: "70年代暖黄色调" },
    { value: "漂白旁路", label: "漂白旁路 Bleach Bypass", desc: "低饱和高对比" },
    { value: "交叉冲洗", label: "交叉冲洗 Cross Process", desc: "非常规色彩偏移" },
    { value: "日系清新", label: "日系清新 Japanese Fresh", desc: "低对比高亮度柔和色调" },
    { value: "HDR高动态", label: "HDR高动态", desc: "极宽动态范围" },
    { value: "黑白高对比", label: "黑白高对比 B&W High Contrast", desc: "经典黑白影调" },
    { value: "自定义", label: "自定义" },
  ],
  texture: [
    { value: "35mm胶片颗粒", label: "35mm 胶片颗粒", desc: "经典电影胶片质感" },
    { value: "16mm胶片颗粒", label: "16mm 胶片颗粒", desc: "更粗的颗粒，独立电影感" },
    { value: "8mm超8胶片", label: "8mm 超8胶片", desc: "家庭录像复古感" },
    { value: "数字锐利", label: "数字锐利 Digital Sharp", desc: "现代数字相机的锐利画面" },
    { value: "油画笔触", label: "油画笔触 Oil Brush", desc: "可见笔触的油画质感" },
    { value: "水彩晕染", label: "水彩晕染 Watercolor Bleed", desc: "水彩的自然晕染效果" },
    { value: "铅笔素描", label: "铅笔素描 Pencil Sketch", desc: "铅笔线条质感" },
    { value: "版画", label: "版画 Woodcut", desc: "木刻版画的粗犷线条" },
    { value: "磨砂玻璃", label: "磨砂玻璃 Frosted Glass", desc: "磨砂透光质感" },
    { value: "VHS录像带", label: "VHS 录像带", desc: "模拟录像带的噪点和色偏" },
    { value: "无", label: "无/默认" },
  ],

  // ---- 摄影控制 ----
  shot_type: [
    { value: "大远景", label: "大远景 Extreme Wide", desc: "广阔环境全貌，建立场景" },
    { value: "远景", label: "远景 Wide Shot", desc: "完整环境 + 主体全身" },
    { value: "全景", label: "全景 Full Shot", desc: "主体全身，展示人物与环境" },
    { value: "中远景", label: "中远景 Medium Wide", desc: "膝盖以上，动作场景" },
    { value: "中景", label: "中景 Medium Shot", desc: "腰部以上，对话互动" },
    { value: "中近景", label: "中近景 Medium Close-up", desc: "胸部以上，表情与对话" },
    { value: "近景", label: "近景 Close-up", desc: "面部或物体特定部分" },
    { value: "大特写", label: "大特写 Extreme Close-up", desc: "眼睛、嘴唇等极小区域" },
    { value: "插入镜头", label: "插入镜头 Insert Shot", desc: "特定物体或细节" },
    { value: "双人镜头", label: "双人镜头 Two Shot", desc: "两个人物同框" },
    { value: "群像镜头", label: "群像镜头 Group Shot", desc: "多个人物同框" },
  ],
  camera_angle: [
    { value: "鸟瞰", label: "鸟瞰 Bird's Eye", desc: "正上方俯视，展示空间布局" },
    { value: "高角度", label: "高角度 High Angle", desc: "从上方俯拍，主体显得渺小" },
    { value: "平视", label: "平视 Eye Level", desc: "自然、中性的视角" },
    { value: "低角度", label: "低角度 Low Angle", desc: "从下方仰拍，主体显得强大" },
    { value: "蚁视", label: "蚁视 Worm's Eye", desc: "极低角度，从地面仰望" },
    { value: "荷兰角", label: "荷兰角 Dutch Angle", desc: "倾斜画面，营造不安感" },
    { value: "过肩", label: "过肩 Over-the-Shoulder", desc: "从一个角色肩膀后方拍摄" },
    { value: "主观视角", label: "主观视角 POV", desc: "模拟角色的第一人称视角" },
  ],
  framing: [
    { value: "三分法", label: "三分法 Rule of Thirds", desc: "主体位于三分线交叉点" },
    { value: "中心构图", label: "中心构图 Center", desc: "主体居中，对称感" },
    { value: "对称构图", label: "对称构图 Symmetrical", desc: "画面左右或上下对称" },
    { value: "框中框", label: "框中框 Frame within Frame", desc: "利用门窗形成画中画" },
    { value: "引导线", label: "引导线 Leading Lines", desc: "利用线条引导视线至主体" },
    { value: "前景遮挡", label: "前景遮挡 Foreground", desc: "前景元素部分遮挡，增加层次" },
    { value: "负空间", label: "负空间 Negative Space", desc: "大量留白，突出主体孤立感" },
    { value: "紧凑构图", label: "紧凑构图 Tight", desc: "主体填满画面，压迫感" },
  ],
  camera_movement: [
    { value: "静态", label: "静态 Static", desc: "摄像机固定不动，最高画质" },
    { value: "推", label: "推 Push In", desc: "向主体靠近，增加紧张感" },
    { value: "拉", label: "拉 Pull Out", desc: "远离主体，揭示环境" },
    { value: "水平平移", label: "水平平移 Pan", desc: "水平旋转，跟随动作" },
    { value: "垂直摇移", label: "垂直摇移 Tilt", desc: "垂直旋转，展示高度" },
    { value: "轨道环绕", label: "轨道环绕 Orbit", desc: "围绕主体旋转，产品展示" },
    { value: "跟踪", label: "跟踪 Tracking", desc: "跟随主体移动" },
    { value: "手持", label: "手持 Handheld", desc: "模拟手持拍摄的轻微晃动" },
    { value: "稳定器", label: "稳定器 Steadicam", desc: "平滑的跟随运动" },
    { value: "升降", label: "升降 Crane", desc: "垂直升降，戏剧性揭示" },
    { value: "无人机", label: "无人机 Drone", desc: "空中飞行拍摄，壮观鸟瞰" },
    { value: "变焦", label: "变焦 Zoom", desc: "改变焦距，快速聚焦" },
    { value: "横移", label: "横移 Truck", desc: "水平平移（非旋转）" },
    { value: "旋转", label: "旋转 Roll", desc: "沿镜头轴旋转，眩晕感" },
    { value: "一镜到底", label: "一镜到底 Oner", desc: "不间断的连续运动" },
  ],
  movement_speed: [
    { value: "极慢", label: "极慢" },
    { value: "慢", label: "慢" },
    { value: "中等", label: "中等" },
    { value: "快", label: "快" },
    { value: "极快", label: "极快" },
  ],
  movement_direction: [
    { value: "从左到右", label: "从左到右" },
    { value: "从右到左", label: "从右到左" },
    { value: "从下到上", label: "从下到上" },
    { value: "从上到下", label: "从上到下" },
    { value: "从远到近", label: "从远到近" },
    { value: "从近到远", label: "从近到远" },
    { value: "顺时针环绕", label: "顺时针环绕" },
    { value: "逆时针环绕", label: "逆时针环绕" },
    { value: "对角线", label: "对角线移动" },
    { value: "S形", label: "S形曲线运动" },
    { value: "自定义", label: "自定义" },
  ],
  lens_focal_length: [
    { value: "14mm", label: "14mm 超广角", desc: "极宽视角，强烈透视畸变" },
    { value: "24mm", label: "24mm 广角", desc: "宽视角，轻微畸变" },
    { value: "35mm", label: "35mm 小广角", desc: "接近人眼视角" },
    { value: "50mm", label: "50mm 标准", desc: "最接近人眼的自然视角" },
    { value: "85mm", label: "85mm 中长焦", desc: "压缩透视，背景虚化" },
    { value: "135mm", label: "135mm 长焦", desc: "强烈压缩，极浅景深" },
    { value: "200mm+", label: "200mm+ 超长焦", desc: "极度压缩，主体与背景叠加" },
    { value: "Macro", label: "微距 Macro", desc: "极近距离，放大细节" },
    { value: "Fisheye", label: "鱼眼 Fisheye", desc: "180° 视角，桶形畸变" },
    { value: "Tilt-Shift", label: "移轴 Tilt-Shift", desc: "选择性焦平面，微缩效果" },
    { value: "Anamorphic", label: "变形宽银幕 Anamorphic", desc: "椭圆虚化、水平光晕" },
  ],
  depth_of_field: [
    { value: "浅景深", label: "浅景深 Shallow", desc: "背景大幅虚化，突出主体" },
    { value: "中等景深", label: "中等景深 Medium", desc: "适度虚化" },
    { value: "深景深", label: "深景深 Deep", desc: "全画面清晰" },
  ],
  focus_transition: [
    { value: "无", label: "无变化" },
    { value: "前景到背景", label: "前景到背景 Front to Back" },
    { value: "背景到前景", label: "背景到前景 Back to Front" },
    { value: "跟焦", label: "跟焦 Follow Focus", desc: "焦点跟随主体移动" },
    { value: "架焦", label: "架焦 Rack Focus", desc: "焦点在两个主体间切换" },
    { value: "失焦", label: "失焦 Defocus", desc: "画面逐渐失焦" },
    { value: "自定义", label: "自定义" },
  ],
  camera_shake: [
    { value: "无", label: "无" },
    { value: "轻微", label: "轻微", desc: "微弱的呼吸感抖动" },
    { value: "中等", label: "中等", desc: "手持拍摄的自然抖动" },
    { value: "强烈", label: "强烈", desc: "剧烈晃动，紧张感" },
  ],
  pov_type: [
    { value: "第三人称", label: "第三人称" },
    { value: "第一人称", label: "第一人称 POV" },
    { value: "上帝视角", label: "上帝视角" },
  ],

  // ---- 光照系统 ----
  time_of_day: [
    { value: "黎明", label: "黎明 Dawn", desc: "微弱的冷蓝色光，天际线泛白" },
    { value: "日出", label: "日出 Sunrise", desc: "温暖的橙金色低角度光" },
    { value: "金色时刻", label: "金色时刻 Golden Hour", desc: "柔和金色光线，长影子" },
    { value: "上午", label: "上午 Morning", desc: "明亮、清新的自然光" },
    { value: "正午", label: "正午 Noon", desc: "强烈顶光，短影子，高对比" },
    { value: "下午", label: "下午 Afternoon", desc: "温暖但不刺眼的侧光" },
    { value: "日落", label: "日落 Sunset", desc: "浓烈的橙红色光线" },
    { value: "蓝色时刻", label: "蓝色时刻 Blue Hour", desc: "日落后的深蓝色天空" },
    { value: "黄昏", label: "黄昏 Dusk", desc: "天色渐暗，混合色温" },
    { value: "夜晚", label: "夜晚 Night", desc: "黑暗环境，依赖人工光源" },
    { value: "午夜", label: "午夜 Midnight", desc: "极暗环境，月光或极少光源" },
    { value: "阴天", label: "阴天 Overcast", desc: "均匀漫射光，无明显影子" },
  ],
  key_light_type: [
    { value: "自然阳光", label: "自然阳光" },
    { value: "窗光", label: "柔和窗光" },
    { value: "聚光灯", label: "聚光灯 Spotlight" },
    { value: "霓虹灯", label: "霓虹灯 Neon" },
    { value: "烛光", label: "烛光 Candlelight" },
    { value: "月光", label: "月光 Moonlight" },
    { value: "荧光灯", label: "荧光灯 Fluorescent" },
    { value: "LED面板", label: "LED 面板" },
    { value: "篝火", label: "篝火 Campfire" },
    { value: "屏幕光", label: "屏幕光 Screen Light" },
    { value: "车灯", label: "车灯 Headlights" },
    { value: "闪电", label: "闪电 Lightning" },
    { value: "自定义", label: "自定义" },
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
    { value: "柔光", label: "柔光 Soft", desc: "柔和的漫射光线" },
    { value: "硬光", label: "硬光 Hard", desc: "锐利的直射光线" },
    { value: "漫射光", label: "漫射光 Diffused", desc: "均匀散射的光线" },
  ],
  color_temperature: [
    { value: "极暖", label: "极暖 2700K", desc: "烛光/白炽灯色温" },
    { value: "暖", label: "暖 3500K", desc: "日出/日落色温" },
    { value: "中性", label: "中性 5000K", desc: "正午日光色温" },
    { value: "冷", label: "冷 6500K", desc: "阴天/荧光灯色温" },
    { value: "极冷", label: "极冷 8000K+", desc: "蓝天/月光色温" },
  ],
  practical_lights: [
    { value: "台灯", label: "台灯" },
    { value: "路灯", label: "路灯" },
    { value: "霓虹招牌", label: "霓虹招牌" },
    { value: "蜡烛", label: "蜡烛" },
    { value: "壁炉", label: "壁炉" },
    { value: "电视/屏幕", label: "电视/屏幕" },
    { value: "吊灯", label: "吊灯" },
    { value: "手电筒", label: "手电筒" },
    { value: "灯笼", label: "灯笼" },
    { value: "仪表盘", label: "仪表盘" },
    { value: "烟花", label: "烟花" },
    { value: "自定义", label: "自定义" },
  ],
  atmospheric_effects: [
    { value: "体积光", label: "体积光 God Rays", desc: "可见光束穿过空气" },
    { value: "薄雾", label: "薄雾 Mist", desc: "轻微空气散射，增加层次" },
    { value: "浓雾", label: "浓雾 Heavy Fog", desc: "大幅降低能见度" },
    { value: "烟尘", label: "烟尘 Smoke", desc: "空气中颗粒物散射光线" },
    { value: "雨中光线", label: "雨中光线", desc: "雨滴折射和反射光线" },
    { value: "镜头光晕", label: "镜头光晕 Lens Flare", desc: "光源直射镜头产生光斑" },
    { value: "光斑", label: "光斑 Bokeh", desc: "失焦光源形成的圆形光斑" },
    { value: "霓虹反射", label: "霓虹反射 Neon", desc: "霓虹灯在湿润表面的反射" },
    { value: "火光", label: "火光 Firelight", desc: "跳动的暖色火焰光" },
    { value: "闪电", label: "闪电 Lightning", desc: "瞬间的强烈白光" },
    { value: "极光", label: "极光 Aurora", desc: "天空中的彩色光带" },
    { value: "水下焦散", label: "水下焦散 Caustics", desc: "水面折射在水底的光纹" },
    { value: "粉尘飞扬", label: "粉尘飞扬 Dust Particles", desc: "空气中可见的微粒" },
    { value: "雪花飘落", label: "雪花飘落 Falling Snow", desc: "飘落的雪花散射光线" },
  ],
  shadow_style: [
    { value: "柔和渐变", label: "柔和渐变", desc: "自然柔和的阴影过渡" },
    { value: "锐利边缘", label: "锐利边缘", desc: "清晰锐利的阴影轮廓" },
    { value: "明暗对比", label: "戏剧性明暗对比 Chiaroscuro", desc: "强烈的光暗对比" },
  ],

  // ---- 音频设计 ----
  ambient_sound: [
    { value: "城市街道", label: "城市街道", desc: "车流、人群、喇叭" },
    { value: "森林", label: "森林", desc: "鸟鸣、风吹树叶、虫鸣" },
    { value: "海边", label: "海边", desc: "海浪、海鸥、风声" },
    { value: "雨声", label: "雨声", desc: "雨滴打在不同表面" },
    { value: "室内安静", label: "室内安静", desc: "空调嗡嗡声、时钟滴答" },
    { value: "咖啡馆", label: "咖啡馆", desc: "轻声交谈、杯碟碰撞" },
    { value: "工厂", label: "工厂/工业", desc: "机器运转、金属碰撞" },
    { value: "太空", label: "太空/真空", desc: "寂静或低频嗡鸣" },
    { value: "水下", label: "水下", desc: "气泡声、水流声" },
    { value: "战场", label: "战场", desc: "爆炸、枪声、呐喊" },
    { value: "自定义", label: "自定义" },
  ],
  music_style: [
    { value: "管弦乐", label: "管弦乐 Orchestral", desc: "交响乐团编制" },
    { value: "电子合成器", label: "电子合成器 Synth", desc: "合成器电子音乐" },
    { value: "钢琴独奏", label: "钢琴独奏 Piano Solo", desc: "纯钢琴演奏" },
    { value: "吉他原声", label: "吉他原声 Acoustic Guitar", desc: "木吉他弹奏" },
    { value: "氛围音乐", label: "氛围音乐 Ambient", desc: "环境氛围电子音乐" },
    { value: "爵士", label: "爵士 Jazz", desc: "爵士乐风格" },
    { value: "摇滚", label: "摇滚 Rock", desc: "摇滚乐风格" },
    { value: "嘻哈", label: "嘻哈 Hip-Hop", desc: "嘻哈/说唱风格" },
    { value: "古典", label: "古典 Classical", desc: "古典音乐" },
    { value: "民族", label: "民族 Ethnic/World", desc: "民族/世界音乐" },
    { value: "电影配乐", label: "电影配乐 Film Score", desc: "Hans Zimmer 式电影配乐" },
    { value: "Lo-Fi", label: "Lo-Fi", desc: "低保真放松音乐" },
    { value: "无音乐", label: "无音乐", desc: "不使用背景音乐" },
    { value: "自定义", label: "自定义" },
  ],
  music_tempo: [
    { value: "极慢", label: "极慢 Largo", desc: "40-60 BPM" },
    { value: "慢", label: "慢 Adagio", desc: "60-80 BPM" },
    { value: "中等", label: "中等 Moderato", desc: "80-120 BPM" },
    { value: "快", label: "快 Allegro", desc: "120-160 BPM" },
    { value: "极快", label: "极快 Presto", desc: "160+ BPM" },
  ],
  music_instrument: [
    { value: "弦乐", label: "弦乐 Strings" },
    { value: "钢琴", label: "钢琴 Piano" },
    { value: "吉他", label: "吉他 Guitar" },
    { value: "鼓/打击乐", label: "鼓/打击乐 Drums" },
    { value: "管乐", label: "管乐 Brass/Winds" },
    { value: "合成器", label: "合成器 Synthesizer" },
    { value: "人声", label: "人声 Vocals" },
    { value: "电子节拍", label: "电子节拍 Electronic Beats" },
    { value: "竖琴", label: "竖琴 Harp" },
    { value: "二胡", label: "二胡 Erhu" },
    { value: "古筝", label: "古筝 Guzheng" },
    { value: "萨克斯", label: "萨克斯 Saxophone" },
    { value: "自定义", label: "自定义" },
  ],
  audio_mood: [
    { value: "紧张悬疑", label: "紧张悬疑" },
    { value: "温暖治愈", label: "温暖治愈" },
    { value: "史诗壮阔", label: "史诗壮阔" },
    { value: "悲伤感人", label: "悲伤感人" },
    { value: "欢快活泼", label: "欢快活泼" },
    { value: "恐怖阴森", label: "恐怖阴森" },
    { value: "宁静平和", label: "宁静平和" },
    { value: "激昂振奋", label: "激昂振奋" },
    { value: "神秘空灵", label: "神秘空灵" },
    { value: "浪漫甜蜜", label: "浪漫甜蜜" },
    { value: "压抑沉重", label: "压抑沉重" },
    { value: "自定义", label: "自定义" },
  ],

  // ---- 运动与节奏 ----
  time_effect: [
    { value: "正常速度", label: "正常速度", desc: "无特殊时间效果" },
    { value: "慢动作", label: "慢动作 Slow Motion", desc: "降速播放，强调动作细节" },
    { value: "超级慢动作", label: "超级慢动作 Super Slow Mo", desc: "极度降速，如子弹时间" },
    { value: "延时摄影", label: "延时摄影 Time-lapse", desc: "加速播放，压缩时间流逝" },
    { value: "超延时", label: "超延时 Hyperlapse", desc: "带空间移动的延时摄影" },
    { value: "定格", label: "定格 Freeze Frame", desc: "画面在某一刻静止" },
    { value: "速度渐变", label: "速度渐变 Speed Ramp", desc: "速度平滑过渡变化" },
    { value: "倒放", label: "倒放 Reverse", desc: "时间倒流播放" },
  ],
  pacing: [
    { value: "沉思的", label: "沉思的 Contemplative", desc: "缓慢、留白、内省" },
    { value: "平稳的", label: "平稳的 Steady", desc: "均匀、稳定的节奏" },
    { value: "紧凑的", label: "紧凑的 Tight", desc: "快节奏、信息密集" },
    { value: "充满活力的", label: "充满活力的 Energetic", desc: "动感、跳跃的节奏" },
    { value: "狂暴的", label: "狂暴的 Frantic", desc: "极快、混乱、紧迫" },
    { value: "渐进式", label: "渐进式 Building", desc: "从慢到快逐步加速" },
    { value: "呼吸式", label: "呼吸式 Breathing", desc: "快慢交替的节奏" },
  ],
  transition: [
    { value: "无", label: "无 Hard Cut", desc: "直接开始或结束" },
    { value: "淡入淡出", label: "淡入/淡出 Fade", desc: "从黑色/白色渐变" },
    { value: "溶解", label: "溶解 Dissolve", desc: "与上一镜头叠化过渡" },
    { value: "划变", label: "划变 Wipe", desc: "画面被新画面推开" },
    { value: "虹膜", label: "虹膜 Iris", desc: "圆形开合过渡" },
    { value: "模糊过渡", label: "模糊过渡 Blur", desc: "通过失焦过渡" },
    { value: "闪白", label: "闪白 Flash", desc: "强烈白光闪烁过渡" },
    { value: "闪黑", label: "闪黑 Blackout", desc: "瞬间黑屏过渡" },
    { value: "运动模糊", label: "运动模糊 Motion Blur", desc: "通过快速运动模糊过渡" },
    { value: "匹配剪辑", label: "匹配剪辑 Match Cut", desc: "通过相似形状或动作过渡" },
  ],

  // ---- 技术参数 ----
  resolution: [
    { value: "360p", label: "360p", desc: "640x360, PixVerse" },
    { value: "480p", label: "480p", desc: "854x480, Wan 2.2" },
    { value: "540p", label: "540p", desc: "960x540, Luma/PixVerse" },
    { value: "720p", label: "720p", desc: "1280x720, 大多数模型" },
    { value: "768p", label: "768p", desc: "1366x768, Hailuo" },
    { value: "1080p", label: "1080p", desc: "1920x1080, 主流高清" },
    { value: "4K", label: "4K", desc: "3840x2160, Veo/Luma/Kling" },
  ],
  aspect_ratio: [
    { value: "16:9", label: "16:9 横屏", desc: "YouTube、电影" },
    { value: "9:16", label: "9:16 竖屏", desc: "TikTok、Reels、Shorts" },
    { value: "1:1", label: "1:1 方形", desc: "Instagram 帖子" },
    { value: "4:3", label: "4:3 传统", desc: "传统电视、复古风格" },
    { value: "3:4", label: "3:4 竖版", desc: "竖版海报" },
    { value: "21:9", label: "21:9 宽银幕", desc: "超宽银幕电影" },
    { value: "3:2", label: "3:2 摄影", desc: "传统胶片比例" },
  ],
  fps: [
    { value: 24, label: "24 fps 电影", desc: "经典电影帧率" },
    { value: 30, label: "30 fps 标准", desc: "标准视频帧率" },
    { value: 60, label: "60 fps 流畅", desc: "高帧率流畅视频" },
  ],

  // ---- 质量控制 ----
  style_consistency: [
    { value: "严格一致", label: "严格一致", desc: "与参考完全匹配" },
    { value: "大致一致", label: "大致一致", desc: "保持整体风格统一" },
    { value: "允许变化", label: "允许变化", desc: "允许 AI 自由发挥" },
  ],

  // 预置负面提示词（按类别分组）
  negative_preset_quality: [
    { value: "模糊", label: "模糊 Blurry" },
    { value: "噪点过多", label: "噪点过多 Noisy" },
    { value: "像素化", label: "像素化 Pixelated" },
    { value: "过曝", label: "过曝 Overexposed" },
    { value: "欠曝", label: "欠曝 Underexposed" },
    { value: "低分辨率", label: "低分辨率 Low Resolution" },
  ],
  negative_preset_body: [
    { value: "变形的手", label: "变形的手" },
    { value: "多余的手指", label: "多余的手指" },
    { value: "扭曲的面部", label: "扭曲的面部" },
    { value: "多余的肢体", label: "多余的肢体" },
    { value: "不自然的姿势", label: "不自然的姿势" },
    { value: "比例失调", label: "比例失调" },
  ],
  negative_preset_artifact: [
    { value: "水印", label: "水印 Watermark" },
    { value: "文字伪影", label: "文字伪影" },
    { value: "边缘模糊", label: "边缘模糊" },
    { value: "接缝可见", label: "接缝可见" },
    { value: "闪烁", label: "闪烁 Flickering" },
    { value: "色带", label: "色带 Banding" },
  ],
  negative_preset_motion: [
    { value: "抖动", label: "抖动 Jitter" },
    { value: "跳帧", label: "跳帧 Frame Skip" },
    { value: "不自然的运动", label: "不自然的运动" },
    { value: "主体变形", label: "主体变形 Morphing" },
    { value: "形态不稳定", label: "形态不稳定" },
  ],
  negative_preset_style: [
    { value: "卡通化", label: "卡通化 Cartoonish" },
    { value: "过度饱和", label: "过度饱和" },
    { value: "不一致的风格", label: "不一致的风格" },
    { value: "AI感过重", label: "AI 感过重" },
    { value: "塑料感", label: "塑料感 Plastic Look" },
  ],

  // 预置质量增强词（按类别分组）
  booster_preset_resolution: [
    { value: "超高清", label: "超高清 Ultra HD" },
    { value: "4K", label: "4K" },
    { value: "细节丰富", label: "细节丰富 Rich Details" },
    { value: "纹理清晰", label: "纹理清晰 Sharp Textures" },
  ],
  booster_preset_cinematic: [
    { value: "电影级画质", label: "电影级画质 Cinematic" },
    { value: "专业色彩分级", label: "专业色彩分级" },
    { value: "浅景深", label: "浅景深 Shallow DOF" },
    { value: "变形宽银幕镜头", label: "变形宽银幕镜头 Anamorphic" },
    { value: "胶片质感", label: "胶片质感 Film Grain" },
  ],
  booster_preset_lighting: [
    { value: "自然光照", label: "自然光照 Natural Lighting" },
    { value: "体积光", label: "体积光 Volumetric Light" },
    { value: "精致的阴影层次", label: "精致的阴影层次" },
    { value: "全局光照", label: "全局光照 Global Illumination" },
  ],
  booster_preset_motion: [
    { value: "流畅的运动", label: "流畅的运动 Smooth Motion" },
    { value: "自然的物理效果", label: "自然的物理效果" },
    { value: "逼真的布料模拟", label: "逼真的布料模拟" },
    { value: "真实的流体动力学", label: "真实的流体动力学" },
  ],
  booster_preset_overall: [
    { value: "获奖摄影", label: "获奖摄影 Award-winning" },
    { value: "杂志封面级", label: "杂志封面级 Magazine Cover" },
    { value: "大师级构图", label: "大师级构图 Master Composition" },
    { value: "专业级后期", label: "专业级后期 Pro Post-processing" },
  ],

  // ---- 后期处理 ----
  upscaling: [
    { value: "None", label: "不上采样" },
    { value: "2x", label: "2x" },
    { value: "4K", label: "4K" },
  ],
  color_correction: [
    { value: "无", label: "无" },
    { value: "冷色调电影", label: "冷色调电影" },
    { value: "暖色调电影", label: "暖色调电影" },
    { value: "复古胶片", label: "复古胶片" },
    { value: "高对比黑白", label: "高对比黑白" },
    { value: "日系清新", label: "日系清新" },
    { value: "漂白旁路", label: "漂白旁路 Bleach Bypass" },
    { value: "HDR增强", label: "HDR 增强" },
    { value: "自定义", label: "自定义" },
  ],
  output_format: [
    { value: "MP4", label: "MP4", desc: "最通用的视频格式" },
    { value: "MOV", label: "MOV", desc: "Apple 生态系统首选" },
    { value: "WebM", label: "WebM", desc: "Web 优化格式" },
    { value: "GIF", label: "GIF", desc: "动图格式，无音频" },
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
      subject_count: 1,
      subject_age: "",
      subject_gender: "",
      subject_appearance: "",
      subject_clothing: "",
      subject_body: "",
      subject_emotion: "",
      environment: "",
      environment_weather: "",
      environment_season: "",
      environment_details: "",
      action: "",
      interaction: "",
      mood: "",
      narrative_context: "",
    },
    visualStyle: {
      art_style: "",
      era_style: "",
      render_engine: "",
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
      music_instrument: "",
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
