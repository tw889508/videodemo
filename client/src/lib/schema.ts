// AI 视频生成蓝图 - 完整数据结构定义（深度优化版）
// 优化方向：物理真实感、镜头不完美感、感官深度、光影微观控制、叙事结构、音频空间感

export interface VideoBlueprint {
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

// ============================================================
// 场景描述（含物理真实感 + 感官深度扩展）
// ============================================================
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
  micro_expression: string;
  environment: string;
  environment_weather: string;
  environment_season: string;
  environment_details: string;
  action: string;
  action_physical_detail: string;
  interaction: string;
  mood: string;
  narrative_context: string;
  // 物理真实感（A 组）
  surface_material: string;
  material_detail: string;
  physics_behavior: string;
  physics_detail: string;
  micro_elements: string[];
  weathering_aging: string;
  interaction_physics: string;
  gravity_weight: string;
  // 感官深度（C 组）
  sensory_layers: string;
  time_progression: string;
  spatial_depth_layers: string;
}

// ============================================================
// 视觉风格
// ============================================================
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

// ============================================================
// 摄影控制（含镜头不完美感 B 组）
// ============================================================
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
  // 镜头不完美感（B 组）
  lens_imperfection: string[];
  bokeh_shape: string;
  film_texture: string;
  handheld_style: string;
  exposure_variation: string;
  white_balance_cast: string;
  lens_coating: string;
  focus_accuracy: string;
}

// ============================================================
// 光照系统（含微观光影控制 D 组）
// ============================================================
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
  // 微观光影（D 组）
  caustics: string;
  subsurface_scattering: string;
  color_spill: string;
  light_falloff: string;
}

// ============================================================
// 音频设计（含空间感与层次 F 组）
// ============================================================
export interface AudioDesign {
  ambient_sound: string;
  music_style: string;
  music_tempo: string;
  music_instrument: string;
  sound_effects: string[];
  dialogue: string;
  voiceover: string;
  audio_mood: string;
  // 音频空间感（F 组）
  audio_space: string;
  audio_layers: string;
  sync_points: string;
  silence_use: string;
  audio_distance: string;
}

