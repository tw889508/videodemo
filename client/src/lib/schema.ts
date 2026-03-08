// AI 视频生成蓝图数据结构
// 核心目标：组装出完美的提示词和参数，驱动 AI 视频生成达到最佳效果
// 语言规范：全部使用中文

export interface VideoBlueprint {
  scene: SceneDescription;
  visualStyle: VisualStyle;
  cinematography: Cinematography;
  lighting: Lighting;
  audio: AudioDesign;
  motion: MotionPacing;
  technical: TechnicalParameters;
  quality: QualityControl;
}

// ============================================================
// 场景描述
// 删除：subject_count, micro_expression, scene_complexity,
//        previous_shot_description, continuity_elements
// 合并：action_physical_detail, interaction → action
// 合并：material_detail → surface_material
// 合并：sensory_layers, time_progression, spatial_depth_layers → atmosphere_detail
// 迭代5 新增：physics_forces（力学交互描述，提升 Runway/Sora 等模型的物理真实感）
// 迭代5 新增：physics_constraints（刚性约束，防止物体变形/融化）
// ============================================================
export interface SceneDescription {
  // 主体信息
  subject_type: string;
  subject: string;
  subject_age: string;
  subject_gender: string;
  // 主体外观
  subject_appearance: string;
  subject_clothing: string;
  subject_body: string;
  subject_emotion: string;
  // 环境设定
  environment: string;
  environment_weather: string;
  environment_season: string;
  environment_details: string;
  // 动作与叙事（合并后）
  action: string;
  mood: string;
  narrative_context: string;
  // 物理真实感
  surface_material: string;
  physics_behavior: string;
  physics_forces: string;
  physics_constraints: string;
  micro_elements: string[];
  weathering_aging: string;
  // 氛围补充（合并后）
  atmosphere_detail: string;
}

// ============================================================
// 视觉风格（无变更）
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
// 摄影控制
// 迭代1：删除 camera_shake、white_balance_cast、focus_accuracy
// 迭代4：新增 composition_detail（画面元素的具体空间位置描述）
// ============================================================
export interface Cinematography {
  shot_type: string;
  camera_angle: string;
  framing: string;
  composition_detail: string;  // 迭代4：画面元素的具体空间布局描述
  camera_movement: string;
  movement_speed: string;
  movement_direction: string;
  lens_focal_length: string;
  depth_of_field: string;
  focus_target: string;
  focus_transition: string;
  pov_type: string;
  // 镜头个性
  lens_imperfection: string[];
  bokeh_shape: string;
  film_texture: string;
  handheld_style: string;
  exposure_variation: string;
}

// ============================================================
// 光照系统
// 删除：light_falloff（3D渲染引擎概念）
// 删除：caustics（过于专业，模型响应不稳定）
// 删除：subsurface_scattering（3D渲染术语，应在场景描述中用自然语言表达）
// ============================================================
export interface Lighting {
  time_of_day: string;
  key_light_type: string;
  key_light_direction: string;
  fill_light: string;
  rim_light: string;
  light_quality: string;
  color_temperature: string;
  practical_lights: string[];   // 迭代3：单选 → 多选（场景可能有多个画面内光源）
  atmospheric_effects: string[];
  shadow_style: string;
  color_spill: string;
}

// ============================================================
// 音频设计
// 删除：audio_mood（与场景模块的mood重叠）
// 迭代5 新增：dialogue_characters（结构化角色声音定义，支持 Kling 3 的多角色对话标签系统）
// ============================================================
export interface AudioDesign {
  ambient_sound: string;
  music_style: string;
  music_tempo: string;
  sound_effects: string[];
  dialogue: string;
  dialogue_characters: string;
  voiceover: string;
}

// ============================================================
// 运动与叙事
// 删除：transition_in, transition_out（后期剪辑操作）
// 删除：rhythm_reference（过于抽象，模型无法响应）
// 删除：subject_motion_speed, camera_motion_speed（与action描述和cinematography重叠）
// 迭代6 删除：reveal_structure（编剧术语，AI模型不理解）
// 迭代6 删除：emotion_arc（5-10秒视频不存在情绪弧线，这是长片叙事概念）
// 迭代6 合并：opening_frame + climax_moment + ending_frame → timeline_beats
// ============================================================
export interface MotionPacing {
  time_effect: string;
  pacing: string;
  // 时间轴叙事（合并后）
  timeline_beats: string;
}

// ============================================================
// 技术参数（模型 API 直接使用的参数）
// 迭代1：reference_strength 从 quality 模块移入
// 迭代2：input_image_url → start_frame_url（语义更清晰）
// 迭代2 新增：end_frame_url（首尾帧控制，Veo 3.1/Kling 3/Seedance/Hailuo 均支持）
// 迭代2 新增：enable_audio（原生音频开关，Kling 3/Veo 3.1/Sora 2/Seedance 支持）
// 迭代2 新增：motion_reference_url（运动迁移参考视频，Kling 3 motion-control）
// ============================================================
export interface TechnicalParameters {
  resolution: string;
  aspect_ratio: string;
  duration_seconds: number;
  fps: number;
  seed: number;
  guidance_scale: number;
  motion_strength: number;
  num_inference_steps: number;
  // 输入素材
  start_frame_url: string;       // 首帧图像（图生视频/首尾帧模式）
  end_frame_url: string;         // 尾帧图像（首尾帧模式，模型自动补间动画）
  input_video_url: string;       // 参考视频（视频生视频模式）
  motion_reference_url: string;  // 运动参考视频（运动迁移模式）
  reference_strength: number;
  // 音频控制
  enable_audio: boolean;         // 是否启用原生音频生成
}

// ============================================================
// 质量控制
// 删除：style_consistency, character_consistency（多镜头概念）
// 移出：reference_strength → technical（它是API参数）
// ============================================================
export interface QualityControl {
  negative_prompts: string[];
  quality_boosters: string[];
}

// ============================================================
// 枚举选项定义（全中文）
// ============================================================