// ============================================================
// 运动与节奏（含叙事结构 E 组）
// ============================================================
export interface MotionPacing {
  subject_motion_speed: string;
  camera_motion_speed: string;
  time_effect: string;
  pacing: string;
  transition_in: string;
  transition_out: string;
  rhythm_reference: string;
  // 叙事结构（E 组）
  opening_frame: string;
  reveal_structure: string;
  emotion_arc: string;
  climax_moment: string;
  ending_frame: string;
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
// 枚举选项定义（深度优化版）
// ============================================================

export const ENUMS = {
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

  // ---- A 组：物理真实感 ----
  surface_material: [
    { value: "皮肤", label: "皮肤 Skin", desc: "毛孔、汗珠、细纹可见" },
    { value: "金属-镜面", label: "金属-镜面 Polished Metal", desc: "高反射率，清晰映射环境" },
    { value: "金属-拉丝", label: "金属-拉丝 Brushed Metal", desc: "细密划痕纹理，柔和反射" },
    { value: "金属-锈蚀", label: "金属-锈蚀 Rusted Metal", desc: "氧化斑驳，粗糙表面" },
    { value: "织物-丝绸", label: "丝绸 Silk", desc: "光滑流动，高光泽反射" },
    { value: "织物-棉麻", label: "棉麻 Cotton/Linen", desc: "自然纹理，哑光质感" },
    { value: "织物-皮革", label: "皮革 Leather", desc: "纹理细腻，半光泽" },
    { value: "织物-针织", label: "针织 Knit", desc: "编织纹理，柔软蓬松" },
    { value: "木材", label: "木材 Wood", desc: "年轮纹理、磨损痕迹" },
    { value: "玻璃-透明", label: "透明玻璃 Clear Glass", desc: "折射、反射、透光" },
    { value: "玻璃-磨砂", label: "磨砂玻璃 Frosted Glass", desc: "漫射透光，模糊背景" },
    { value: "石材-大理石", label: "大理石 Marble", desc: "光滑纹理，高端质感" },
    { value: "石材-粗糙", label: "粗糙岩石 Rough Stone", desc: "粗糙表面，自然纹理" },
    { value: "液体-水", label: "水 Water", desc: "透明、折射、波纹" },
    { value: "液体-油", label: "油 Oil", desc: "粘稠、彩虹反射" },
    { value: "塑料", label: "塑料/树脂 Plastic", desc: "光滑或磨砂，均匀质感" },
    { value: "纸张", label: "纸张 Paper", desc: "纤维纹理，吸光表面" },
    { value: "自定义", label: "自定义" },
  ],
  physics_behavior: [
    { value: "布料-轻盈", label: "布料飘动-轻盈 Light Fabric", desc: "丝绸、薄纱随风轻柔飘动" },
    { value: "布料-厚重", label: "布料飘动-厚重 Heavy Fabric", desc: "厚棉布、皮革缓慢摆动" },
    { value: "头发-风中", label: "头发-风中飘散 Hair in Wind", desc: "发丝随风自然飘散" },
    { value: "头发-湿发", label: "头发-湿发贴合 Wet Hair", desc: "湿润头发贴合皮肤" },
    { value: "液体-滴落", label: "液体滴落 Dripping", desc: "水滴沿表面缓慢滑落" },
    { value: "液体-溅射", label: "液体溅射 Splashing", desc: "液体飞溅散射" },
    { value: "烟雾-轻烟", label: "轻烟袅袅 Light Smoke", desc: "细烟缓慢上升扩散" },
    { value: "烟雾-浓烟", label: "浓烟翻滚 Heavy Smoke", desc: "浓密烟雾翻滚涌动" },
    { value: "粒子-灰尘", label: "灰尘飘浮 Dust Particles", desc: "微小颗粒在空气中飘浮" },
    { value: "粒子-花瓣", label: "花瓣飘落 Falling Petals", desc: "花瓣轻柔飘落" },
    { value: "粒子-雪花", label: "雪花飘落 Snowfall", desc: "雪花缓慢飘落" },
    { value: "粒子-火星", label: "火星飞溅 Sparks", desc: "火星四溅上升" },
    { value: "刚体碰撞", label: "刚体碰撞 Rigid Body", desc: "硬物碰撞弹跳" },
    { value: "柔体变形", label: "柔体变形 Soft Body", desc: "柔软物体挤压变形" },
    { value: "自定义", label: "自定义" },
  ],
  micro_elements: [
    { value: "灰尘颗粒", label: "空气灰尘 Dust in Air", desc: "阳光下可见的微小颗粒" },
    { value: "水汽蒸汽", label: "水汽/蒸汽 Steam", desc: "呼出的白气、热饮蒸汽" },
    { value: "飞虫花粉", label: "飞虫/花粉 Insects/Pollen", desc: "空气中飘浮的花粉或飞虫" },
    { value: "雨滴水珠", label: "雨滴/水珠 Raindrops", desc: "表面凝结的水珠" },
    { value: "火星余烬", label: "火星/余烬 Embers", desc: "飘浮的火星和余烬" },
    { value: "斑驳光影", label: "斑驳光影 Dappled Light", desc: "透过树叶的斑驳光影" },
    { value: "镜面反射", label: "镜面反射 Reflections", desc: "镜面或光滑表面的环境反射" },
    { value: "积水反射", label: "积水反射 Puddle Reflections", desc: "地面积水反射天空和灯光" },
    { value: "蛛网露珠", label: "蛛网/露珠 Cobwebs/Dew", desc: "蛛网上的露珠折射光线" },
    { value: "自定义", label: "自定义" },
  ],
  gravity_weight: [
    { value: "失重", label: "失重/漂浮 Zero Gravity", desc: "太空、梦境中的漂浮感" },
    { value: "轻盈", label: "轻盈 Lightweight", desc: "如纱巾、气球般轻柔" },
    { value: "正常", label: "正常重力 Normal", desc: "符合现实世界的重力" },
    { value: "沉重", label: "沉重 Heavy", desc: "如铠甲、巨石般沉重" },
    { value: "极重", label: "极重 Massive", desc: "如巨石坠落、建筑倒塌" },
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
    { value: "监控录像", label: "监控录像 Surveillance", desc: "低画质、固定机位、时间戳" },
    { value: "手机拍摄", label: "手机拍摄 Phone Footage", desc: "竖屏、自动对焦、日常感" },
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
    { value: "湿润感", label: "湿润感 Wet Look", desc: "表面有水膜反射" },
    { value: "哑光磨砂", label: "哑光/磨砂 Matte", desc: "无反射的柔和表面" },
    { value: "丝绒质感", label: "丝绒质感 Velvet", desc: "柔软吸光的织物感" },
    { value: "金属拉丝", label: "金属拉丝 Brushed Metal", desc: "细密划痕的金属表面" },
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
    { value: "插入镜头", label: "插入镜头 Insert Shot", desc: "特定物体或细节的特写切入" },
    { value: "过肩镜头", label: "过肩镜头 Over-the-Shoulder", desc: "对话场景的经典构图" },
    { value: "双人镜头", label: "双人镜头 Two Shot", desc: "两个人物同框" },
    { value: "群像镜头", label: "群像镜头 Group Shot", desc: "多个人物同框" },
  ],
  camera_angle: [
    { value: "鸟瞰", label: "鸟瞰 Bird's Eye", desc: "正上方俯视，展示空间布局" },
    { value: "上帝视角", label: "上帝视角 God's Eye", desc: "正上方90度俯视" },
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
    { value: "弧形运动", label: "弧形运动 Arc Shot", desc: "围绕主体做弧线运动" },
    { value: "跟踪", label: "跟踪 Tracking", desc: "跟随主体移动" },
    { value: "手持", label: "手持 Handheld", desc: "模拟手持拍摄的轻微晃动" },
    { value: "稳定器", label: "稳定器 Steadicam", desc: "平滑的跟随运动" },
    { value: "升降", label: "升降 Crane", desc: "垂直升降，戏剧性揭示" },
    { value: "垂直升降", label: "垂直升降 Vertical Rise/Drop", desc: "无人机式垂直运动" },
    { value: "无人机", label: "无人机 Drone", desc: "空中飞行拍摄，壮观鸟瞰" },
    { value: "变焦", label: "变焦 Zoom", desc: "改变焦距，快速聚焦" },
    { value: "碰撞推进", label: "碰撞推进 Crash Zoom", desc: "快速猛推，制造紧迫感" },
    { value: "横移", label: "横移 Truck", desc: "水平平移（非旋转）" },
    { value: "穿越运动", label: "穿越运动 Through Shot", desc: "穿过窗户/门洞/缝隙" },
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

  // ---- B 组：镜头不完美感 ----
  lens_imperfection: [
    { value: "色差", label: "色差/色散 Chromatic Aberration", desc: "边缘出现彩色条纹" },
    { value: "暗角", label: "暗角 Vignetting", desc: "画面四角自然变暗" },
    { value: "桶形畸变", label: "桶形畸变 Barrel Distortion", desc: "广角镜头的画面弯曲" },
    { value: "枕形畸变", label: "枕形畸变 Pincushion", desc: "长焦镜头的画面内凹" },
    { value: "镜头眩光", label: "镜头眩光 Lens Flare", desc: "光源方向的光晕和光斑" },
    { value: "鬼影", label: "鬼影 Ghosting", desc: "多层镜片内反射产生的虚像" },
    { value: "对焦呼吸", label: "对焦呼吸 Focus Breathing", desc: "变焦时画面微缩放" },
    { value: "无瑕疵", label: "无瑕疵 Pristine", desc: "完美无瑕的光学表现" },
  ],
  bokeh_shape: [
    { value: "圆形", label: "圆形 Circular", desc: "高端镜头的完美圆形散景" },
    { value: "六角形", label: "多边形/六角形 Hexagonal", desc: "普通镜头光圈叶片形成" },
    { value: "猫眼形", label: "猫眼形 Cat's Eye", desc: "画面边缘拉长的椭圆散景" },
    { value: "旋转散景", label: "旋转散景 Swirly Bokeh", desc: "老式镜头的漩涡效果" },
    { value: "椭圆形", label: "椭圆形 Oval", desc: "变形宽银幕镜头的椭圆散景" },
    { value: "环形", label: "环形/甜甜圈 Donut", desc: "折返镜头的环形散景" },
    { value: "自定义", label: "自定义" },
  ],
  film_texture: [
    { value: "数字纯净", label: "数字纯净 Digital Clean", desc: "无纹理，现代数字感" },
    { value: "细腻胶片", label: "细腻胶片颗粒 Fine Grain", desc: "35mm 细颗粒，电影质感" },
    { value: "粗颗粒胶片", label: "粗颗粒胶片 Coarse Grain", desc: "16mm/Super 8 粗颗粒" },
    { value: "高ISO噪点", label: "高ISO数字噪点 High ISO Noise", desc: "暗光环境的彩色噪点" },
    { value: "果冻效应", label: "CMOS 果冻效应 Rolling Shutter", desc: "快速运动时的倾斜变形" },
    { value: "CRT扫描线", label: "CRT 扫描线 Scanlines", desc: "复古显示器效果" },
    { value: "VHS磁带", label: "VHS 磁带纹理 VHS Texture", desc: "磁带噪点、色偏、跟踪线" },
  ],
  handheld_style: [
    { value: "无", label: "无（三脚架稳定）", desc: "完全稳定，无任何晃动" },
    { value: "呼吸微抖", label: "呼吸感微抖 Breathing", desc: "专业手持，极轻微的呼吸起伏" },
    { value: "肩扛式", label: "肩扛式 Shoulder Rig", desc: "纪录片风格，中等晃动" },
    { value: "步行跟拍", label: "步行跟拍 Walking", desc: "随步伐节奏上下起伏" },
    { value: "奔跑跟拍", label: "奔跑跟拍 Running", desc: "剧烈晃动，紧迫感" },
    { value: "车内拍摄", label: "车内拍摄 In-Vehicle", desc: "引擎震动的持续微颤" },
    { value: "自定义", label: "自定义" },
  ],
  exposure_variation: [
    { value: "完美曝光", label: "完美曝光 Perfect", desc: "无任何曝光变化" },
    { value: "自动调整", label: "自动曝光调整 Auto Exposure", desc: "明暗场景切换时的渐变" },
    { value: "轻微过曝", label: "轻微过曝 Slight Overexposure", desc: "高光溢出，梦幻感" },
    { value: "轻微欠曝", label: "轻微欠曝 Slight Underexposure", desc: "暗部细节丢失，神秘感" },
    { value: "曝光呼吸", label: "曝光呼吸 Exposure Breathing", desc: "随光源变化的微波动" },
    { value: "故意剪影", label: "故意剪影 Silhouette", desc: "强逆光下的黑色轮廓" },
  ],
  white_balance_cast: [
    { value: "准确", label: "准确白平衡 Accurate", desc: "色彩还原准确" },
    { value: "偏暖", label: "偏暖 Warm Cast", desc: "室内钨丝灯未校正" },
    { value: "偏冷", label: "偏冷 Cool Cast", desc: "日光灯/阴天未校正" },
    { value: "偏绿", label: "偏绿 Green Cast", desc: "荧光灯特征色偏" },
    { value: "混合光源", label: "混合光源 Mixed", desc: "冷暖交错的复杂色温" },
    { value: "自定义", label: "自定义" },
  ],
  lens_coating: [
    { value: "现代多层", label: "现代多层镀膜 Multi-Coated", desc: "眩光少，色彩中性" },
    { value: "单层镀膜", label: "单层镀膜 Single-Coated", desc: "温暖的眩光，复古感" },
    { value: "无镀膜", label: "无镀膜 Uncoated", desc: "强烈眩光和低对比度" },
    { value: "变形宽银幕", label: "变形宽银幕镀膜 Anamorphic", desc: "水平蓝色眩光条" },
  ],
  focus_accuracy: [
    { value: "精确合焦", label: "精确合焦 Sharp Focus", desc: "完美锐利" },
    { value: "前跑焦", label: "轻微前跑焦 Front Focus", desc: "焦点略在主体前方" },
    { value: "后跑焦", label: "轻微后跑焦 Back Focus", desc: "焦点略在主体后方" },
    { value: "渐进合焦", label: "渐进合焦 Gradual Focus", desc: "从模糊到清晰的寻焦过程" },
    { value: "焦点游移", label: "焦点游移 Focus Drift", desc: "手动对焦的微小波动" },
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

  // ---- D 组：微观光影 ----
  caustics: [
    { value: "无", label: "无" },
    { value: "水面焦散", label: "水面焦散 Water Caustics", desc: "水面反射的波纹光斑投射在墙面/天花板" },
    { value: "玻璃焦散", label: "玻璃焦散 Glass Caustics", desc: "透过玻璃杯/水晶的彩虹光斑" },
    { value: "金属焦散", label: "金属焦散 Metal Caustics", desc: "抛光金属表面的反射光斑" },
    { value: "自定义", label: "自定义" },
  ],
  subsurface_scattering: [
    { value: "无", label: "无" },
    { value: "皮肤SSS", label: "皮肤 SSS Skin", desc: "光线穿透耳朵/手指边缘的红色透光" },
    { value: "树叶SSS", label: "树叶 SSS Leaves", desc: "阳光穿透叶片的翠绿发光" },
    { value: "蜡质SSS", label: "蜡烛/蜡质 SSS Wax", desc: "光线穿透蜡质的温暖发光" },
    { value: "薄织物SSS", label: "薄织物 SSS Fabric", desc: "光线穿透薄纱的柔和透光" },
    { value: "自定义", label: "自定义" },
  ],
  light_falloff: [
    { value: "自然衰减", label: "自然衰减 Inverse Square", desc: "平方反比定律，真实物理衰减" },
    { value: "线性衰减", label: "线性衰减 Linear", desc: "均匀减弱" },
    { value: "急剧衰减", label: "急剧衰减 Sharp Falloff", desc: "聚光灯效果，边缘锐利" },
    { value: "无衰减", label: "无衰减 No Falloff", desc: "平行光/阳光，均匀照射" },
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

  // ---- F 组：音频空间感 ----
  audio_space: [
    { value: "开阔户外", label: "开阔户外 Open Air", desc: "自然混响，声音扩散" },
    { value: "狭窄室内", label: "狭窄室内 Small Room", desc: "短混响，声音紧凑" },
    { value: "大厅教堂", label: "大厅/教堂 Cathedral", desc: "长混响，回声明显" },
    { value: "隧道走廊", label: "隧道/走廊 Tunnel", desc: "管状回声" },
    { value: "水下", label: "水下 Underwater", desc: "闷声，低频为主" },
    { value: "隔音室", label: "隔音室/录音棚 Anechoic", desc: "无混响，干声" },
    { value: "自定义", label: "自定义" },
  ],
  silence_use: [
    { value: "不使用", label: "不使用静默", desc: "持续有声音" },
    { value: "开场静默", label: "开场静默 Opening Silence", desc: "从寂静中开始" },
    { value: "高潮前静默", label: "高潮前静默 Pre-Climax", desc: "突然安静制造紧张" },
    { value: "结尾静默", label: "结尾静默 Ending Silence", desc: "声音逐渐消失" },
    { value: "对比静默", label: "对比静默 Contrast", desc: "喧闹后突然安静" },
    { value: "自定义", label: "自定义" },
  ],
  audio_distance: [
    { value: "极近", label: "极近 ASMR", desc: "耳语/呼吸，ASMR 级" },
    { value: "近距离", label: "近距离 Close", desc: "正常对话距离" },
    { value: "中距离", label: "中距离 Medium", desc: "房间对面" },
    { value: "远距离", label: "远距离 Far", desc: "街道对面" },
    { value: "极远", label: "极远 Very Far", desc: "远处的回声" },
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

  // ---- E 组：叙事结构 ----
  reveal_structure: [
    { value: "无", label: "无特殊结构", desc: "直接展示完整场景" },
    { value: "局部到全貌", label: "局部到全貌 Detail to Wide", desc: "从特写拉远揭示全景" },
    { value: "全貌到局部", label: "全貌到局部 Wide to Detail", desc: "从远景推近聚焦细节" },
    { value: "遮挡揭示", label: "遮挡揭示 Reveal from Cover", desc: "从障碍物后方移出" },
    { value: "焦点揭示", label: "焦点揭示 Focus Reveal", desc: "从失焦到合焦" },
    { value: "光线揭示", label: "光线揭示 Light Reveal", desc: "从黑暗到光明" },
    { value: "转身揭示", label: "转身揭示 Turn Reveal", desc: "主体转身面向镜头" },
    { value: "自定义", label: "自定义" },
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

  // 预置负面提示词
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
  negative_preset_ai: [
    { value: "过度平滑的皮肤", label: "过度平滑的皮肤 Over-smooth Skin" },
    { value: "不自然的对称", label: "不自然的对称 Unnatural Symmetry" },
    { value: "重复纹理图案", label: "重复纹理图案 Repeating Patterns" },
    { value: "漂浮的物体", label: "漂浮的物体 Floating Objects" },
    { value: "融合的手指", label: "融合的手指 Fused Fingers" },
    { value: "穿模穿透", label: "穿模/穿透 Clipping" },
    { value: "背景突变", label: "背景突变 Background Shift" },
  ],

  // 预置质量增强词
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
  booster_preset_realism: [
    { value: "微妙的镜头瑕疵", label: "微妙的镜头瑕疵 Subtle Lens Imperfections" },
    { value: "自然的皮肤纹理", label: "自然的皮肤纹理 Natural Skin Texture" },
    { value: "真实的环境磨损", label: "真实的环境磨损 Realistic Wear" },
    { value: "有机的运动轨迹", label: "有机的运动轨迹 Organic Motion" },
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
  { key: "scene", label: "场景描述", icon: "Clapperboard", desc: "主体、环境、物理真实感与感官深度" },
  { key: "visualStyle", label: "视觉风格", icon: "Palette", desc: "艺术风格与色彩方案" },
  { key: "cinematography", label: "摄影控制", icon: "Camera", desc: "镜头语言、构图与镜头个性" },
  { key: "lighting", label: "光照系统", icon: "Sun", desc: "布光方案、氛围与微观光影" },
  { key: "audio", label: "音频设计", icon: "Music", desc: "声音、音乐与空间感" },
  { key: "motion", label: "运动与叙事", icon: "Zap", desc: "动态控制与叙事结构" },
  { key: "technical", label: "技术参数", icon: "Settings", desc: "模型级生成参数" },
  { key: "quality", label: "质量控制", icon: "Shield", desc: "增强与约束指令" },
  { key: "postProcessing", label: "后期处理", icon: "Wand2", desc: "上采样与后处理" },
] as const;

// 默认蓝图数据
export function createDefaultBlueprint(): VideoBlueprint {
  return {
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
      micro_expression: "",
      environment: "",
      environment_weather: "",
      environment_season: "",
      environment_details: "",
      action: "",
      action_physical_detail: "",
      interaction: "",
      mood: "",
      narrative_context: "",
      surface_material: "",
      material_detail: "",
      physics_behavior: "",
      physics_detail: "",
      micro_elements: [],
      weathering_aging: "",
      interaction_physics: "",
      gravity_weight: "",
      sensory_layers: "",
      time_progression: "",
      spatial_depth_layers: "",
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
      lens_imperfection: [],
      bokeh_shape: "",
      film_texture: "",
      handheld_style: "",
      exposure_variation: "",
      white_balance_cast: "",
      lens_coating: "",
      focus_accuracy: "",
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
      caustics: "",
      subsurface_scattering: "",
      color_spill: "",
      light_falloff: "",
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
      audio_space: "",
      audio_layers: "",
      sync_points: "",
      silence_use: "",
      audio_distance: "",
    },
    motion: {
      subject_motion_speed: "",
      camera_motion_speed: "",
      time_effect: "",
      pacing: "",
      transition_in: "",
      transition_out: "",
      rhythm_reference: "",
      opening_frame: "",
      reveal_structure: "",
      emotion_arc: "",
      climax_moment: "",
      ending_frame: "",
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