export const ENUMS = {
  // ---- 场景描述 ----
  subject_type: [
    { value: "人物", label: "人物", desc: "叙事、广告、短片" },
    { value: "动物", label: "动物", desc: "自然纪录片、创意内容" },
    { value: "物体/产品", label: "物体/产品", desc: "产品展示、广告" },
    { value: "交通工具", label: "交通工具", desc: "汽车广告、动作场景" },
    { value: "建筑/空间", label: "建筑/空间", desc: "建筑展示、场景建立" },
    { value: "自然风景", label: "自然风景", desc: "风光片、氛围镜头" },
    { value: "抽象概念", label: "抽象概念", desc: "艺术创作、MV" },
    { value: "虚构生物", label: "虚构生物", desc: "奇幻、科幻" },
    { value: "文字/图形", label: "文字/图形", desc: "片头、标题卡" },
    { value: "多主体", label: "多主体", desc: "群戏、复杂场景" },
  ],
  subject_age: [
    { value: "婴儿", label: "婴儿（0-2岁）" },
    { value: "幼儿", label: "幼儿（3-6岁）" },
    { value: "儿童", label: "儿童（7-12岁）" },
    { value: "青少年", label: "青少年（13-17岁）" },
    { value: "青年", label: "青年（18-30岁）" },
    { value: "中年", label: "中年（31-55岁）" },
    { value: "老年", label: "老年（55岁以上）" },
    { value: "不确定", label: "不确定/不适用" },
  ],
  subject_gender: [
    { value: "男性", label: "男性" },
    { value: "女性", label: "女性" },
    { value: "中性", label: "中性/不确定" },
    { value: "不适用", label: "不适用" },
  ],
  subject_emotion: [
    { value: "平静", label: "平静", desc: "面无表情，内心安宁" },
    { value: "微笑", label: "微笑", desc: "嘴角上扬，温和愉悦" },
    { value: "大笑", label: "大笑", desc: "开怀大笑，喜悦外露" },
    { value: "悲伤", label: "悲伤", desc: "眉头微蹙，眼神低垂" },
    { value: "哭泣", label: "哭泣", desc: "泪流满面，悲痛欲绝" },
    { value: "愤怒", label: "愤怒", desc: "眉头紧锁，目光凌厉" },
    { value: "恐惧", label: "恐惧", desc: "瞳孔放大，面色苍白" },
    { value: "惊讶", label: "惊讶", desc: "眼睛睁大，嘴巴微张" },
    { value: "厌恶", label: "厌恶", desc: "皱鼻撇嘴，回避目光" },
    { value: "困惑", label: "困惑", desc: "歪头皱眉，若有所思" },
    { value: "坚定", label: "坚定", desc: "目光如炬，嘴唇紧抿" },
    { value: "疲倦", label: "疲倦", desc: "眼皮沉重，无精打采" },
    { value: "警惕", label: "警惕", desc: "目光扫视，肌肉紧绷" },
    { value: "沉思", label: "沉思", desc: "目光空远，陷入思考" },
    { value: "狂喜", label: "狂喜", desc: "手舞足蹈，难以自持" },
    { value: "绝望", label: "绝望", desc: "眼神空洞，了无生气" },
    { value: "冷漠", label: "冷漠", desc: "面无表情，毫无波澜" },
    { value: "怀旧", label: "怀旧", desc: "目光柔和，嘴角微翘" },
    { value: "骄傲", label: "骄傲", desc: "昂首挺胸，嘴角上扬" },
    { value: "害羞", label: "害羞", desc: "低头回避，面颊泛红" },
    { value: "自定义", label: "自定义（在下方描述）" },
  ],
  environment_weather: [
    { value: "晴天", label: "晴天", desc: "万里无云，阳光明媚" },
    { value: "多云", label: "多云", desc: "云层部分遮挡阳光" },
    { value: "阴天", label: "阴天", desc: "厚云层，均匀漫射光" },
    { value: "小雨", label: "小雨", desc: "细雨绵绵，地面微湿" },
    { value: "大雨", label: "大雨", desc: "倾盆大雨，水花四溅" },
    { value: "暴风雨", label: "暴风雨", desc: "狂风暴雨，电闪雷鸣" },
    { value: "小雪", label: "小雪", desc: "雪花轻飘，薄薄积雪" },
    { value: "大雪", label: "大雪", desc: "鹅毛大雪，厚厚积雪" },
    { value: "暴风雪", label: "暴风雪", desc: "狂风卷雪，能见度极低" },
    { value: "雾", label: "雾", desc: "浓雾弥漫，能见度低" },
    { value: "冰雹", label: "冰雹", desc: "冰粒砸落" },
    { value: "沙尘暴", label: "沙尘暴", desc: "黄沙漫天" },
    { value: "龙卷风", label: "龙卷风", desc: "旋转气柱" },
    { value: "极光", label: "极光", desc: "天空中的彩色光带" },
    { value: "无", label: "无/室内" },
  ],
  environment_season: [
    { value: "春天", label: "春天", desc: "万物复苏，嫩绿花开" },
    { value: "夏天", label: "夏天", desc: "烈日炎炎，绿荫浓密" },
    { value: "秋天", label: "秋天", desc: "金黄落叶，天高气爽" },
    { value: "冬天", label: "冬天", desc: "银装素裹，寒风凛冽" },
    { value: "不适用", label: "不适用" },
  ],
  mood: [
    { value: "紧张", label: "紧张", desc: "悬疑、惊悚场景" },
    { value: "悬疑", label: "悬疑", desc: "侦探、悬疑场景" },
    { value: "浪漫", label: "浪漫", desc: "爱情、温馨场景" },
    { value: "孤独", label: "孤独", desc: "文艺、内省场景" },
    { value: "欢快", label: "欢快", desc: "喜剧、广告场景" },
    { value: "史诗", label: "史诗", desc: "战争、奇幻场景" },
    { value: "恐怖", label: "恐怖", desc: "恐怖片场景" },
    { value: "宁静", label: "宁静", desc: "自然、冥想场景" },
    { value: "忧郁", label: "忧郁", desc: "文艺、回忆场景" },
    { value: "愤怒", label: "愤怒", desc: "动作、冲突场景" },
    { value: "梦幻", label: "梦幻", desc: "超现实、MV 场景" },
    { value: "荒诞", label: "荒诞", desc: "实验、创意场景" },
    { value: "温暖", label: "温暖", desc: "家庭、治愈场景" },
    { value: "压抑", label: "压抑", desc: "反乌托邦、心理场景" },
    { value: "震撼", label: "震撼", desc: "自然奇观、科幻场景" },
    { value: "幽默", label: "幽默", desc: "喜剧、轻松场景" },
    { value: "怀旧", label: "怀旧", desc: "回忆、复古场景" },
    { value: "神圣", label: "神圣", desc: "宗教、仪式场景" },
  ],

  // ---- 物理真实感 ----
  surface_material: [
    { value: "皮肤", label: "皮肤", desc: "毛孔、汗珠、细纹可见" },
    { value: "镜面金属", label: "镜面金属", desc: "高反射率，清晰映射环境" },
    { value: "拉丝金属", label: "拉丝金属", desc: "细密划痕纹理，柔和反射" },
    { value: "锈蚀金属", label: "锈蚀金属", desc: "氧化斑驳，粗糙表面" },
    { value: "丝绸", label: "丝绸", desc: "光滑流动，高光泽反射" },
    { value: "棉麻", label: "棉麻", desc: "自然纹理，哑光质感" },
    { value: "皮革", label: "皮革", desc: "纹理细腻，半光泽" },
    { value: "针织", label: "针织", desc: "编织纹理，柔软蓬松" },
    { value: "木材", label: "木材", desc: "年轮纹理、磨损痕迹" },
    { value: "透明玻璃", label: "透明玻璃", desc: "折射、反射、透光" },
    { value: "磨砂玻璃", label: "磨砂玻璃", desc: "漫射透光，模糊背景" },
    { value: "大理石", label: "大理石", desc: "光滑纹理，高端质感" },
    { value: "粗糙岩石", label: "粗糙岩石", desc: "粗糙表面，自然纹理" },
    { value: "水", label: "水", desc: "透明、折射、波纹" },
    { value: "油", label: "油", desc: "粘稠、彩虹反射" },
    { value: "塑料/树脂", label: "塑料/树脂", desc: "光滑或磨砂，均匀质感" },
    { value: "纸张", label: "纸张", desc: "纤维纹理，吸光表面" },
    { value: "自定义", label: "自定义" },
  ],
  physics_behavior: [
    { value: "轻盈布料飘动", label: "轻盈布料飘动", desc: "丝绸、薄纱随风轻柔飘动" },
    { value: "厚重布料摆动", label: "厚重布料摆动", desc: "厚棉布、皮革缓慢摆动" },
    { value: "风中发丝飘散", label: "风中发丝飘散", desc: "发丝随风自然飘散" },
    { value: "湿发贴合", label: "湿发贴合", desc: "湿润头发贴合皮肤" },
    { value: "液体滴落", label: "液体滴落", desc: "水滴沿表面缓慢滑落" },
    { value: "液体溅射", label: "液体溅射", desc: "液体飞溅散射" },
    { value: "轻烟袅袅", label: "轻烟袅袅", desc: "细烟缓慢上升扩散" },
    { value: "浓烟翻滚", label: "浓烟翻滚", desc: "浓密烟雾翻滚涌动" },
    { value: "灰尘飘浮", label: "灰尘飘浮", desc: "微小颗粒在空气中飘浮" },
    { value: "花瓣飘落", label: "花瓣飘落", desc: "花瓣轻柔飘落" },
    { value: "雪花飘落", label: "雪花飘落", desc: "雪花缓慢飘落" },
    { value: "火星飞溅", label: "火星飞溅", desc: "火星四溅上升" },
    { value: "刚体碰撞", label: "刚体碰撞", desc: "硬物碰撞弹跳" },
    { value: "柔体变形", label: "柔体变形", desc: "柔软物体挤压变形" },
    { value: "失重漂浮", label: "失重漂浮", desc: "太空、梦境中的漂浮感" },
    { value: "沉重坠落", label: "沉重坠落", desc: "如巨石坠落、建筑倒塌" },
    { value: "自定义", label: "自定义" },
  ],
  micro_elements: [
    { value: "空气灰尘", label: "空气灰尘", desc: "阳光下可见的微小颗粒" },
    { value: "水汽/蒸汽", label: "水汽/蒸汽", desc: "呼出的白气、热饮蒸汽" },
    { value: "飞虫/花粉", label: "飞虫/花粉", desc: "空气中飘浮的花粉或飞虫" },
    { value: "雨滴/水珠", label: "雨滴/水珠", desc: "表面凝结的水珠" },
    { value: "火星/余烬", label: "火星/余烬", desc: "飘浮的火星和余烬" },
    { value: "斑驳光影", label: "斑驳光影", desc: "透过树叶的斑驳光影" },
    { value: "镜面反射", label: "镜面反射", desc: "镜面或光滑表面的环境反射" },
    { value: "积水反射", label: "积水反射", desc: "地面积水反射天空和灯光" },
    { value: "蛛网/露珠", label: "蛛网/露珠", desc: "蛛网上的露珠折射光线" },
    { value: "自定义", label: "自定义" },
  ],

  // ---- 视觉风格 ----
  art_style: [
    { value: "写实", label: "写实", desc: "接近真实世界的视觉效果" },
    { value: "超写实", label: "超写实", desc: "超越现实的极致细节" },
    { value: "赛博朋克", label: "赛博朋克", desc: "霓虹灯、高科技低生活" },
    { value: "蒸汽朋克", label: "蒸汽朋克", desc: "维多利亚时代、齿轮机械" },
    { value: "水墨画", label: "水墨画", desc: "中国传统水墨风格" },
    { value: "吉卜力风", label: "吉卜力风", desc: "宫崎骏式温暖手绘动画" },
    { value: "迪士尼/皮克斯3D", label: "迪士尼/皮克斯3D", desc: "3D 动画风格" },
    { value: "日式动漫", label: "日式动漫", desc: "日本动画风格" },
    { value: "油画", label: "油画", desc: "古典油画质感" },
    { value: "水彩", label: "水彩", desc: "水彩画风格" },
    { value: "极简主义", label: "极简主义", desc: "简洁、大量留白" },
    { value: "波普艺术", label: "波普艺术", desc: "安迪·沃霍尔式鲜艳色块" },
    { value: "哥特", label: "哥特", desc: "黑暗、尖拱、神秘" },
    { value: "复古胶片", label: "复古胶片", desc: "老式胶片褪色与颗粒感" },
    { value: "霓虹黑暗", label: "霓虹黑暗", desc: "黑色电影与霓虹灯结合" },
    { value: "超现实主义", label: "超现实主义", desc: "达利式梦境与扭曲现实" },
    { value: "纪录片", label: "纪录片", desc: "真实、手持、自然光" },
    { value: "商业广告", label: "商业广告", desc: "干净、明亮、产品导向" },
    { value: "MV风格", label: "MV风格", desc: "快速剪辑、强烈视觉冲击" },
    { value: "Vlog", label: "Vlog", desc: "个人化、轻松、日常" },
    { value: "像素艺术", label: "像素艺术", desc: "复古游戏像素风格" },
    { value: "剪纸", label: "剪纸", desc: "剪纸/拼贴艺术风格" },
    { value: "黑白", label: "黑白", desc: "经典黑白影像" },
    { value: "低多边形", label: "低多边形", desc: "几何化 3D 风格" },
    { value: "监控录像", label: "监控录像", desc: "低画质、固定机位、时间戳" },
    { value: "手机拍摄", label: "手机拍摄", desc: "竖屏、自动对焦、日常感" },
    { value: "黑色电影", label: "黑色电影", desc: "高对比黑白，硬光阴影" },
    { value: "黏土动画", label: "黏土动画", desc: "定格动画，黏土材质" },
    { value: "转描动画", label: "转描动画", desc: "基于实拍的手绘描摹" },
    { value: "无人机航拍", label: "无人机航拍", desc: "高空俯瞰，壮观视角" },
  ],
  color_palette: [
    { value: "青橙对比", label: "青橙对比", desc: "好莱坞经典电影配色" },
    { value: "莫兰迪", label: "莫兰迪", desc: "低饱和度灰调色系" },
    { value: "暖色调", label: "暖色调", desc: "红橙黄为主的温暖色系" },
    { value: "冷色调", label: "冷色调", desc: "蓝绿紫为主的冷峻色系" },
    { value: "单色", label: "单色", desc: "单一色相的深浅变化" },
    { value: "互补色", label: "互补色", desc: "色轮对角的强烈对比" },
    { value: "类似色", label: "类似色", desc: "色轮相邻的和谐配色" },
    { value: "黑白灰", label: "黑白灰", desc: "无彩色系" },
    { value: "霓虹色", label: "霓虹色", desc: "高饱和荧光色" },
    { value: "大地色", label: "大地色", desc: "棕褐绿的自然色系" },
    { value: "粉彩色", label: "粉彩色", desc: "柔和淡雅的低饱和色" },
    { value: "金属色", label: "金属色", desc: "金银铜的金属质感色" },
    { value: "自定义", label: "自定义" },
  ],
  color_grading: [
    { value: "高对比度冷色调", label: "高对比度冷色调", desc: "暗部偏青，高光偏白" },
    { value: "褪色胶片感", label: "褪色胶片感", desc: "黑位提升，色彩褪色" },
    { value: "金色时刻暖调", label: "金色时刻暖调", desc: "整体偏暖金色" },
    { value: "银翼杀手风", label: "银翼杀手风", desc: "暗部偏青，高光偏橙" },
    { value: "矩阵绿调", label: "矩阵绿调", desc: "整体偏绿的科技感" },
    { value: "漂白旁路", label: "漂白旁路", desc: "低饱和高对比" },
    { value: "交叉冲洗", label: "交叉冲洗", desc: "非常规色彩偏移" },
    { value: "日系清新", label: "日系清新", desc: "低对比高亮度柔和色调" },
    { value: "HDR高动态", label: "HDR高动态", desc: "极宽动态范围" },
    { value: "黑白高对比", label: "黑白高对比", desc: "经典黑白影调" },
    { value: "自定义", label: "自定义" },
  ],
  texture: [
    { value: "35mm胶片颗粒", label: "35mm 胶片颗粒", desc: "经典电影胶片质感" },
    { value: "16mm胶片颗粒", label: "16mm 胶片颗粒", desc: "更粗的颗粒，独立电影感" },
    { value: "8mm超8胶片", label: "8mm 超8胶片", desc: "家庭录像复古感" },
    { value: "数字锐利", label: "数字锐利", desc: "现代数字相机的锐利画面" },
    { value: "油画笔触", label: "油画笔触", desc: "可见笔触的油画质感" },
    { value: "水彩晕染", label: "水彩晕染", desc: "水彩的自然晕染效果" },
    { value: "铅笔素描", label: "铅笔素描", desc: "铅笔线条质感" },
    { value: "版画", label: "版画", desc: "木刻版画的粗犷线条" },
    { value: "VHS录像带", label: "VHS录像带", desc: "模拟录像带的噪点和色偏" },
    { value: "湿润感", label: "湿润感", desc: "表面有水膜反射" },
    { value: "哑光/磨砂", label: "哑光/磨砂", desc: "无反射的柔和表面" },
    { value: "丝绒质感", label: "丝绒质感", desc: "柔软吸光的织物感" },
    { value: "金属拉丝", label: "金属拉丝", desc: "细密划痕的金属表面" },
    { value: "无", label: "无/默认" },
  ],

  // ---- 摄影控制 ----
  shot_type: [
    { value: "大远景", label: "大远景", desc: "广阔环境全貌，建立场景" },
    { value: "远景", label: "远景", desc: "完整环境 + 主体全身" },
    { value: "全景", label: "全景", desc: "主体全身，展示人物与环境" },
    { value: "中远景", label: "中远景", desc: "膝盖以上，动作场景" },
    { value: "中景", label: "中景", desc: "腰部以上，对话互动" },
    { value: "中近景", label: "中近景", desc: "胸部以上，表情与对话" },
    { value: "近景", label: "近景", desc: "面部或物体特定部分" },
    { value: "大特写", label: "大特写", desc: "眼睛、嘴唇等极小区域" },
    { value: "插入镜头", label: "插入镜头", desc: "特定物体或细节的特写切入" },
    { value: "过肩镜头", label: "过肩镜头", desc: "对话场景的经典构图" },
    { value: "双人镜头", label: "双人镜头", desc: "两个人物同框" },
    { value: "群像镜头", label: "群像镜头", desc: "多个人物同框" },
  ],
  camera_angle: [
    { value: "鸟瞰", label: "鸟瞰", desc: "正上方俯视，展示空间布局" },
    { value: "上帝视角", label: "上帝视角", desc: "正上方90度俯视" },
    { value: "高角度", label: "高角度", desc: "从上方俯拍，主体显得渺小" },
    { value: "平视", label: "平视", desc: "自然、中性的视角" },
    { value: "低角度", label: "低角度", desc: "从下方仰拍，主体显得强大" },
    { value: "蚁视", label: "蚁视", desc: "极低角度，从地面仰望" },
    { value: "荷兰角", label: "荷兰角", desc: "倾斜画面，营造不安感" },
    { value: "过肩", label: "过肩", desc: "从一个角色肩膀后方拍摄" },
    { value: "主观视角", label: "主观视角", desc: "模拟角色的第一人称视角" },
  ],
  framing: [
    { value: "三分法", label: "三分法", desc: "主体位于三分线交叉点" },
    { value: "中心构图", label: "中心构图", desc: "主体居中，对称感" },
    { value: "对称构图", label: "对称构图", desc: "画面左右或上下对称" },
    { value: "框中框", label: "框中框", desc: "利用门窗形成画中画" },
    { value: "引导线", label: "引导线", desc: "利用线条引导视线至主体" },
    { value: "前景遮挡", label: "前景遮挡", desc: "前景元素部分遮挡，增加层次" },
    { value: "负空间", label: "负空间", desc: "大量留白，突出主体孤立感" },
    { value: "紧凑构图", label: "紧凑构图", desc: "主体填满画面，压迫感" },
  ],
  camera_movement: [
    { value: "静态", label: "静态", desc: "摄像机固定不动，最高画质" },
    { value: "推", label: "推", desc: "向主体靠近，增加紧张感" },
    { value: "拉", label: "拉", desc: "远离主体，揭示环境" },
    { value: "水平平移", label: "水平平移", desc: "水平旋转，跟随动作" },
    { value: "垂直摇移", label: "垂直摇移", desc: "垂直旋转，展示高度" },
    { value: "轨道环绕", label: "轨道环绕", desc: "围绕主体旋转，产品展示" },
    { value: "弧形运动", label: "弧形运动", desc: "围绕主体做弧线运动" },
    { value: "跟踪", label: "跟踪", desc: "跟随主体移动" },
    { value: "手持", label: "手持", desc: "模拟手持拍摄的轻微晃动" },
    { value: "稳定器", label: "稳定器", desc: "平滑的跟随运动" },
    { value: "升降", label: "升降", desc: "垂直升降，戏剧性揭示" },
    { value: "无人机", label: "无人机", desc: "空中飞行拍摄，壮观鸟瞰" },
    { value: "变焦", label: "变焦", desc: "改变焦距，快速聚焦" },
    { value: "碰撞推进", label: "碰撞推进", desc: "快速猛推，制造紧迫感" },
    { value: "横移", label: "横移", desc: "水平平移（非旋转）" },
    { value: "穿越运动", label: "穿越运动", desc: "穿过窗户/门洞/缝隙" },
    { value: "旋转", label: "旋转", desc: "沿镜头轴旋转，眩晕感" },
    { value: "一镜到底", label: "一镜到底", desc: "不间断的连续运动" },
    { value: "甩镜头", label: "甩镜头", desc: "快速水平甩动，运动模糊" },
    { value: "荷兰倾斜运动", label: "荷兰倾斜运动", desc: "倾斜角度的运动，不安感" },
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
    { value: "对角线移动", label: "对角线移动" },
    { value: "S形曲线运动", label: "S形曲线运动" },
    { value: "自定义", label: "自定义" },
  ],
  lens_focal_length: [
    { value: "14mm超广角", label: "14mm 超广角", desc: "极宽视角，强烈透视畸变" },
    { value: "24mm广角", label: "24mm 广角", desc: "宽视角，轻微畸变" },
    { value: "35mm小广角", label: "35mm 小广角", desc: "接近人眼视角" },
    { value: "50mm标准", label: "50mm 标准", desc: "最接近人眼的自然视角" },
    { value: "85mm中长焦", label: "85mm 中长焦", desc: "压缩透视，背景虚化" },
    { value: "135mm长焦", label: "135mm 长焦", desc: "强烈压缩，极浅景深" },
    { value: "200mm+超长焦", label: "200mm+ 超长焦", desc: "极度压缩，主体与背景叠加" },
    { value: "微距", label: "微距", desc: "极近距离，放大细节" },
    { value: "鱼眼", label: "鱼眼", desc: "180° 视角，桶形畸变" },
    { value: "移轴", label: "移轴", desc: "选择性焦平面，微缩效果" },
    { value: "变形宽银幕", label: "变形宽银幕", desc: "2.39:1 宽银幕，椭圆散景" },
  ],
  depth_of_field: [
    { value: "浅景深", label: "浅景深", desc: "背景大幅虚化，突出主体" },
    { value: "中等景深", label: "中等景深", desc: "适度虚化" },
    { value: "深景深", label: "深景深", desc: "全画面清晰" },
  ],
  focus_transition: [
    { value: "无", label: "无变化" },
    { value: "前景到背景", label: "前景到背景" },
    { value: "背景到前景", label: "背景到前景" },
    { value: "跟焦", label: "跟焦", desc: "焦点跟随主体移动" },
    { value: "架焦", label: "架焦", desc: "焦点在两个主体间切换" },
    { value: "失焦", label: "失焦", desc: "画面逐渐失焦" },
    { value: "自定义", label: "自定义" },
  ],
  pov_type: [
    { value: "第三人称", label: "第三人称" },
    { value: "第一人称", label: "第一人称" },
    { value: "上帝视角", label: "上帝视角" },
  ],

  // ---- 镜头个性 ----
  lens_imperfection: [
    { value: "色差/色散", label: "色差/色散", desc: "边缘出现彩色条纹" },
    { value: "暗角", label: "暗角", desc: "画面四角自然变暗" },
    { value: "桶形畸变", label: "桶形畸变", desc: "广角镜头的画面弯曲" },
    { value: "枕形畸变", label: "枕形畸变", desc: "长焦镜头的画面内凹" },
    { value: "镜头眩光", label: "镜头眩光", desc: "光源方向的光晕和光斑" },
    { value: "鬼影", label: "鬼影", desc: "多层镜片内反射产生的虚像" },
    { value: "对焦呼吸", label: "对焦呼吸", desc: "变焦时画面微缩放" },
    { value: "无瑕疵", label: "无瑕疵", desc: "完美无瑕的光学表现" },
  ],
  bokeh_shape: [
    { value: "圆形", label: "圆形", desc: "高端镜头的完美圆形散景" },
    { value: "六角形", label: "六角形", desc: "普通镜头光圈叶片形成" },
    { value: "猫眼形", label: "猫眼形", desc: "画面边缘拉长的椭圆散景" },
    { value: "旋转散景", label: "旋转散景", desc: "老式镜头的漩涡效果" },
    { value: "椭圆形", label: "椭圆形", desc: "变形宽银幕镜头的椭圆散景" },
    { value: "环形", label: "环形", desc: "折返镜头的甜甜圈散景" },
    { value: "自定义", label: "自定义" },
  ],
  film_texture: [
    { value: "数字纯净", label: "数字纯净", desc: "无纹理，现代数字感" },
    { value: "细腻胶片颗粒", label: "细腻胶片颗粒", desc: "35mm 细颗粒，电影质感" },
    { value: "粗颗粒胶片", label: "粗颗粒胶片", desc: "16mm 粗颗粒" },
    { value: "高ISO数字噪点", label: "高ISO数字噪点", desc: "暗光环境的彩色噪点" },
    { value: "果冻效应", label: "果冻效应", desc: "快速运动时的倾斜变形" },
    { value: "CRT扫描线", label: "CRT扫描线", desc: "复古显示器效果" },
    { value: "VHS磁带纹理", label: "VHS磁带纹理", desc: "磁带噪点、色偏、跟踪线" },
  ],
  handheld_style: [
    { value: "无", label: "无（三脚架稳定）", desc: "完全稳定，无任何晃动" },
    { value: "呼吸微抖", label: "呼吸感微抖", desc: "专业手持，极轻微的呼吸起伏" },
    { value: "肩扛式", label: "肩扛式", desc: "纪录片风格，中等晃动" },
    { value: "步行跟拍", label: "步行跟拍", desc: "随步伐节奏上下起伏" },
    { value: "奔跑跟拍", label: "奔跑跟拍", desc: "剧烈晃动，紧迫感" },
    { value: "车内拍摄", label: "车内拍摄", desc: "引擎震动的持续微颤" },
    { value: "自定义", label: "自定义" },
  ],
  exposure_variation: [
    { value: "完美曝光", label: "完美曝光", desc: "无任何曝光变化" },
    { value: "自动曝光调整", label: "自动曝光调整", desc: "明暗场景切换时的渐变" },
    { value: "轻微过曝", label: "轻微过曝", desc: "高光溢出，梦幻感" },
    { value: "轻微欠曝", label: "轻微欠曝", desc: "暗部细节丢失，神秘感" },
    { value: "曝光呼吸", label: "曝光呼吸", desc: "随光源变化的微波动" },
    { value: "故意剪影", label: "故意剪影", desc: "强逆光下的黑色轮廓" },
  ],

  // ---- 光照系统 ----
  time_of_day: [
    { value: "黎明", label: "黎明", desc: "微弱的冷蓝色光，天际线泛白" },
    { value: "日出", label: "日出", desc: "温暖的橙金色低角度光" },
    { value: "金色时刻", label: "金色时刻", desc: "柔和金色光线，长影子" },
    { value: "上午", label: "上午", desc: "明亮、清新的自然光" },
    { value: "正午", label: "正午", desc: "强烈顶光，短影子，高对比" },
    { value: "下午", label: "下午", desc: "温暖但不刺眼的侧光" },
    { value: "日落", label: "日落", desc: "浓烈的橙红色光线" },
    { value: "蓝色时刻", label: "蓝色时刻", desc: "日落后的深蓝色天空" },
    { value: "黄昏", label: "黄昏", desc: "天色渐暗，混合色温" },
    { value: "夜晚", label: "夜晚", desc: "黑暗环境，依赖人工光源" },
    { value: "午夜", label: "午夜", desc: "极暗环境，月光或极少光源" },
    { value: "阴天", label: "阴天", desc: "均匀漫射光，无明显影子" },
  ],
  key_light_type: [
    { value: "自然阳光", label: "自然阳光" },
    { value: "柔和窗光", label: "柔和窗光" },
    { value: "聚光灯", label: "聚光灯" },
    { value: "霓虹灯", label: "霓虹灯" },
    { value: "烛光", label: "烛光" },
    { value: "月光", label: "月光" },
    { value: "荧光灯", label: "荧光灯" },
    { value: "LED面板", label: "LED面板" },
    { value: "篝火", label: "篝火" },
    { value: "屏幕光", label: "屏幕光" },
    { value: "车灯", label: "车灯" },
    { value: "闪电", label: "闪电" },
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
    { value: "柔光", label: "柔光", desc: "柔和的漫射光线" },
    { value: "硬光", label: "硬光", desc: "锐利的直射光线" },
    { value: "漫射光", label: "漫射光", desc: "均匀散射的光线" },
  ],
  color_temperature: [
    { value: "极暖（2700K）", label: "极暖（2700K）", desc: "烛光/白炽灯色温" },
    { value: "暖（3500K）", label: "暖（3500K）", desc: "日出/日落色温" },
    { value: "中性（5000K）", label: "中性（5000K）", desc: "正午日光色温" },
    { value: "冷（6500K）", label: "冷（6500K）", desc: "阴天/荧光灯色温" },
    { value: "极冷（8000K+）", label: "极冷（8000K+）", desc: "蓝天/月光色温" },
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
    { value: "体积光", label: "体积光", desc: "可见光束穿过空气" },
    { value: "薄雾", label: "薄雾", desc: "轻微空气散射，增加层次" },
    { value: "浓雾", label: "浓雾", desc: "大幅降低能见度" },
    { value: "烟尘", label: "烟尘", desc: "空气中颗粒物散射光线" },
    { value: "雨中光线", label: "雨中光线", desc: "雨滴折射和反射光线" },
    { value: "镜头光晕", label: "镜头光晕", desc: "光源直射镜头产生光斑" },
    { value: "散景光斑", label: "散景光斑", desc: "失焦光源形成的圆形光斑" },
    { value: "霓虹反射", label: "霓虹反射", desc: "霓虹灯在湿润表面的反射" },
    { value: "火光", label: "火光", desc: "跳动的暖色火焰光" },
    { value: "闪电", label: "闪电", desc: "瞬间的强烈白光" },
    { value: "极光", label: "极光", desc: "天空中的彩色光带" },
    { value: "水下焦散", label: "水下焦散", desc: "水面折射在水底的光纹" },
    { value: "粉尘飞扬", label: "粉尘飞扬", desc: "空气中可见的微粒" },
    { value: "雪花飘落", label: "雪花飘落", desc: "飘落的雪花散射光线" },
  ],
  shadow_style: [
    { value: "柔和渐变", label: "柔和渐变", desc: "自然柔和的阴影过渡" },
    { value: "锐利边缘", label: "锐利边缘", desc: "清晰锐利的阴影轮廓" },
    { value: "戏剧性明暗对比", label: "戏剧性明暗对比", desc: "强烈的光暗对比" },
  ],

  // ---- 音频设计 ----
  ambient_sound: [
    { value: "城市街道", label: "城市街道", desc: "车流、人群、喇叭" },
    { value: "森林", label: "森林", desc: "鸟鸣、风吹树叶、虫鸣" },
    { value: "海边", label: "海边", desc: "海浪、海鸥、风声" },
    { value: "雨声", label: "雨声", desc: "雨滴打在不同表面" },
    { value: "室内安静", label: "室内安静", desc: "空调嗡嗡声、时钟滴答" },
    { value: "咖啡馆", label: "咖啡馆", desc: "轻声交谈、杯碟碰撞" },
    { value: "工厂/工业", label: "工厂/工业", desc: "机器运转、金属碰撞" },
    { value: "太空/真空", label: "太空/真空", desc: "寂静或低频嗡鸣" },
    { value: "水下", label: "水下", desc: "气泡声、水流声" },
    { value: "战场", label: "战场", desc: "爆炸、枪声、呐喊" },
    { value: "自定义", label: "自定义" },
  ],
  music_style: [
    { value: "管弦乐", label: "管弦乐", desc: "交响乐团编制" },
    { value: "电子合成器", label: "电子合成器", desc: "合成器电子音乐" },
    { value: "钢琴独奏", label: "钢琴独奏", desc: "纯钢琴演奏" },
    { value: "吉他原声", label: "吉他原声", desc: "木吉他弹奏" },
    { value: "氛围音乐", label: "氛围音乐", desc: "环境氛围电子音乐" },
    { value: "爵士", label: "爵士", desc: "爵士乐风格" },
    { value: "摇滚", label: "摇滚", desc: "摇滚乐风格" },
    { value: "嘻哈", label: "嘻哈", desc: "嘻哈/说唱风格" },
    { value: "古典", label: "古典", desc: "古典音乐" },
    { value: "民族", label: "民族", desc: "民族/世界音乐" },
    { value: "电影配乐", label: "电影配乐", desc: "电影配乐风格" },
    { value: "Lo-Fi", label: "Lo-Fi", desc: "低保真放松音乐" },
    { value: "无音乐", label: "无音乐", desc: "不使用背景音乐" },
    { value: "自定义", label: "自定义" },
  ],
  music_tempo: [
    { value: "极慢", label: "极慢", desc: "40-60 BPM" },
    { value: "慢", label: "慢", desc: "60-80 BPM" },
    { value: "中等", label: "中等", desc: "80-120 BPM" },
    { value: "快", label: "快", desc: "120-160 BPM" },
    { value: "极快", label: "极快", desc: "160+ BPM" },
  ],

  // ---- 运动与叙事 ----
  time_effect: [
    { value: "正常速度", label: "正常速度", desc: "无特殊时间效果" },
    { value: "慢动作", label: "慢动作", desc: "降速播放，强调动作细节" },
    { value: "超级慢动作", label: "超级慢动作", desc: "极度降速，如子弹时间" },
    { value: "延时摄影", label: "延时摄影", desc: "加速播放，压缩时间流逝" },
    { value: "超延时", label: "超延时", desc: "带空间移动的延时摄影" },
    { value: "定格", label: "定格", desc: "画面在某一刻静止" },
    { value: "速度渐变", label: "速度渐变", desc: "速度平滑过渡变化" },
    { value: "倒放", label: "倒放", desc: "时间倒流播放" },
  ],
  pacing: [
    { value: "沉思的", label: "沉思的", desc: "缓慢、留白、内省" },
    { value: "平稳的", label: "平稳的", desc: "均匀、稳定的节奏" },
    { value: "紧凑的", label: "紧凑的", desc: "快节奏、信息密集" },
    { value: "充满活力的", label: "充满活力的", desc: "动感、跳跃的节奏" },
    { value: "狂暴的", label: "狂暴的", desc: "极快、混乱、紧迫" },
    { value: "渐进式", label: "渐进式", desc: "从慢到快逐步加速" },
    { value: "呼吸式", label: "呼吸式", desc: "快慢交替的节奏" },
  ],

  // ---- 叙事结构 ----
  reveal_structure: [
    { value: "无", label: "无特殊结构", desc: "直接展示完整场景" },
    { value: "局部到全貌", label: "局部到全貌", desc: "从特写拉远揭示全景" },
    { value: "全貌到局部", label: "全貌到局部", desc: "从远景推近聚焦细节" },
    { value: "遮挡揭示", label: "遮挡揭示", desc: "从障碍物后方移出" },
    { value: "焦点揭示", label: "焦点揭示", desc: "从失焦到合焦" },
    { value: "光线揭示", label: "光线揭示", desc: "从黑暗到光明" },
    { value: "转身揭示", label: "转身揭示", desc: "主体转身面向镜头" },
    { value: "自定义", label: "自定义" },
  ],

  // ---- 技术参数 ----
  resolution: [
    { value: "360p", label: "360p", desc: "640x360" },
    { value: "480p", label: "480p", desc: "854x480" },
    { value: "540p", label: "540p", desc: "960x540" },
    { value: "720p", label: "720p", desc: "1280x720，大多数模型" },
    { value: "768p", label: "768p", desc: "1366x768" },
    { value: "1080p", label: "1080p", desc: "1920x1080，主流高清" },
    { value: "4K", label: "4K", desc: "3840x2160" },
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

  // ---- 质量控制：预置负面提示词 ----
  negative_preset_quality: [
    { value: "模糊", label: "模糊" },
    { value: "噪点过多", label: "噪点过多" },
    { value: "像素化", label: "像素化" },
    { value: "过曝", label: "过曝" },
    { value: "欠曝", label: "欠曝" },
    { value: "低分辨率", label: "低分辨率" },
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
    { value: "水印", label: "水印" },
    { value: "文字伪影", label: "文字伪影" },
    { value: "边缘模糊", label: "边缘模糊" },
    { value: "接缝可见", label: "接缝可见" },
    { value: "闪烁", label: "闪烁" },
    { value: "色带", label: "色带" },
  ],
  negative_preset_motion: [
    { value: "抖动", label: "抖动" },
    { value: "跳帧", label: "跳帧" },
    { value: "不自然的运动", label: "不自然的运动" },
    { value: "主体变形", label: "主体变形" },
    { value: "形态不稳定", label: "形态不稳定" },
  ],
  negative_preset_style: [
    { value: "卡通化", label: "卡通化" },
    { value: "过度饱和", label: "过度饱和" },
    { value: "不一致的风格", label: "不一致的风格" },
    { value: "AI感过重", label: "AI感过重" },
    { value: "塑料感", label: "塑料感" },
  ],
  negative_preset_ai: [
    { value: "过度平滑的皮肤", label: "过度平滑的皮肤" },
    { value: "不自然的对称", label: "不自然的对称" },
    { value: "重复纹理图案", label: "重复纹理图案" },
    { value: "漂浮的物体", label: "漂浮的物体" },
    { value: "融合的手指", label: "融合的手指" },
    { value: "穿模/穿透", label: "穿模/穿透" },
    { value: "背景突变", label: "背景突变" },
  ],

  // ---- 质量控制：预置质量增强词 ----
  booster_preset_resolution: [
    { value: "超高清", label: "超高清" },
    { value: "4K", label: "4K" },
    { value: "细节丰富", label: "细节丰富" },
    { value: "纹理清晰", label: "纹理清晰" },
  ],
  booster_preset_cinematic: [
    { value: "电影级画质", label: "电影级画质" },
    { value: "专业色彩分级", label: "专业色彩分级" },
    { value: "浅景深", label: "浅景深" },
    { value: "变形宽银幕镜头", label: "变形宽银幕镜头" },
    { value: "胶片质感", label: "胶片质感" },
  ],
  booster_preset_lighting: [
    { value: "自然光照", label: "自然光照" },
    { value: "体积光", label: "体积光" },
    { value: "精致的阴影层次", label: "精致的阴影层次" },
    { value: "全局光照", label: "全局光照" },
  ],
  booster_preset_motion: [
    { value: "流畅的运动", label: "流畅的运动" },
    { value: "自然的物理效果", label: "自然的物理效果" },
    { value: "逼真的布料模拟", label: "逼真的布料模拟" },
    { value: "真实的流体动力学", label: "真实的流体动力学" },
  ],
  booster_preset_overall: [
    { value: "获奖摄影", label: "获奖摄影" },
    { value: "杂志封面级", label: "杂志封面级" },
    { value: "大师级构图", label: "大师级构图" },
    { value: "专业级后期", label: "专业级后期" },
  ],
  booster_preset_realism: [
    { value: "微妙的镜头瑕疵", label: "微妙的镜头瑕疵" },
    { value: "自然的皮肤纹理", label: "自然的皮肤纹理" },
    { value: "真实的环境磨损", label: "真实的环境磨损" },
    { value: "有机的运动轨迹", label: "有机的运动轨迹" },
  ],
};

// 模块配置
export const MODULES = [
  { key: "scene", label: "场景描述", icon: "Clapperboard", desc: "主体、环境、动作与物理真实感" },
  { key: "visualStyle", label: "视觉风格", icon: "Palette", desc: "艺术风格与色彩方案" },
  { key: "cinematography", label: "摄影控制", icon: "Camera", desc: "镜头语言、构图与镜头个性" },
  { key: "lighting", label: "光照系统", icon: "Sun", desc: "布光方案与环境光效" },
  { key: "audio", label: "音频设计", icon: "Music", desc: "声音与音乐描述" },
  { key: "motion", label: "运动与叙事", icon: "Zap", desc: "时间控制与叙事结构" },
  { key: "technical", label: "技术参数", icon: "Settings", desc: "模型级生成参数" },
  { key: "quality", label: "质量控制", icon: "Shield", desc: "增强与约束指令" },
] as const;

// 默认蓝图数据
export function createDefaultBlueprint(): VideoBlueprint {
  return {
    scene: {
      subject_type: "",
      subject: "",
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
      mood: "",
      narrative_context: "",
      surface_material: "",
      physics_behavior: "",
      physics_forces: "",
      physics_constraints: "",
      micro_elements: [],
      weathering_aging: "",
      atmosphere_detail: "",
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
      composition_detail: "",
      camera_movement: "",
      movement_speed: "",
      movement_direction: "",
      lens_focal_length: "",
      depth_of_field: "",
      focus_target: "",
      focus_transition: "",
      pov_type: "",
      lens_imperfection: [],
      bokeh_shape: "",
      film_texture: "",
      handheld_style: "",
      exposure_variation: "",
    },
    lighting: {
      time_of_day: "",
      key_light_type: "",
      key_light_direction: "",
      fill_light: "",
      rim_light: "",
      light_quality: "",
      color_temperature: "",
      practical_lights: [],
      atmospheric_effects: [],
      shadow_style: "",
      color_spill: "",
    },
    audio: {
      ambient_sound: "",
      music_style: "",
      music_tempo: "",
      sound_effects: [],
      dialogue: "",
      dialogue_characters: "",
      voiceover: "",
    },
    motion: {
      time_effect: "",
      pacing: "",
      timeline_beats: "",
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
      start_frame_url: "",
      end_frame_url: "",
      input_video_url: "",
      motion_reference_url: "",
      reference_strength: 0.8,
      enable_audio: true,
    },
    quality: {
      negative_prompts: [],
      quality_boosters: [],
    },
  };
}
